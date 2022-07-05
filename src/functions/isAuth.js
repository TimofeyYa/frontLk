import axios from "axios";
import ServerData from "../config/ServerData.config";
import CookieController from "./CookieController";

const isAuth = async ()=> {
    const token = CookieController.getCookie("userKey");

    if (token){
        await axios.get(`${new ServerData().getHost()}/user/isAuth?token=${token}`)
        .then(function (response) {
            if (response.data.status === 0){
                CookieController.setCookie('userKey', "");
                window.location.href="/login";
            }
        }).catch(()=>{
            CookieController.setCookie('userKey', "");
            window.location.href="/login";
        })
    }else CookieController.setCookie('userKey', "");
}

export default isAuth;