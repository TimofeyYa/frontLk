import axios from "axios";
import getCookie from "./getCookie";
import ServerData from "../config/ServerData.config";

function getComponents(setFunc = () =>{},name = null){
    let url;
    let token = getCookie("userKey");

    if (token){
        if (name == null){
            url=`${new ServerData().getHost()}/components/get?token=${token}`;
        }else{
            url=`${new ServerData().getHost()}/components/get?name=${name}&token=${token}`;
        }
        return axios.get(url).then(response => {
            if (name == null){
                setFunc(response.data);
            }else{
                setFunc(response.data['data'][0]['value']);
            }
            return response.data;
        }).catch(()=>{
            console.log('Ошибка запроса');
        })
    }else{
        return [];
    }
    
}

export default getComponents;