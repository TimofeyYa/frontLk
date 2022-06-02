import React from "react";
import getComponents from "../../functions/getComponents";


function BigGrafic(props){
    const [url,setUrl] = React.useState('1');

    React.useEffect(()=>{
        getComponents(setUrl,"test")
    },[])
    return(
        <div className="whiteBlock pages__graficsBigBlock">
           {props.start && <iframe src={`${url}&from=${props.start}&to=${props.end}`} width="100%" height="500" frameBorder="0"></iframe>} 
        </div>
    )
}

export default BigGrafic;