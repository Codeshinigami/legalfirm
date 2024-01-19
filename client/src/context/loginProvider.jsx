import { createContext, useEffect, useState } from "react"
import Cookies from "js-cookie"
import {Outlet} from 'react-router-dom';
import Axios from "axios";

const api_url = import.meta.env.VITE_API_URL;
export const LoginContext = createContext();

export default function LoginProvider(){

    const jwt_token = Cookies.get("jwt");
    const [loggedIn , setloggedIn] = useState(false);
    const [profile , setProfile] = useState({}); 

    useEffect(() =>{

        //getting decoded data from server
        const getDecodedJWT = async() =>{
            await Axios.post(api_url + "/decodeJWT" , {
                jwt_token : jwt_token
            }).then((res) =>{
                if(res.data.error){
                    Cookies.remove("jwt");
                }else{
                    setloggedIn(true);
                    setProfile({name : res.data.name , email : res.data.email})
                }
            })
        }

        getDecodedJWT();

    }, [jwt_token])

    return(
        <LoginContext.Provider value={{loggedIn , profile}}>
            <Outlet/>
        </LoginContext.Provider>
    )
}