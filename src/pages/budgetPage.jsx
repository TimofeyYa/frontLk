import React from "react";
import {useSearchParams} from 'react-router-dom';
import CookieController from "../functions/CookieController";
import MainPageControls from "../elements/MainPageControls";
import MainPageGrafics from "../elements/MainPageGrafics";
import MainPageScaleGraf from "../elements/MainPageScaleGraf";


function BudgetPage (){ 
    // Работа с проверкой на наличее ключа
    const KEY = CookieController.getCookie("userKey");
        
    // Работа с параметрами для фильтрации
    const [searchParams, setSearchParams] = useSearchParams();
    const [route, setRoute] = React.useState(searchParams.get("route"));

    // Работа с датой
    const [date,setDate] = React.useState([new Date()]);
    const [fullYear,setFullYear] = React.useState(false);

    // Управление для scale
    const [scaleGraf,setScaleGraf] = React.useState(false);


  
        return(
            <div className="pages__content">
                <MainPageControls token={KEY} fullYear={fullYear} setFullYear={setFullYear} route={route}  date={date} setDate={setDate}/>
                <MainPageGrafics setScale={setScaleGraf} fullYear={fullYear} token={KEY} route={route}  date={date}/>
                <MainPageScaleGraf src={scaleGraf} setScale={setScaleGraf}/>
            </div>
        )

    
}

export default BudgetPage;