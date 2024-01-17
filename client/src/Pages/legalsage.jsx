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

    const requestAi = async () => {

        chatInput.current.value = "";

        await Axios.post("http://localhost:5000/chatCompletion", {
            message
        }).then(res => {
            console.log(res.data)
            if (res.data.aiMsg) {
                chats.push({ aiMsg: res.data.aiMsg, userMsg: message });
                setMessage("");
            } else {
                console.error(res.data.error);
            }
        })
    }

    console.log(chats)
    useEffect(() => {

        // to set chats from database

        chatsRef.current?.scrollIntoView();
    }, [chats])

    return (

        // Chat View on LegalSage tab

        <div className="h-[90vh] flex flex-col relative">
            <div className="h-[88%] pr-10 pl-10 pt-5 pb-2">
                <div className="relative grid auto-rows-[minmax(0,_1fr)] gap-y-20 overflow-scroll h-[100%] overflow-x-hidden no-scrollbar">
                    {chats.length > 0 ?
                        chats.map((msg, i) => {
                            return (<><ChatBubble user={"user"} message={msg.userMsg} profilepic={bot}></ChatBubble>
                                <ChatBubble user={"bot"} message={msg.aiMsg} profilepic={bot}></ChatBubble></>)
                        })
                        :"" }
                    <div ref={chatsRef}></div>
                </div>

            </div>
            <div className="absolute grid items-center w-[90%] left-10 bottom-20">
                <ChatLoader />
            </div>

            <div className="h-[12%] grid items-center bg-transparent backdrop-blur-lg">
                <div className="relative flex justify-center items-center">
                    <input type="text" onChange={(e) => { setMessage(e.target.value) }} placeholder="Ask LegalSage to get your Legal Queries Answered........" className="w-[80%] p-5 pr-14 h-[50px] leading-3 bg-gray-200 border-0 rounded-full focus:outline-none" />
                    <img src={send} alt="send" ref={chatInput} onClick={requestAi} className="bg-black p-2 rounded-full absolute top-[7px] right-[9vw]" />
                </div>
            </div>
        </div>
    )
}