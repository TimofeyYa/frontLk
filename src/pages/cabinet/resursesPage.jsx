import React from "react";
import CookieController from "../../functions/CookieController";
import ResursesPageControls from "../../elements/resursesPage/ResursesPageControls";
import ResursesPageGrafics from "../../elements/resursesPage/ResursesPageGrafics";
import ScaleGraf from "../../elements/ScaleGraf";
import {useSearchParams} from 'react-router-dom'

function ResursesPage (){ 
    // Работа с проверкой на наличее ключа
    const KEY = CookieController.getCookie("userKey");
        
    // Работа с параметрами для фильтрации
    const [searchParams] = useSearchParams();
    const [route] = React.useState(searchParams.get("route"));

    // Работа с датой
    const [date,setDate] = React.useState([new Date()]);
    const [fullYear,setFullYear] = React.useState(false);

    // Управление для scale
    const [scaleGraf,setScaleGraf] = React.useState(false);


  
    return(
        <div className="pages__content">
            <div className="pages__content">
                <ResursesPageControls token={KEY} fullYear={fullYear} setFullYear={setFullYear} route={route}  date={date} setDate={setDate}/>
                <ResursesPageGrafics setScale={setScaleGraf} fullYear={fullYear} token={KEY} route={route}  date={date}/>
                <ScaleGraf src={scaleGraf} setScale={setScaleGraf}/>
            </div>
        </div>
    )
}

export default ResursesPage;