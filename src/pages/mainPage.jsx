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

    if (KEY.length > 10){
        return(
            <div className="container mainPageWrap">
                <div className="pages__title">
                    <h1>Личный кабинет</h1>
                </div>
                <div className="pages__struct">
                    <PageNav/>
                    <div className="pages__content">
                        <Routes>
                            <Route path="/budget" element={<Budget />}/>
                            <Route path="/contacts" element={<Contacts />}/>
                            <Route path="/docs" element={<Docs />}/>
                            <Route path="/prises" element={<Prise />}/>
                            <Route path="/resurses" element={<Resurses />}/>
                            <Route path="/SLA" element={<SLA />}/>
                            <Route path="/*" element={<Navigate replace to="/cabinet/budget" />}/>
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