import React from 'react'

export default function Hire() {
    let demodata = [
        { 'name': 'sdver', 'location': 'fwewe', 'mobile': '6585685', 'lawyerId': 'defwes' },
        { 'name': 'sdver', 'location': 'fwewe', 'mobile': '6585685', 'lawyerId': 'defwes' },
        { 'name': 'sdver', 'location': 'fwewe', 'mobile': '6585685', 'lawyerId': 'defwes' },
        { 'name': 'sdver', 'location': 'fwewe', 'mobile': '6585685', 'lawyerId': 'defwes' },
    ]
    return (
        <div className={`h-screen  ${localStorage.getItem('theme') == "0" ? "dark:bg-slate-800 dark:text-whit dark:text-slate-400" : ""}`}>
            <form className='p-8'>
                <div className="mb-6 ">
                    <div className='mt-16'>
                        <label htmlFor="first_name" className=" mb-2 block text-sm font-medium ">Location</label>
                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ex Delhi" required />
                    </div>
                    <div className='mt-2'>
                        <label htmlFor="last_name" className=" mb-2 block text-sm font-medium ">Case Detail</label>
                        <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500   p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ex violence" required />
                    </div>
                    <div className='mt-2'>
                        <label htmlFor="company" className=" mb-2 block text-sm font-medium ">Description About Case</label>
                        <input type="textbox" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description" />
                    </div>
                </div>

                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>

            <div className='flex flex-wrap gap-4'>
                {demodata.map((e) => {
                    return <div className="border-gray-200 ml-4 w-[50%] bg-white p-4 rounded-lg shadow-md flex items-center space-x-4">
                        <div className="flex-1">
                            <h1 className="text-xl font-bold">{e.name}</h1>
                            <h3 className="text-gray-600">{e.location}</h3>
                            <h3 className="text-gray-600">{e.mobile}</h3>
                            <h4 className="text-gray-500">{e.lawyerId}</h4>
                        </div>
                    </div>

                })}
            </div>

        </div>
    )
}
