import React from "react";
import getComponents from "../../functions/getComponents";


function BigGrafic(props){
    const [url,setUrl] = React.useState(false);

    React.useEffect(()=>{
        getComponents(setUrl,"bigGraf")
    },[])
    
    return(
        <div className="pages__graficsBlockWrap">
            <div className="whiteBlock pages__graficsBlock pages__graficsBigBlock">
                {url && <iframe title="bigGraf" src={url && `${url}&from=${props.start}&to=${props.end}`} width="100%" height="100%" frameBorder="0"></iframe>} 
            </div>
        </div>
    )
}

export default BigGrafic;