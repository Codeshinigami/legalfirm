import { check } from "../assets";

const Pricing_categories = [
    {
        name: "Free",
        desc: "Base plan for everyone.",
        popular: false,
        price: "15",
        facilities: ["5 products", "Up to 1,000 subscribers", "Basic analytics", "48-hour support response time"]
    },
    {
        name: "Free",
        desc: "Base plan for everyone.",
        popular: true,
        price: "15",
        facilities: ["5 products", "Up to 1,000 subscribers", "Basic analytics", "48-hour support response time"]
    },
    {
        name: "Free",
        desc: "Base plan for everyone.",
        popular: false,
        price: "15",
        facilities: ["5 products", "Up to 1,000 subscribers", "Basic analytics", "48-hour support response time"]
    }
]

export default function Plans() {
    return (
        <div className="flex w-[100%] justify-between pl-10 pr-10 align-middle mt-20">
            {Pricing_categories.map((pricing, i) => {
                const { name, desc, popular, price, facilities } = pricing;
                return (
                    <div key={i} className="h-[500px] w-[32%] p-8 rounded-2xl border-[1px] border-gray-300">
                        <h2 className="font-semibold text-xl">{name}</h2>
                        <p className="pt-1 pb-3 text-sm">{desc}</p>
                        <h3 className="pt-3 pb-3 text-4xl font-bold">${price} <span className="text-sm font-semibold text-gray-500">/month</span></h3>
                        <button className="w-[100%] mt-3 text-[15px] text-blue-600 font-semibold rounded border-[1px] border-blue-100 border-solid p-1 mb-7">Buy Plan</button>
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