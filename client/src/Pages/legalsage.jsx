import ChatBubble from "../components/Dashboard/chatbubble"
import { send } from "../assets"
import ChatLoader from "../components/loaders/chatLoader"
import React, { useEffect, useRef, useState } from "react"
import { LoginContext } from "../context/loginProvider"
import { useContext } from "react"
import { legalfirm } from "../assets"
import Axios from "axios";

const api_url = import.meta.env.VITE_API_URL;

export default function Legalsage() {

    const credentials = useContext(LoginContext);

    const chatsRef = useRef(null);
    const chatInput = useRef(null);
    const [chats, setChats] = useState([]);
    const [message, setMessage] = useState("");
    const [sendDisabled , setsendDisabled] = useState(false);

    const scrollToLatestMessage = () => {
        // Scroll to the latest message
        chatsRef.current.scrollIntoView();
    };

    const updateChats = async(updatedChats) =>{
            
        var newestchat = updatedChats[updatedChats.length - 1];;
        
        await Axios.post(api_url + "/updateChat" , {
            email : credentials.profile.email,
            thread : {
                user : newestchat.user,
                ai : newestchat.ai
            }
        }).then((res) =>{
            if(res.success){
                console.log("successfully updated chats")
            }else if(res.error){
                console.log(res.error);
            }
        }).catch(err => console.log(err))
    }

    const requestAi = async () => {

        setsendDisabled(true);
        chatInput.current.value = "";

        if(chats.length == 0){
            setChats([{user : message , ai :""}])
        }else{
            setChats(prechats => [...prechats , {user : message , ai : ""}]);
        }

        // setTimeout(() => {
            // if(chats.length == 1){
            //     setChats({user : message , ai :"ok hii"})
            // }else{
        //         setChats(prechats => {
        //             console.log(prechats);
        //             const updatedChats = [
        //                 ...prechats.slice(0, prechats.length - 1),
        //                 { user: message, ai: "hey there" } 
        //             ];
        //             // console.log(updateChats)
        //             updateChats(updatedChats);
        //             return updatedChats;
        //         });

        //     setsendDisabled(false); 
        // }, 4000);

        await Axios.post("http://localhost:5000/chatCompletion", {
            message
        }).then(res => {
            if (res.data.ai) {
                    setChats(prechats => {
                        const updatedChats = [
                            ...prechats.slice(0, prechats.length - 1),
                            { user: message, ai: res.data.ai } 
                        ];
                        updateChats(updatedChats);
                        return updatedChats;
                    });
                setMessage("");
            } else {
                console.error(res.data.error);
            }
        })   
        setsendDisabled(false);
    }

    //whenever chats update scroll to latest message
    useEffect(() =>{
        scrollToLatestMessage();
    }, [chats])

    useEffect(() =>{

        chatInput.current?.focus();

        const getChats = async() =>{
            await Axios.post(api_url + "/getChats" , {
                email : credentials.profile.email
            }).then((res) =>{
                if(res.error){
                    console.log(res.error);
                }else{
                    if(res.data.chats){
                        setChats(res.data.chats);
                    }
                }
            }).catch(err => console.log(err));
        }

        getChats();
    },[])

    const handleEnterKey = (e) => {
        if (e.key === "Enter") {
            requestAi();
        }
    }

    return (

        // Chat View on LegalSage tab

        <div style={{height:'100vh'}} className={`border-l border-r border-gray-300 ${localStorage.getItem('theme')==0?"dark:bg-slate-800 dark:text-white dark:text-slate-400":""} h-[90vh] flex flex-col relative`}>
            <div className="h-[88%] pr-10 pl-10 pt-5 pb-2 w-[70%] mr-auto ml-auto overflow-x-hidden overflow-scroll no-scrollbar">
                <div className="relative grid auto-rows-max-content gap-y-5 ">
                    {chats?.length > 0 ?
                        chats.map((msg, i) => {
                            return (
                            <div key={msg._id || i} className="grid auto-rows-max-content gap-y-20">
                                <ChatBubble user={"user"} message={msg.user} profilepic={credentials.profile.picture}></ChatBubble>
                                <ChatBubble user={"bot"} message={msg.ai} profilepic={legalfirm}></ChatBubble>
                            </div>
                            )
                        })
                        : "" }
                </div>
                <div ref={chatsRef} id="bottom"></div>
            </div>

            <div className="h-[12%] grid items-center bg-transparent ">
                <div className="relative flex justify-center items-center">
                    <input type="text" ref={chatInput} onChange={(e) => { setMessage(e.target.value) }} placeholder="Ask LegalSage to get your Legal Queries Answered........" onKeyDown={handleEnterKey} className="w-[70%] ml-auto mr-auto p-5 pr-14 h-[50px] leading-3 bg-gray-200 border-0 rounded-full focus:outline-none" />
                    <button disabled={sendDisabled} className={`bg-black p-2 rounded-full absolute top-[7px] right-[13vw] ${sendDisabled && "opacity-70"}`} onClick={requestAi} >
                        <img src={send}  alt="send"/>
                    </button>
                </div>
            </div>
        </div>
    )
}