import React from "react";
import {Navigate, useSearchParams} from 'react-router-dom';
import getCookie from '../functions/getCookie'
import PageNav from "../elements/PageNav";
import MainPageControls from "../elements/MainPageControls";
import MainPageGrafics from "../elements/MainPageGrafics";


function MainPage (){ 
    
    // Работа с параметрами для фильтрации
    const [searchParams, setSearchParams] = useSearchParams();
    const [route, setRoute] = React.useState(searchParams.get("route"));

    // Работа с проверкой на наличее ключа
    const KEY = getCookie("userKey");
    
    // Работа с датой
    const [date,setDate] = React.useState(new Date());
    const [fullYear,setFullYear] = React.useState(false);

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
                        <MainPageControls fullYear={fullYear} setFullYear={setFullYear} route={route}  date={date} setDate={setDate}/>
    
                        <MainPageGrafics fullYear={fullYear} token={KEY} route={route}  date={date}/>
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