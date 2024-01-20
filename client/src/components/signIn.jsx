import { useContext, useEffect, useState } from "react";
import Axios from "axios";
import toast from "react-hot-toast";
import SimpleLoader from "./loaders/simpleloader";

const api_url = import.meta.env.VITE_API_URL;

export default function SignIn({ setLogin }) {

  const [signup, setSignup] = useState(false);
  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");

  const [loading , setLoading] = useState(false);

  const body = document.querySelector("body");

  async function handleCredentialResponse(response) {
    setLoading(true);
    var encodedToken = encodeURIComponent(response.credential);
    await Axios.post(api_url + "/googlelogin" , {
      token : encodedToken
    }, {withCredentials : true}).then((res) =>{
      if(res.data.error){
        console.log(res.data.error);
        toast.error(res.data.error || "an error occured while logging in");
      }else{
        toast.success("logged in.");
        location.reload();
      }
    })
    setLoading(false)
  }

  const handleLogin = async() =>{

    if(!email || !password){
      toast.error("Fill out all the fields.")
      return;
    }

    setLoading(true);

    await Axios.post(api_url + "/login", {
      email : email,
      password : password
    },{withCredentials : true }).then((res) =>{
      console.log(res.data);
      if(res.data.success){
        toast.success("registered successfully.")
        location.reload();
      }else{
        toast.error(res.data.error || "an error occured while logging in");
      }
    }).catch((err) => {console.log(err); toast.error("Internal Server error.")})

    setLoading(false);

  }

  const handleSignup = async() =>{
     if(!name || !email || !password){
      toast.error("Fill out all the fields.")
      return;
     }

     setLoading(true);

     await Axios.post(api_url + "/register" , {
      name : name,
      email : email,
      password : password
     },{withCredentials : true }).then((res) =>{
      console.log(res.data);
      if(res.data.success){
        toast.success("logged in successfully.")
        location.reload();
      }else{
        toast.error(res.data.error || "an error occured while registering");
      }
    }).catch((err) => {console.log(err); toast.error("Internal Server error.")})

    setLoading(false);

  }

  useEffect(() =>{
    google.accounts.id.initialize({
      client_id: "799527140319-c3qcq6ccadmfogl8sl04omoomr7d4gr7.apps.googleusercontent.com",
      callback: handleCredentialResponse
    });
    google.accounts.id.renderButton(
      document.querySelector("#buttonDiv"),
      { theme: "outline", size: "large" }
    );
  },[])


  return (
    <>
      <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 absolute top-0 left-0 z-50 bg-opacity-60 bg-black h-[100%] w-[100%]">
          <div
            className="bg-transparent backdrop-blur-sm w-[100vw] h-[100vh] absolute"
            onClick={() => {
              setLogin(false);
              body.style.overflow = "";
            }}
          ></div>
          <div className="w-full bg-white rounded-2xl shadow dark:border md:mt-0 sm:max-w-md xl:p-0 z-30">
            <div className="p-8 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900">
                Sign {signup ? "up" : "in"}
              </h1>
              <div className="space-y-4 md:space-y-6">
                {signup && (
                  <div>
                    <label
                      htmlFor="text"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      onChange={(e) => setName(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      placeholder="Rahul"
                      required=""
                    />
                  </div>
                )}
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required=""
                  />
                </div>
                <p className="font-semibold text-center">or</p>
                <div id="buttonDiv"></div>
                {/* <div className="bg-white mr-auto ml-auto border-2 border-solid  text-gray-100 hover:text-white shadow font-bold text-sm py-2 px-4 flex justify-center items-center cursor-pointer w-[60%] rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    className="w-6 h-6 mr-2"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#FFC107"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                    <path
                      fill="#FF3D00"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    ></path>
                    <path
                      fill="#4CAF50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    ></path>
                    <path
                      fill="#1976D2"
                      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                  </svg>
                  <p className="text-black" >Sign up with Google</p>
                </div> */}

                {!signup && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="remember" className="text-black">
                          Remember me
                        </label>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                )}

                {loading ? <div className="w-full bg-blue-600 rounded-lg px-5 py-[8px]"><SimpleLoader/></div> :<button
                  onClick={signup ? handleSignup : handleLogin}
                  className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  Sign {signup ? "up" : "in"}
                </button>}
                <p className="text-sm font-light text-center text-black">
                  {" "}
                  {signup
                    ? "Already have an account?"
                    : "Do not have an account yet?"}{" "}
                  <a
                    href="#"
                    onClick={() => {
                      setSignup(!signup);
                    }}
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    <span>Sign{signup ? "in" : "up"}</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
