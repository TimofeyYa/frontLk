import axios from "axios";
import getCookie from "./getCookie";
import setCookie from "./setCookie";
import ServerData from "../config/ServerData.config";

const isAuth = async ()=> {


    const token = getCookie("userKey");

    if (token){
        await axios.get(`${new ServerData().getHost()}/user/isAuth?token=${token}`)
        .then(function (response) {
            const data = response.data;
            if (data.status == 0){
                setCookie('userKey', "");
                window.location.href="/login";
            }
        }).catch(()=>{
            setCookie('userKey', "");
            window.location.href="/login";
        })
    }else{
        setCookie('userKey', "");
    }
   
}

export default isAuth;