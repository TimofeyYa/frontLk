import React from "react";
import CookieController from "../functions/CookieController";
import {Routes, Route, Navigate } from 'react-router-dom';
import PageNav from "../elements/PageNav";
import {Budget, Contacts, Docs, Prise, Resurses, SLA} from './cabinet/index';



function MainPage (){ 
    // Работа с проверкой на наличее ключа
    const KEY = CookieController.getCookie("userKey");

    // Работа с датой
    const [date,setDate] = React.useState([new Date()]);
    const [fullYear,setFullYear] = React.useState(false);

    if (!KEY){
        window.location.href = '/login';
        return;
    }

    // Структура нвигации сайта
    const dataLinks = [
        ["Бюджет", "/cabinet/budget", [["Платформа Общая", ["ВС Красноярск","ВРС Красноярск", "ВРС Барнаул"]], ["Платформа Реестр"], ["Платформа УЗ3"]]],
        ["Ресурсы", "/cabinet/resurses", [["Платформа  Общая", ["ВС Красноярск","ВРС Красноярск", "ВРС Барнаул"]], ["Платформа Реестр", ['TEST']], ["Платформа УЗ3"]]],
        ["SLA", "/cabinet/SLA"],
        ["Тарификация", "/cabinet/prises"],
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
                            <Route path="/budget" element={<Budget date={date} setDate={setDate} fullYear={fullYear} setFullYear={setFullYear}  dataLinks={dataLinks} token={KEY} />}/>
                            <Route path="/contacts" element={<Contacts token={KEY} />}/>
                            <Route path="/docs" element={<Docs />}/>
                            <Route path="/prises" element={<Prise token={KEY} />}/>
                            <Route path="/resurses" element={<Resurses date={date} setDate={setDate} fullYear={fullYear} setFullYear={setFullYear} dataLinks={dataLinks} token={KEY} />}/>
                            <Route path="/SLA" element={<SLA date={date} setDate={setDate} fullYear={fullYear} setFullYear={setFullYear} token={KEY} />}/>
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