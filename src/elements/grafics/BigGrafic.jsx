import React from "react";
import getComponents from "../../functions/getComponents";


function BigGrafic(props){
    const [url,setUrl] = React.useState(false);

    React.useEffect(()=>{
        getComponents(setUrl,"test")
    },[])
    
    return(
        <div className="whiteBlock pages__graficsBigBlock">
           {url && <iframe src={url && `${url}&from=${props.start}&to=${props.end}`} width="100%" height="100%" frameBorder="0"></iframe>} 
        </div>
    )
}

export default BigGrafic;