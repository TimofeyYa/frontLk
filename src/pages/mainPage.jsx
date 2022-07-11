import React from "react";
import CookieController from "../functions/CookieController";
import {Routes, Route, Navigate } from 'react-router-dom';
import PageNav from "../elements/PageNav";
import {Budget, Contacts, Docs, Prise, Resurses, SLA} from './cabinet/index';



function MainPage (){ 
    // Работа с проверкой на наличее ключа
    const KEY = CookieController.getCookie("userKey");

    if (!KEY){
        window.location.href = '/login';
        return;
    }

    // Структура нвигации сайта
    const dataLinks = [
        ["Бюджет", "/cabinet/budget", [["Общая", ["SRV-Bograda144","VDI-Bograda144", "Cluster-22a-1"]], ["Реестр"], ["УЗЗ"]]],
        ["Ресурсы", "/cabinet/resurses", [["Общая", ["SRV-Bograda144","VDI-Bograda144", "Cluster-22a-1"]], ["Реестр", ['TEST']], ["УЗЗ"]]],
        ["SLA", "/cabinet/SLA"],
        ["Цены", "/cabinet/prises"],
        ["Документы", "/cabinet/docs"], 
        ["Контакты", "/cabinet/contacts"]
   ]

    if (KEY.length > 10){
        return(
            <div className="container mainPageWrap">
                <div className="pages__title">
                    <h1>Личный кабинет</h1>
                </div>
                <div className="pages__struct">
                    <PageNav dataLinks={dataLinks}/>
                    <div className="pages__content">
                        <Routes>
                            <Route path="/budget" element={<Budget dataLinks={dataLinks} token={KEY} />}/>
                            <Route path="/contacts" element={<Contacts token={KEY} />}/>
                            <Route path="/docs" element={<Docs />}/>
                            <Route path="/prises" element={<Prise token={KEY} />}/>
                            <Route path="/resurses" element={<Resurses dataLinks={dataLinks} token={KEY} />}/>
                            <Route path="/SLA" element={<SLA token={KEY} />}/>
                            <Route path="/*" element={<Navigate token={KEY} replace to="/cabinet/budget" />}/>
                        </Routes>
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