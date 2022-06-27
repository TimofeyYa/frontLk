import React from "react";
import getComponents from "../../functions/getComponents";
import { useSearchParams } from "react-router-dom";
import clasterData from "../../clasterData.json";

function CostGrafic(props){
    const [platformName, setPlatformName] = React.useState('');

    let [searchParams, setSearchParams] = useSearchParams();
    let claster = searchParams.get("claster");



    const [urlDiagram,setUrlDiagram] = React.useState(false);
    const [urlTable,setUrlTable] = React.useState(false);

    React.useEffect(()=>{
        setUrlDiagram(false);
        setUrlTable(false);
        if (claster != null){
            setPlatformName(`Расходы по платформе ${clasterData[claster]['name']}`)
            getComponents(setUrlDiagram,`cost-diagram-${clasterData[claster]['name']}`);
            getComponents(setUrlTable,`cost-table-${clasterData[claster]['name']}`)
        }else{
            setPlatformName('Расходы');
        }
    }, [claster])

    return(
        <div className="pages__graficsBlockWrap">
            <div className="pages__graficsBlockTitle">
                <h2>{platformName}</h2>
            </div>
            <div className="pages__graficsBlockCostWrap">
                <div className="whiteBlock pages__graficsBlock pages__graficsTableBlock">
                    { urlTable &&<iframe src={urlTable && `${urlTable}&from=${props.start}&to=${props.end}`} width="100%" height="400" frameborder="0"></iframe> }
                </div>
                <div className="whiteBlock pages__graficsBlock pages__graficsPieBlock">
                    { urlDiagram &&<iframe src={urlDiagram && `${urlDiagram}&from=${props.start}&to=${props.end}`} width="100%" height="400" frameborder="0"></iframe> }
                </div>
            </div>
        </div>
    )
}

export default CostGrafic;