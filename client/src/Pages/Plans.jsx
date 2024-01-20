import { useState } from "react";
import { check } from "../assets";
import { legalfirm } from "../assets";
import { useContext } from "react";
import { LoginContext } from "../context/loginProvider";
import {toast} from "react-hot-toast";
import Axios from "axios";

const Pricing_categories = [
    {
        name: "Free",
        desc: "The plan you're currently enrolled in.",
        popular: false,
        price: "0",
        facilities: ["LegalSage AI", "Up to 800 tokens per month",]
    },
    {
        name: "Pro",
        desc: "A plan that will ease your legal processes",
        popular: true,
        price: "350",
        facilities: ["LegalSage AI", "Up to 2,000 tokens per month", "Document Generation", '24/7 Legal Assistance']
    },
    {
        name: "Enterprise",
        desc: "Dedicated Plan specially for businesses",
        popular: false,
        price: "900",
        facilities: ["LegalSage AI", "Unlimited tokens", "Special documents generation with encryption", "24/7 Legal Assistance"]
    }
]

const api_url = import.meta.env.VITE_API_URL;

export default function Plans() {

    const credentials = useContext(LoginContext);

    const [loading , setloading] = useState(false);

    let tailwnd = ""
    if (localStorage.getItem('theme') === undefined || localStorage.getItem('theme') == 0) {
        tailwnd = 'dark:bg-slate-800 dark:text-white dark:text-slate-400 flex w-[100%] justify-between items-center pl-10 pr-10 align-middle'
    }
    else {
        tailwnd = "flex w-[100%] justify-between items-center pl-10 pr-10 align-middle"
    }


    //handling payment when clicked on checkout button
    const handlePayment = async (total, email) => {

        setloading(true);

        try {
            //getting razorpay key from server
            const { data: { key } } = await Axios.get(api_url + "/getKey");

            //posting server with amount 
            const { data: { order } } = await Axios.post(api_url + "/checkout", {
                amount: total
            })

            var options = {
                key: key, 
                amount: order.amount, 
                currency: "INR",
                name: "LegalFirm",
                image: legalfirm,
                order_id: order.id,
                callback_url: `${api_url}/paymentverification?email=${email}`,
                theme: {
                    color: "#7C3AED"
                }
            }

            var razor = new window.Razorpay(options);
            razor.open();
            
            setloading(false);

        } catch (err) {
            toast.error("an error occured");
            setloading(false);
            console.log(err);
        };

        setloading(false);
    }

    return (
        <div className={tailwnd} style={{ height: '100vh' }}>
            {Pricing_categories.map((pricing, i) => {
                const { name, desc, popular, price, facilities } = pricing;
                return (
                    <div key={i} className={"h-[500px] w-[32%] p-8 rounded-2xl border-[1px] border-gray-300 " + (popular ? "!border-violet-600 border-[2px] h-[530px] w-[35%]" : "")}>
                        <div className="flex items-center justify-between">
                            <h2 className="font-semibold text-xl">{name}</h2>
                            {popular && <p className="text-xs font-semibold bg-[#EDECFC] text-violet-600 p-[7px] rounded-full">Most Popular</p>}
                        </div>
                        <p className="pt-1 pb-3 text-sm">{desc}</p>
                        <h3 className="pt-3 pb-3 text-4xl font-bold">₹{price} <span className="text-sm font-semibold text-gray-500">/month</span></h3>
                        <button onClick={() => handlePayment(price , credentials.profile.email)} className={"w-[100%] mt-3 text-[15px] text-violet-600 font-medium rounded border-[1px] border-blue-100 border-solid p-1 mb-7" + (popular ? " !text-white bg-violet-600" : "")}>Buy Plan</button>
                        <ul>
                            {facilities.map((facility, index) => {
                                return (
                                    <div className="flex items-center pt-2">
                                        <img src={check} alt="check" />
                                        <li index={index} className="pl-1">{facility}</li>
                                    </div>
                                )
                            })}
                        </ul>
                    </div>
                );
            })}
        </div>)
}