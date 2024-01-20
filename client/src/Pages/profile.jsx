import { useContext, useState } from "react"
import { LoginContext } from "../context/loginProvider"

let tailwnd = ""
if (localStorage.getItem('theme') === undefined || localStorage.getItem('theme') == 0) {
    tailwnd = 'dark:bg-slate-800 dark:text-white dark:text-slate-400 bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg m-10'
}
else {
    tailwnd = "bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg m-10"
}
export default function Profile() {

    const [formDisplay, setFormDisplay] = useState(false)

    const credentials = useContext(LoginContext);

    return (
        <div  className={`mt-5  w-[100] ${formDisplay?"height-[100]":"h-screen"} flex justify-center ${localStorage.getItem('theme')=='0'?"dark:bg-slate-800 dark:text-white dark:text-slate-400":""}`}>
            <div className="text-center">

                <div className={tailwnd}>
                    <div className="px-4 py-5 sm:px-6 flex items-center">
                        <img src={credentials.profile.picture ? credentials.profile.picture : "/photo.png"} alt="wdw" width='80px' className="rounded-full" />
                        <div className="ml-3">
                            <h3 className="text-lg leading-6 font-medium ">
                                User database
                            </h3>
                            <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                Details and informations about user.
                            </p>
                        </div>
                    </div>
                    <div className="border-t border-gray-200">
                        <dl>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Full name
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {credentials.profile.name}
                                </dd>
                            </div>
                            <hr />
                            {/* <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                        Best techno
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        React JS
                        </dd>
                    </div> */}
                            <hr />
                            <div className="bg-gray-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Email address
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {credentials.profile.email}
                                </dd>
                            </div>
                            <hr />
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Salary
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    $10,000
                                </dd>
                            </div>
                            <hr />
                            <div className="bg-gray-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    About
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself
                                </dd>
                            </div>


                            {/* <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                        Partner with us
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        If you are a lawyer then you can reach to many new employees with us
                        </dd>
                    </div> */}

                        </dl>
                    </div>
                </div>
                <div>
                    <button onClick={() => { setFormDisplay(!formDisplay) }} className={` ${localStorage.getItem('theme')=='0'?"bg-white text-black ":"dark:bg-slate-800 dark:text-white dark:text-slate-400"}  p-2 rounde`}>Partner With us</button>
                    {formDisplay ?
                        <form>
                            <div class="grid gap-6 mb-6 md:grid-cols-2 mx-32">
                                <div>
                                    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 ">First name</label>
                                    <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                                </div>
                                <div>
                                    <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 ">Last name</label>
                                    <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
                                </div>

                                <div>
                                    <label for="website" class="block mb-2 text-sm font-medium text-gray-900 ">Location</label>
                                    <input type="text" id="website" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="flowbite.com" required />
                                </div>
                                <div>
                                    <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 "> Mobile</label>
                                    <input type="number" id="visitors" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                                </div>
                            </div>
                            <div class="mb-6 mx-32">
                                <label class="block mb-2 text-sm font-medium text-gray-900 ">Lawyer Id</label>
                                <input type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
                            </div>


                            <button type="submit" class=" mb-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                        </form>
                        : ""}
                </div>
            </div>
        </div>
    )
}