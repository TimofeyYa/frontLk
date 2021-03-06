import axios from "axios";
import React from "react";
import NumbersLoader from "../subElements/loaders/NumbersLoader";
import { useSearchParams } from "react-router-dom";
import clasterData from "../../clasterData.json";
import ServerData from "../../config/ServerData.config";
import numberNormalize from "../../functions/numberNormalize";
import dateToNormalString from "../../functions/dateToNormalString";

function ResurseGrafic(props){
    const [data, setData] = React.useState({
        "claster": [-1,-1,-1,-1],
        "power":[-1,-1,-1,-1],
        "usePower":[-1,-1,-1,-1]
    });

    // Имя платформы
    const [platformName, setPlatformName] = React.useState('Общие ресурсы платформы')
    
    // Для сортировки по параметрам
    let [searchParams] = useSearchParams();
    let claster = searchParams.get("claster");

    // Выставляем последнюю дату 
    let [lastDate, setLastDate] = React.useState('');
    React.useEffect(()=>{
        // Получаем иформацию о кластере
        let clasterId = -1
        if (claster != null){
            if (clasterData[claster]){
                clasterId = clasterData[claster]['clasterID'];
                setPlatformName(`Ресурсы платформы ${clasterData[claster]['name']}`)
            } else {
                clasterId = 0;
                setPlatformName(`Ресурсы неизвестны для кластера "${claster}"`)
            }

        }else{
            setPlatformName('Общие ресурсы платформы');
        }
        
        setData({
            "claster": [-1,-1,-1,-1],
            "power":[-1,-1,-1,-1],
            "usePower":[-1,-1,-1,-1]
        });

        axios.get(`${new ServerData().getHost()}/params/lastDateRouter?token=${props.token}`) .then(function (response) {
            const date = dateToNormalString(new Date(response.data.data));
            if (response.data) setLastDate(date);
        })

        axios.get(`${new ServerData().getHost()}/params/claster/getClasterAll?resId=${clasterId}&token=${props.token}`) .then(function (response) {
            const swapObj = {...data};
      
            swapObj["claster"][0] = numberNormalize(response.data.countMaxStartVm);
            swapObj["claster"][1] = numberNormalize(response.data.countMaxVm);
            swapObj["claster"][2] = numberNormalize(response.data.countServers);
            swapObj["claster"][3] = numberNormalize(response.data.consolid);
            setData(swapObj);
        })

        axios.get(`${new ServerData().getHost()}/params/power/getPowerAll?resId=${clasterId}&token=${props.token}`) .then(function (response) {
            const swapObj = {...data};
          
            swapObj["power"][0] = numberNormalize(response.data.CPUChastot);
            swapObj["power"][1] = numberNormalize(response.data.countCPU);
            swapObj["power"][2] = numberNormalize(response.data.RAM);
            swapObj["power"][3] = numberNormalize(response.data.storage);
            setData(swapObj);
        })

        axios.get(`${new ServerData().getHost()}/params/usePower/getUsePowerAll?resId=${clasterId}&token=${props.token}`) .then(function (response) {
            const swapObj = {...data};
          
            swapObj["usePower"][0] = numberNormalize(response.data.middleChastotCPU);
            swapObj["usePower"][1] = numberNormalize(response.data.middleCountCPU);
            swapObj["usePower"][2] = numberNormalize(response.data.middleCountRAM);
            swapObj["usePower"][3] = numberNormalize(response.data.clasterStorage);
            setData(swapObj);
        })
    }, [claster]);

    
    return(
        <div className="pages__graficsBlockWrap">
            <div className="pages__graficsBlockTitle">
                <h2>{platformName} за {lastDate}</h2>
            </div>
            <div className="pages__graficsBlock pages__graficsResurseBlock">
                <div className="whiteBlock pages__graficsResurseBlockSecWrap">
                    <h3>Показатели кластера без учета резервирования</h3>
                    <div className="pages__graficsResurseBlockSec">
                        <div className="pages__graficsResurseBlockItem">
                            <h4>{data["claster"][0] === -1 ? <NumbersLoader/> : data["claster"][0]}</h4>
                            <h5>MAX Запущенных ВМ, шт</h5>
                        </div>
                        <div className="pages__graficsResurseBlockItem">
                        <h4>{data["claster"][1] === -1 ? <NumbersLoader/> : data["claster"][1]}</h4>
                            <h5>Создано ВМ, шт</h5>
                        </div>
                        <div className="pages__graficsResurseBlockItem">
                        <h4>{data["claster"][2] === -1 ? <NumbersLoader/> : data["claster"][2]}</h4>
                            <h5>Кол-во серверов, шт</h5>
                        </div>
                        <div className="pages__graficsResurseBlockItem">
                            <h4>{data["claster"][3] === -1 ? <NumbersLoader/> : `1:${data["claster"][3]}`}</h4>
                            <h5>Консолидация pCPU к vCPU</h5>
                        </div>
                    </div>
                </div>

                <div className="whiteBlock pages__graficsResurseBlockSecWrap">
                    <h3>Вычислительная мощность кластера без учета резервирования</h3>
                    <div className="pages__graficsResurseBlockSec">
                        <div className="pages__graficsResurseBlockItem">
                            <h4>{data["power"][0] === -1 ? <NumbersLoader/> : data["power"][0]}</h4>
                            <h5>Частота ядер, GHz</h5>
                        </div>
                        <div className="pages__graficsResurseBlockItem">
                            <h4>{data["power"][1] === -1 ? <NumbersLoader/> : data["power"][1]}</h4>
                            <h5>Физические ядра, шт</h5>
                        </div>
                        <div className="pages__graficsResurseBlockItem">
                            <h4>{data["power"][2] === -1 ? <NumbersLoader/> : data["power"][2]}</h4>
                            <h5>Оперативная память, GB</h5>
                        </div>
                        <div className="pages__graficsResurseBlockItem">
                            <h4>{data["power"][3] === -1 ? <NumbersLoader/> : data["power"][3]}</h4>
                            <h5>Объем хранилища, GB</h5>
                        </div>
                    </div>
                </div>

                <div className="whiteBlock pages__graficsResurseBlockSecWrap">
                    <h3>Используемая мощность кластера</h3>
                    <div className="pages__graficsResurseBlockSec">
                        <div className="pages__graficsResurseBlockItem">
                            <h4>{data["usePower"][0] === -1 ? <NumbersLoader/> : data["usePower"][0]}</h4>
                            <h5>Частота ядер, GHz</h5>
                        </div>
                        <div className="pages__graficsResurseBlockItem">
                            <h4>{data["usePower"][1] === -1 ? <NumbersLoader/> : data["usePower"][1]}</h4>
                            <h5>Кол-во vCPU, шт</h5>
                        </div>
                        <div className="pages__graficsResurseBlockItem">
                            <h4>{data["usePower"][2] === -1 ? <NumbersLoader/> : data["usePower"][2]}</h4>
                            <h5>Кол-во RAM, GB</h5>
                        </div>
                        <div className="pages__graficsResurseBlockItem">
                            <h4>{data["usePower"][3] === -1 ? <NumbersLoader/> : data["usePower"][3]}</h4>
                            <h5>Объем хранилища, GB</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResurseGrafic;