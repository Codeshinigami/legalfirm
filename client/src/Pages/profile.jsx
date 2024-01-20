import { useContext } from "react"
import { LoginContext } from "../context/loginProvider"

let tailwnd=""
    if(localStorage.getItem('theme')===undefined || localStorage.getItem('theme')==0){
        tailwnd = 'dark:bg-slate-800 dark:text-white dark:text-slate-400 bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg m-10'
    }
    else{
        tailwnd = "bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg m-10"
    }
export default function Profile() {

    const credentials = useContext(LoginContext);

    return (
        <div class={tailwnd}>
            <div class="px-4 py-5 sm:px-6 flex items-center">
                <img src={credentials.profile.picture ? credentials.profile.picture : "/photo.png"} alt="wdw" width='80px' className="rounded-full"/>
                <div className="ml-3">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                    User database
                </h3>
                <p class="mt-1 max-w-2xl text-sm text-gray-500">
                    Details and informations about user.
                </p>
                </div>
            </div>
            <div class="border-t border-gray-200">
                <dl>
                    <div class="bg-gray-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                            Full name
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {credentials.profile.name}
                        </dd>
                    </div>
                    <hr />
                    {/* <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                            Best techno
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            React JS
                        </dd>
                    </div> */}
                    <hr />
                    <div class="bg-gray-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                            Email address
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {credentials.profile.email}
                        </dd>
                    </div>
                    <hr />
                    <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                            Salary
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            $10,000
                        </dd>
                    </div>
                    <hr />
                    <div class="bg-gray-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                            About
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    )
}