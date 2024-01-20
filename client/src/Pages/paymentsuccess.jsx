import gif from "../assets/check.gif"

export default function PaymentSuccess(){
    return(
        <div className="w-[100vw] h-[100vh] bg-[#1E293B] grid">
            <div className="flex flex-col items-center justify-center">
                <img src={gif} alt="" className="w-32 h-32"/>
                <h3 className="text-2xl font-semibold text-white">Payment Done Successfully</h3>
                <p className="text-white">You may now close this page.</p>
                <button className="bg-slate-200 p-3 pt-1 pb-1 mt-10 rounded text-black" onClick={() => location.pathname = "/"}>Home</button>
            </div>
        </div>
    )
}