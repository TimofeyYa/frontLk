import axios from "axios";
import getCookie from "./getCookie";

function getUserInfo(setFunc = () =>{},type = null){
    let url;
    let token = getCookie("userKey");

    if (token){
        if (type == null){
            url=`http://45.133.218.11:5501/user/userInfo?token=${token}`;
        }else{
            url=`http://45.133.218.11:5501/user/userInfo?type=${type}&token=${token}`;
        }
        return axios.get(url).then(response => {
            if (type == null){
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

export default getUserInfo;