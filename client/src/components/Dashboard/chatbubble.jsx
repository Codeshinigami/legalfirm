import ChatLoader from "../loaders/chatLoader";

export default function ChatBubble({ user, message, profilepic }) {

    let tailwnd=""
    let txtclr = ''
    if(localStorage.getItem('theme')===undefined || localStorage.getItem('theme')==0){
        txtclr = 'rounded-tr-none bg-gray-100 text-black'
    }
    else{
        txtclr = 'rounded-tr-none !bg-slate-700 text-white'
        tailwnd = " max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-100 dark:border-gray-700"
    }

    const chat = "absolute right-0 flex-row-reverse"
    const borders = txtclr
    
    const brokeMsg = message.replace(/\n/g, '<br>');

    return (
        <div >
            <div className={`flex items-start gap-2.5 mt-10 ${user == "user" && chat}`}>
                <img className="w-8 h-8 rounded-full" src={profilepic} alt={user} />
                <div className={`flex flex-col w-auto max-w-[600px] leading-1.5 p-2 pl-5 pr-5 border-gray-200 bg-violet-600 rounded-xl rounded-tl-none ${user == "bot" && borders}`}>
                <p className="text-sm font-normal py-2.5 ">
                {message ? (
                    <span dangerouslySetInnerHTML={{ __html: brokeMsg }} />
                ) : (
                    <ChatLoader />
                )}
                </p>
                </div>
            </div>
        </div>
    )
}