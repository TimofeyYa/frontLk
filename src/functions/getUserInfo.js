import axios from "axios";
import ServerData from "../config/ServerData.config";
import CookieController from "./CookieController";

function getUserInfo(setSateFunc = () =>{},type = null){
    let url,
        token = CookieController.getCookie("userKey");
    if (token){
        if (type == null)
            url=`${new ServerData().getHost()}/user/userInfo?token=${token}`;
        else
            url=`${new ServerData().getHost()}/user/userInfo?type=${type}&token=${token}`;
        return axios.get(url).then(response => {
            if (type == null) setSateFunc(response.data);
            else setSateFunc(response.data['data'][0]['value']);
            return response.data;
        }).catch(()=>console.log('Ошибка запроса'));
    }else return [];
}

export default getUserInfo;