const openai = require("../config/openai");

// create a thread
const createThread = async () => {
    try {
        const threadResponse = await openai.beta.threads.create();
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
            assistant_id: "asst_Dt9Z92rfO4OLBMkhGJjKY6nV",
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
        // Create a Thread
        const threadId = await createThread();

        if (!threadId) {
            res.json({ error: "Failed to create a thread" });
            return;
        }

        // Add a Message to the Thread
        await openai.beta.threads.messages.create(threadId, {
            role: "user",
            content: "when does ipc 302 comes in action?",
        });

        // Run the Assistant
        const runId = await runAssistant(threadId);

        if (!runId) {
            res.json({ error: "Failed to run the assistant" });
            return;
        }

        // Wait for the Run to complete
        await waitForRunCompletion(threadId, runId);

        // Display the Assistant's Response
        const messagesResponse = await openai.beta.threads.messages.list(threadId);
        const assistantResponses = messagesResponse.data.filter(
            (msg) => msg.role === "assistant"
        );
        const response = assistantResponses
            .map((msg) =>
                msg.content
                    .filter((contentItem) => contentItem.type === "text")
                    .map((textContent) => textContent.text.value)
                    .join("\n")
            )
            .join("\n");

        res.json({ response });
    } catch (error) {
        console.error(error);
        res.json({ error: "Internal server error" });
    }
};

module.exports = chatCompletion;
