import axios from "axios";
import getCookie from "./getCookie";

function getComponents(setFunc = () =>{},name = null){
    let url;
    let token = getCookie("userKey");

    if (token){
        if (name == null){
            url=`http://45.133.218.11:5501/components/get?token=${token}`;
        }else{
            url=`http://45.133.218.11:5501/components/get?name=${name}&token=${token}`;
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