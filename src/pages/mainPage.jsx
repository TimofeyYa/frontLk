import React from "react";
import {Navigate} from 'react-router-dom';
import getCookie from '../functions/getCookie'
import PageNav from "../elements/PageNav";
import MainPageControls from "../elements/MainPageControls";
import MainPageGrafics from "../elements/MainPageGrafics";


function MainPage (){    
    const KEY = getCookie("userKey");
    const [date,setDate] = React.useState(new Date());

    if (KEY.length > 10){
        return(
            <div className="container mainPageWrap">
                <div className="pages__title">
                    <h1>Личный кабинет</h1>
                </div>
                <div className="pages__struct">
                    <PageNav/>
                    <div className="pages__content">
                        <MainPageControls date={date} setDate={setDate}/>
    
                        <MainPageGrafics date={date}/>
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