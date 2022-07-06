import React from "react";
import BigGrafic from "../grafics/BigGrafic";
import CostGrafic from "../grafics/CostGrafic";
import DetailGrafic from "../grafics/DetailGrafic";
import ResurseGrafic from "../grafics/ResurseGrafic";
import TableGrafic from "../grafics/TableGrafic";

import { useSearchParams } from "react-router-dom";

function ResursesPageGrafics(props){
    const [endTime, setEndTime] = React.useState(new Date(`${props.date[0].getFullYear()}-${props.date[0].getMonth() + 2}-01`));
    const [startTime, setStartTime] = React.useState(new Date(`${props.date[0].getFullYear()}-${props.date[0].getMonth()+1}-01`));
    

    React.useEffect(()=>{
        // Проверка выбран ли период
        if(props.date.length > 1){
            if (props.date[1].getMonth() + 2 === 13) {
                setEndTime(new Date(`${props.date[1].getFullYear() + 1}/01/01`));
            }else{
                setEndTime(new Date(`${props.date[1].getFullYear()}/${props.date[1].getMonth() + 1}-01`));
            }
            setStartTime(new Date(`${props.date[0].getFullYear()}/${props.date[0].getMonth()+1}/01`));
        }else{
            if (props.fullYear){
                setEndTime(new Date(`${props.date[0].getFullYear()}/12/31`))
                setStartTime(new Date(`${props.date[0].getFullYear()}/01/01`))
            }
            else{
                if (props.date[0].getMonth() + 2 === 13) {
                    setEndTime(new Date(`${props.date[0].getFullYear()}/${props.date[0].getMonth() + 1}/31`));
                }else{
                    setEndTime(new Date(`${props.date[0].getFullYear()}/${props.date[0].getMonth() + 2}/01`));
                }
                setStartTime(new Date(`${props.date[0].getFullYear()}/${props.date[0].getMonth()+1}/01`));
            }
        }
    }, [props.date[0], props.date[1]])

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
                    {claster && <ResurseGrafic token={props.token} start={startTime.getTime()} end={endTime.getTime()}/>   }
                    {claster && <CostGrafic start={startTime.getTime()} end={endTime.getTime()}/>        }
                    {claster && <DetailGrafic setScale={props.setScale} start={startTime.getTime()} end={endTime.getTime()}/>}
                    
                </section>
            )
        }else{
            return(
                <section className="pages__grafics">
                    <BigGrafic start={startTime.getTime()} end={endTime.getTime()}/> 
                    <TableGrafic start={startTime.getTime()} end={endTime.getTime()}/>
                </section>
            )
        }
    }
}

export default ResursesPageGrafics;