const openai = require("../config/openai");

// create a thread
const createThread = async () => {
    try {
        const threadResponse = await openai.beta.threads.create({
        });
        return threadResponse.id;
    } catch (err) {
        console.error(err);
        return null;
    }
};

// run the assistant
const runAssistant = async (threadId) => {
    try {
        const runResponse = await openai.beta.threads.runs.create(threadId, {
            assistant_id: "asst_pVGMa8J9TeKPbl9Gz6awVv9Q",
        });
        return runResponse.id;
    } catch (err) {
        console.error(err);
        return null;
    }
};

// wait for the run to complete
const waitForRunCompletion = async (threadId, runId) => {
    let run;
    do {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        run = await openai.beta.threads.runs.retrieve(threadId, runId);
    } while (run.status !== "completed");
};

// main function for chat completion
const chatCompletion = async (req, res) => {
    try {
        const {message} = req.body;

        console.log("received message...")

        if(!message){
            res.json({error : "message is required."})
            return;
        }

        // Create a Thread
        const threadId = await createThread();

        if (!threadId) {
            res.json({ error: "Failed to create a thread" });
            return;
        }

        console.log("created thread ...")

        // Add a Message to the Thread
        await openai.beta.threads.messages.create(threadId, {
            role: "user",
            content: message,
        });

        console.log("created message ...")

        // Run the Assistant
        const runId = await runAssistant(threadId);

        if (!runId) {
            res.json({ error: "Failed to run the assistant" });
            return;
        }
        console.log("waiting for completion ...")
        // Wait for the Run to complete
        await waitForRunCompletion(threadId, runId);

        console.log("completed almost ...")

        // Display the Assistant's Response
        const messagesResponse = await openai.beta.threads.messages.list(threadId);

        //filtering the assistant response
        const assistantResponses = messagesResponse.data.filter(
            (msg) => msg.role === "assistant"
        );
        
        //getting only message from it
        const aiMsg = assistantResponses
            .map((msg) =>
                msg.content
                    .filter((contentItem) => contentItem.type === "text")
                    .map((textContent) => textContent.text.value)
                    .join("\n")
            ).join("\n");

        console.log("sent to client ... ")
        res.status(200).json({ ai : aiMsg });
    } catch (error) {
        console.error(error);
        res.json({ error: "Internal server error" });
    }
};

module.exports = chatCompletion;
