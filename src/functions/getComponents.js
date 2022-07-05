import axios from "axios";
import CookieController from "./CookieController";
import ServerData from "../config/ServerData.config";

function getComponents(setSateFunc = () =>{},name = null){
    let url,
        token = CookieController.getCookie("userKey");
    if (token){
        if (name == null)
            url=`${new ServerData().getHost()}/components/get?token=${token}`; 
        else
            url=`${new ServerData().getHost()}/components/get?name=${name}&token=${token}`;
        return axios.get(url).then(response => {
            if (name == null) setSateFunc(response.data);
            else setSateFunc(response.data['data'][0]['value']);
            return response.data;
        }).catch(()=> console.log('Ошибка запроса'));
    }else return [];
}

export default getComponents;