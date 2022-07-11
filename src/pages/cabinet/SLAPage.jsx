import React from "react";
import CookieController from "../../functions/CookieController";
import SLAPageControls from "../../elements/SLAPage/SLAPageControls";
import SLAPageTable from "../../elements/SLAPage/SLAPageTable";
import {useSearchParams} from 'react-router-dom';

function SLAPage (props){ 
     // Работа с параметрами для фильтрации
     const [searchParams] = useSearchParams();
     const [route] = React.useState(searchParams.get("route"));
 
     // Работа с датой
     const [date,setDate] = React.useState([new Date()]);
     const [fullYear,setFullYear] = React.useState(false);
 
 
    return(
        <div className="pages__content">
            <SLAPageControls token={props.token} fullYear={props.fullYear} setFullYear={props.setFullYear} route={route}  date={props.date} setDate={props.setDate}/>
            <SLAPageTable fullYear={props.fullYear} token={props.token} date={props.date}/>
        </div>
    )
}

export default SLAPage;