import React from "react";
import getComponents from "../../functions/getComponents";
import { useSearchParams } from "react-router-dom";
import clasterData from "../../clasterData.json";

function TableGrafic(props){
    let [searchParams, setSearchParams] = useSearchParams();
    let route = searchParams.get("route");
    const [urlTable,setUrlTable] = React.useState(false);

    React.useEffect(()=>{
        setUrlTable(false);
        if (route != null){
            getComponents(setUrlTable,`budget-table-${route}`)
        }
    }, [route])

    return(
        <div className="pages__graficsBlockWrap">
            <div className="pages__graficsBlockTableWrap">
                { urlTable && <div className="whiteBlock pages__graficsBlock pages__graficsSimpleBlock">
                     <iframe src={urlTable && `${urlTable}&from=${props.start}&to=${props.end}`} width="100%" height="220" frameborder="0"></iframe> 
                </div> }
            </div>
        </div>
    )
}

export default TableGrafic;