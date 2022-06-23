import React from "react";
import BigGrafic from "./grafics/BigGrafic";
import CostGrafic from "./grafics/CostGrafic";
import DetailGrafic from "./grafics/DetailGrafic";
import ResurseGrafic from "./grafics/ResurseGrafic";

import { useSearchParams } from "react-router-dom";

function MainPageGrafics(props){
    const [endTime, setEndTime] = React.useState(new Date(`${props.date.getFullYear()}-${props.date.getMonth() + 2}-01`));
    const [startTime, setStartTime] = React.useState(new Date(`${props.date.getFullYear()}-${props.date.getMonth() + 1}-01`));
    
    React.useEffect(()=>{
        if (props.date.getMonth() + 2 === 13) {
            setEndTime(new Date(`${props.date.getFullYear()}-${props.date.getMonth() + 1}-31`));
        }else{
            setEndTime(new Date(`${props.date.getFullYear()}-${props.date.getMonth() + 2}-01`));
        }
        setStartTime(new Date(`${props.date.getFullYear()}-${props.date.getMonth()+1}-01`));
    }, [props.date])

    // для разграничения по кластерам
    let [searchParams, setSearchParams] = useSearchParams();
    let claster = searchParams.get("claster") || false;


    return(
        <section className="pages__grafics">
            <BigGrafic start={startTime.getTime()} end={endTime.getTime() - 1000*60*60*24}/>    
            {claster && <DetailGrafic start={startTime.getTime()} end={endTime.getTime() - 1000*60*60*24}/>}
            {claster && <ResurseGrafic token={props.token} start={startTime.getTime()} end={endTime.getTime() - 1000*60*60*24}/>   }
            {claster && <CostGrafic start={startTime.getTime()} end={endTime.getTime() - 1000*60*60*24}/>        }
        </section>
    )
}

export default MainPageGrafics;