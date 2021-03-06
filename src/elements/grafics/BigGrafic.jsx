import React from "react";
import { useSearchParams } from "react-router-dom";
import getComponents from "../../functions/getComponents";
import clasterData from "../../clasterData.json";

function BigGrafic(props){
  
    const [url,setUrl] = React.useState(false);

    let [searchParams, setSearchParams] = useSearchParams();
    let route = searchParams.get("route");

    React.useEffect(()=>{
        setUrl(false)
        if (route != null){
            getComponents(setUrl,`bigGraf-${route}`)
        }else{
            getComponents(setUrl,"bigGraf-budget")
        }
    }, [route])

    return(
        <div className="pages__graficsBlockWrap">
            <div className="whiteBlock pages__graficsBlock pages__graficsBigBlock">
                {url && <iframe title="bigGraf" src={url && `${url}&from=${props.start}&to=${props.end}`} width="100%" height="100%" frameBorder="0"></iframe>} 
            </div>
        </div>

    )
}

export default BigGrafic;

