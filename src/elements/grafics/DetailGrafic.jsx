import React from "react";
import getComponents from "../../functions/getComponents";
import {useSearchParams} from 'react-router-dom'
import clasterData from "../../clasterData.json";

function DetailGrafic(props){
    const [url,setUrl] = React.useState(false);

    React.useEffect(()=>{
        
    },[])

    const [platformName, setPlatformName] = React.useState('');
    
    let [searchParams, setSearchParams] = useSearchParams();
    let claster = searchParams.get("claster");

    const [urlVM, setUrlVm] = React.useState(false);
    const [urlRam, setUrlRam] = React.useState(false);
    const [urlChastot, setUrlChastot] = React.useState(false);
    const [urlStorage, setUrlStorage] = React.useState(false);

    React.useEffect(()=>{
        setUrlVm(false);
        setUrlRam(false);
        setUrlChastot(false);
        setUrlStorage(false);
        if (claster != null){
            setPlatformName(`Детализация показателей по платформе ${clasterData[claster]['name']}`)

            getComponents(setUrlVm,`datail-vm-${clasterData[claster]['name']}`)
            getComponents(setUrlRam,`datail-Ram-${clasterData[claster]['name']}`)
            getComponents(setUrlChastot,`datail-Chastot-${clasterData[claster]['name']}`)
            getComponents(setUrlStorage,`datail-storage-${clasterData[claster]['name']}`)
        }else{
            setPlatformName('Детализация показателей');
        }
    }, [claster])

    return(
        <div className="pages__graficsBlockWrap">
            <div className="pages__graficsBlockTitle">
                <h2>{platformName}</h2>
            </div>
            <div className="pages__graficsBlock pages__graficsDetailBlock">
            <div className="whiteBlock pages__graficsDetailBlockItem">
                    {urlVM && <iframe title="bigGraf" src={urlVM && `${urlVM}&from=${props.start}&to=${props.end}`} width="100%" height="100%" frameBorder="0"></iframe>} 
            </div>
            <div className="whiteBlock pages__graficsDetailBlockItem">
                    {urlRam && <iframe title="bigGraf" src={urlRam && `${urlRam}&from=${props.start}&to=${props.end}`} width="100%" height="100%" frameBorder="0"></iframe>} 
            </div>
            <div className="whiteBlock pages__graficsDetailBlockItem">
                    {urlChastot && <iframe title="bigGraf" src={urlChastot && `${urlChastot}&from=${props.start}&to=${props.end}`} width="100%" height="100%" frameBorder="0"></iframe>} 
            </div>
            <div className="whiteBlock pages__graficsDetailBlockItem">
                    {urlStorage && <iframe title="bigGraf" src={urlStorage && `${urlStorage}&from=${props.start}&to=${props.end}`} width="100%" height="100%" frameBorder="0"></iframe>} 
            </div>
            </div>
        </div>
    )
}

export default DetailGrafic;