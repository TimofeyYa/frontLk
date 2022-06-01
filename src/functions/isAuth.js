import axios from "axios";
import getCookie from "./getCookie";
import setCookie from "./setCookie";

const isAuth = async ()=> {


    const token = getCookie("userKey");

    if (token){
        await axios.get(`http://localhost:5501/user/isAuth?token=${token}`)
        .then(function (response) {
            const data = response.data;
            if (data.status == 0){
                setCookie('userKey', "")
            }
        }).catch(()=>{
            setCookie('userKey', "")
        })
    }else{
        setCookie('userKey', "")
    }
   
}

export default isAuth;