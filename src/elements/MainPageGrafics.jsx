import React from "react";
import BigGrafic from "./grafics/BigGrafic";
import CostGrafic from "./grafics/CostGrafic";
import DetailGrafic from "./grafics/DetailGrafic";
import ResurseGrafic from "./grafics/ResurseGrafic";
import TableGrafic from "./grafics/TableGrafic";

import { useSearchParams } from "react-router-dom";

function MainPageGrafics(props){
    const [endTime, setEndTime] = React.useState(new Date(`${props.date.getFullYear()}-${props.date.getMonth() + 2}-01`));
    const [startTime, setStartTime] = React.useState(new Date(`${props.date.getFullYear()}-${props.date.getMonth() + 1}-01`));
    

    React.useEffect(()=>{
        if (props.fullYear){
            setEndTime(new Date(`${props.date.getFullYear()}-12-31`))
            setStartTime(new Date(`${props.date.getFullYear()}-01-01`))
        }
        else{
            if (props.date.getMonth() + 2 === 13) {
                setEndTime(new Date(`${props.date.getFullYear()}-${props.date.getMonth() + 1}-31`));
            }else{
                setEndTime(new Date(`${props.date.getFullYear()}-${props.date.getMonth() + 2}-01`));
            }
            setStartTime(new Date(`${props.date.getFullYear()}-${props.date.getMonth()+1}-01`));
        }
    }, [props.date])

    // для разграничения по кластерам
    let [searchParams, setSearchParams] = useSearchParams();
    let claster = searchParams.get("claster") || false;
    let route = searchParams.get("route") || false;


    if (!route){
        return(
            <section className="pages__grafics">
                <BigGrafic start={startTime.getTime()} end={endTime.getTime()}/> 
            </section>
        )
    }else{
        if (claster){
            return(
                <section className="pages__grafics">
                    {claster && <CostGrafic start={startTime.getTime()} end={endTime.getTime()}/>        }
                    {claster && <DetailGrafic start={startTime.getTime()} end={endTime.getTime()}/>}
                    {claster && <ResurseGrafic token={props.token} start={startTime.getTime()} end={endTime.getTime()}/>   }
                </section>
            )
        }else{
            return(
                <section className="pages__grafics">
                    <BigGrafic start={startTime.getTime()} end={endTime.getTime()}/> 
                    <TableGrafic/>
                </section>
            )
        }
    }
}

export default MainPageGrafics;