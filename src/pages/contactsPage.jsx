import React from "react";
import PageNav from "../elements/PageNav";
import CookieController from "../functions/CookieController";
import {Navigate} from 'react-router-dom';
import '../css/contacts.css'

function ContactsPage (){

    const KEY = CookieController.getCookie("userKey");

    if (!KEY){
        window.location.href = '/login';
        return;
    }

    if (KEY.length > 10){
    return(
        <div className="pages__content">
            <section className="contacts">
                <div className="blueBlock contacts__item">
                    <div className="contacts__itemTitle">
                        <h3>Техподдержка <span className="accentBlue">24/7/365</span></h3>
                    </div>
                    <div className="contacts__itemTxt">
                        <p>Прием, обработка и регистрация запросов</p>
                        <p>Устранение неисправностей</p>
                    </div>
                    <div className="contacts__itemContacts">
                        <a href="mailto:hd@cortel.cloud">
                            <div className="contacts__itemContactsPic">
                                <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 2.375C15 1.61875 14.37 1 13.6 1H2.4C1.63 1 1 1.61875 1 2.375M15 2.375V10.625C15 11.3813 14.37 12 13.6 12H2.4C1.63 12 1 11.3813 1 10.625V2.375M15 2.375L8 7.1875L1 2.375" stroke="#1F79DF" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>                                                                                              
                            </div>
                            <p className="accentBlue">hd@cortel.cloud</p>
                        </a>
                        <a href="tel:8-800-775-99-90">
                            <div className="contacts__itemContactsPic">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.9996 9.98431V11.7908C13.0003 11.9585 12.9659 12.1245 12.8986 12.2781C12.8313 12.4318 12.7325 12.5697 12.6087 12.6831C12.4849 12.7965 12.3387 12.8828 12.1795 12.9365C12.0203 12.9903 11.8517 13.0102 11.6843 12.9951C9.82768 12.7938 8.04426 12.1606 6.47734 11.1465C5.01953 10.222 3.78356 8.98843 2.8572 7.53351C1.83752 5.96259 1.20294 4.17405 1.0049 2.31277C0.98982 2.14625 1.00965 1.97843 1.06312 1.81998C1.11659 1.66153 1.20254 1.51592 1.31548 1.39244C1.42843 1.26896 1.5659 1.1703 1.71915 1.10274C1.87239 1.03519 2.03805 1.00022 2.20558 1.00006H4.01565C4.30846 0.997182 4.59233 1.10067 4.81435 1.29122C5.03636 1.48178 5.18138 1.74641 5.22236 2.03578C5.29876 2.61389 5.44044 3.18152 5.64471 3.72785C5.72589 3.94338 5.74346 4.17761 5.69534 4.4028C5.64721 4.62799 5.53542 4.83469 5.3732 4.99841L4.60694 5.76315C5.46585 7.27069 6.71655 8.51891 8.22708 9.37612L8.99334 8.61138C9.15739 8.44948 9.3645 8.33791 9.59013 8.28988C9.81577 8.24185 10.0505 8.25939 10.2664 8.3404C10.8138 8.54427 11.3826 8.68567 11.9619 8.76192C12.2549 8.80318 12.5226 8.95052 12.714 9.1759C12.9053 9.40128 13.007 9.68899 12.9996 9.98431Z" stroke="#1F79DF" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                                                                    
                            </div>
                            <p className="accentBlue">8-800-775-99-90</p>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
    }else{
        return(
            <Navigate replace to="/login" />
        )
    }
}

export default ContactsPage;