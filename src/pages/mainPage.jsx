import React from "react";
import {Navigate, useSearchParams} from 'react-router-dom';
import CookieController from "../functions/CookieController";
import PageNav from "../elements/PageNav";
import MainPageControls from "../elements/MainPageControls";
import MainPageGrafics from "../elements/MainPageGrafics";
import MainPageScaleGraf from "../elements/MainPageScaleGraf";


function MainPage (){ 
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

    if (!KEY){
        window.location.href = '/login';
        return;
    }

    if (KEY.length > 10){
        return(
            <div className="container mainPageWrap">
                <div className="pages__title">
                    <h1>Личный кабинет</h1>
                </div>
                <div className="pages__struct">
                    <PageNav/>
                    <div className="pages__content">
                        <MainPageControls token={KEY} fullYear={fullYear} setFullYear={setFullYear} route={route}  date={date} setDate={setDate}/>
    
                        <MainPageGrafics setScale={setScaleGraf} fullYear={fullYear} token={KEY} route={route}  date={date}/>
                        <MainPageScaleGraf src={scaleGraf} setScale={setScaleGraf}/>
                    </div>
                </div>
            </div>
        )
    }else{
        return(
            <Navigate replace to="/login" />
        )
    }
    
}

export default MainPage;