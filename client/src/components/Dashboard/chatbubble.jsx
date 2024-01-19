
export default function ChatBubble({ user, message, profilepic }) {

    const chat = "absolute right-0 flex-row-reverse"
    const borders = "rounded-tr-none bg-slate-700"

    const brokeMsg = message.replace(/\n/g, '<br>');

    return (
        <div >
            <div className={`flex items-start gap-2.5 ${user == "user" && chat}`}>
                <img className="w-8 h-8 rounded-full" src={profilepic} alt={user} />
                <div className={`flex flex-col w-auto max-w-[600px] leading-1.5 p-2 pl-5 pr-5 border-gray-200 bg-blue-500 rounded-xl rounded-tl-none ${user == "bot" && borders}`}>
                    <p className="text-sm font-normal py-2.5 text-white " dangerouslySetInnerHTML={{ __html: brokeMsg }}></p>
                </div>
            </div>
        </div>
    )
}