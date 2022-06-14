import axios from "axios";
import getCookie from "./getCookie";
import setCookie from "./setCookie";

const isAuth = async ()=> {


    const token = getCookie("userKey");

    if (token){
        await axios.get(`http://45.133.218.11:5501/user/isAuth?token=${token}`)
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