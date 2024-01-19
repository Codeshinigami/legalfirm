import ChatBubble from "../components/Dashboard/chatbubble"
import { bot } from "../assets"
import { send } from "../assets"
import ChatLoader from "../components/loaders/chatLoader"
import { useEffect, useRef, useState } from "react"
import Axios from "axios";

export default function Legalsage() {

    const chatsRef = useRef(null);
    const chatInput = useRef(null);
    const [chats, setChats] = useState([]);
    const [message, setMessage] = useState("");
    const [sendDisabled , setsendDisabled] = useState(false);

    const scrollToLatestMessage = () => {
        // Scroll to the latest message
        chatsRef.current.scrollIntoView({ behavior: "smooth" });
    };

    const requestAi = async () => {

        setsendDisabled(true);
        chatInput.current.value = "";
        chats.push({aiMsg : ".......", userMsg : message});

        setTimeout(() => {
            chats[chats.length - 1].aiMsg = "hey there";
            setsendDisabled(false);
        }, 4000);

        // await Axios.post("http://localhost:5000/chatCompletion", {
        //     message
        // }).then(res => {
        //     console.log(res.data)
        //     if (res.data.aiMsg) {
                    // chats[-1].aiMsg =  res.data.aiMsg;
        //         setMessage("");
        //     } else {
        //         console.error(res.data.error);
        //     }
        // })   

    }

    useEffect(() => {
        
        const newestchat = chats[chats.length - 1];

        console.log(chats)
        // to store chats in database
        const updateChats = async() =>{
            await Axios.post("http://localhost:5000/updateChat" , {
                email : "varinder@gmail.com",
                thread : {
                    user : newestchat.userMsg,
                    ai : newestchat.aiMsg
                }
            }).then((res) =>{
                if(res.success){
                    console.log("successfully updated chats")
                }else if(res.error){
                    console.log(res.error);
                }
            }).catch(err => console.log(err))
        }

        //checking if newest message have ai resonse -- only then updating chats
        if( newestchat?.aiMsg.length > 0){
            updateChats();
        }

    }, [chats])

    return (

        // Chat View on LegalSage tab

        <div className="h-[90vh] flex flex-col relative">
            <div className="h-[88%] pr-10 pl-10 pt-5 pb-2 w-[70%] mr-auto ml-auto overflow-x-hidden overflow-scroll no-scrollbar">
                <div className="relative grid auto-rows-[minmax(0,_1fr)] gap-y-5 ">
                    {chats.length > 0 ?
                        chats.map((msg, i) => {
                            console.log("user" + i,"bot" + i);
                            return (
                            <>
                                <ChatBubble key={"user" + i} user={"user"} message={msg.userMsg} profilepic={bot}></ChatBubble>
                                <ChatBubble key={"bot" + i} user={"bot"} message={msg.aiMsg} profilepic={bot}></ChatBubble>
                            </>
                            )
                        })
                        : "" }
                </div>
                <div ref={chatsRef}></div>
            </div>
            {sendDisabled && <div className="absolute grid items-center w-[90%] left-10 bottom-20">
                <ChatLoader />
            </div>}

            <div className="h-[12%] grid items-center bg-transparent backdrop-blur-lg">
                <div className="relative flex justify-center items-center">
                    <input type="text" ref={chatInput} onChange={(e) => { setMessage(e.target.value) }} placeholder="Ask LegalSage to get your Legal Queries Answered........" className="w-[70%] ml-auto mr-auto p-5 pr-14 h-[50px] leading-3 bg-gray-200 border-0 rounded-full focus:outline-none" />
                    <button disabled={sendDisabled} className={`bg-black p-2 rounded-full absolute top-[7px] right-[13vw] ${sendDisabled && "opacity-70"}`} onClick={requestAi}>
                        <img src={send}  alt="send"/>
                    </button>
                </div>
            </div>
        </div>
    )
}