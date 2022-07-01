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
                    <div className="scaller" onClick={()=>props.setScale(`${urlVM}&from=${props.start}&to=${props.end}`)}>
                        <svg  version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 485.213 485.213" >
                            <path d="M363.909,181.955C363.909,81.473,282.44,0,181.956,0C81.474,0,0.001,81.473,0.001,181.955s81.473,181.951,181.955,181.951    C282.44,363.906,363.909,282.437,363.909,181.955z M181.956,318.416c-75.252,0-136.465-61.208-136.465-136.46    c0-75.252,61.213-136.465,136.465-136.465c75.25,0,136.468,61.213,136.468,136.465    C318.424,257.208,257.206,318.416,181.956,318.416z"/>
                            <path d="M471.882,407.567L360.567,296.243c-16.586,25.795-38.536,47.734-64.331,64.321l111.324,111.324    c17.772,17.768,46.587,17.768,64.321,0C489.654,454.149,489.654,425.334,471.882,407.567z"/>
                        </svg>
                    </div>
            </div>
            <div className="whiteBlock pages__graficsDetailBlockItem">
                    {urlRam && <iframe title="bigGraf" src={urlRam && `${urlRam}&from=${props.start}&to=${props.end}`} width="100%" height="100%" frameBorder="0"></iframe>} 
                    <div className="scaller" onClick={()=>props.setScale(`${urlRam}&from=${props.start}&to=${props.end}`)}>
                        <svg  version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 485.213 485.213" >
                            <path d="M363.909,181.955C363.909,81.473,282.44,0,181.956,0C81.474,0,0.001,81.473,0.001,181.955s81.473,181.951,181.955,181.951    C282.44,363.906,363.909,282.437,363.909,181.955z M181.956,318.416c-75.252,0-136.465-61.208-136.465-136.46    c0-75.252,61.213-136.465,136.465-136.465c75.25,0,136.468,61.213,136.468,136.465    C318.424,257.208,257.206,318.416,181.956,318.416z"/>
                            <path d="M471.882,407.567L360.567,296.243c-16.586,25.795-38.536,47.734-64.331,64.321l111.324,111.324    c17.772,17.768,46.587,17.768,64.321,0C489.654,454.149,489.654,425.334,471.882,407.567z"/>
                        </svg>
                    </div>
            </div>
            <div className="whiteBlock pages__graficsDetailBlockItem">
                    {urlChastot && <iframe title="bigGraf" src={urlChastot && `${urlChastot}&from=${props.start}&to=${props.end}`} width="100%" height="100%" frameBorder="0"></iframe>} 
                    <div className="scaller" onClick={()=>props.setScale(`${urlChastot}&from=${props.start}&to=${props.end}`)}>
                        <svg  version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 485.213 485.213" >
                            <path d="M363.909,181.955C363.909,81.473,282.44,0,181.956,0C81.474,0,0.001,81.473,0.001,181.955s81.473,181.951,181.955,181.951    C282.44,363.906,363.909,282.437,363.909,181.955z M181.956,318.416c-75.252,0-136.465-61.208-136.465-136.46    c0-75.252,61.213-136.465,136.465-136.465c75.25,0,136.468,61.213,136.468,136.465    C318.424,257.208,257.206,318.416,181.956,318.416z"/>
                            <path d="M471.882,407.567L360.567,296.243c-16.586,25.795-38.536,47.734-64.331,64.321l111.324,111.324    c17.772,17.768,46.587,17.768,64.321,0C489.654,454.149,489.654,425.334,471.882,407.567z"/>
                        </svg>
                    </div>
            </div>
            <div className="whiteBlock pages__graficsDetailBlockItem">
                    {urlStorage && <iframe title="bigGraf" src={urlStorage && `${urlStorage}&from=${props.start}&to=${props.end}`} width="100%" height="100%" frameBorder="0"></iframe>} 
                    <div className="scaller" onClick={()=>props.setScale(`${urlStorage}&from=${props.start}&to=${props.end}`)}>
                        <svg  version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 485.213 485.213" >
                            <path d="M363.909,181.955C363.909,81.473,282.44,0,181.956,0C81.474,0,0.001,81.473,0.001,181.955s81.473,181.951,181.955,181.951    C282.44,363.906,363.909,282.437,363.909,181.955z M181.956,318.416c-75.252,0-136.465-61.208-136.465-136.46    c0-75.252,61.213-136.465,136.465-136.465c75.25,0,136.468,61.213,136.468,136.465    C318.424,257.208,257.206,318.416,181.956,318.416z"/>
                            <path d="M471.882,407.567L360.567,296.243c-16.586,25.795-38.536,47.734-64.331,64.321l111.324,111.324    c17.772,17.768,46.587,17.768,64.321,0C489.654,454.149,489.654,425.334,471.882,407.567z"/>
                        </svg>
                    </div>
            </div>
            </div>
        </div>
    )
}

export default DetailGrafic;