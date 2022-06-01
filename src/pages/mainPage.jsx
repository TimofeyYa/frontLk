import React from "react";
import {Navigate} from 'react-router-dom';
import getCookie from '../functions/getCookie'
import PageNav from "../elements/PageNav";

function MainPage (){    

    const KEY = getCookie("userKey");

    if (KEY.length > 10){
        return(
            <div className="container mainPageWrap">
                <div className="pages__title">
                    <h1>Личный кабинет</h1>
                </div>
                <div className="pages__struct">
                    <PageNav/>
                    <div className="pages__content">
                        <section className="pages__info">
                            <div className="whiteBlock pages__infoBlock">
                                <div className="pages__infoPic">
                                    <div className="pages__infoPicWrap">
                                        <svg width="26" height="28" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M24.5931 27.5L0.510366 27.5C0.635432 24.4855 1.88786 21.6202 4.02987 19.4781C6.29001 17.218 9.35541 15.9483 12.5517 15.9483C15.748 15.9483 18.8134 17.218 21.0736 19.4781C23.2156 21.6202 24.468 24.4855 24.5931 27.5ZM19.7759 7.72414C19.7759 11.7139 16.5415 14.9483 12.5517 14.9483C8.56194 14.9483 5.32759 11.7139 5.32759 7.72414C5.32759 3.73436 8.56194 0.5 12.5517 0.5C16.5415 0.5 19.7759 3.73436 19.7759 7.72414Z" stroke="white"/>
                                        </svg>                                            
                                    </div>
                                </div>
    
                                <div className="pages__infoTxt">
                                    <div className="pages__infoTxtTitle">
                                        <h4>Заказчик</h4>
                                    </div>
                                    <div className="pages__infoTxtVariant">
                                        <h2>Россети Сибирь</h2>
                                    </div>
                                </div>
                            </div>
    
                            <div className="whiteBlock pages__infoBlock">
                                <div className="pages__infoPic">
                                    <div className="pages__infoPicWrap">
                                        <svg width="22" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.56791 17.6708V18.5459H11.7957V19.1771H8.56791V21.0421H7.50632V19.1771H6V18.5459H7.50632V11H11.2649C12.5561 11 13.5603 11.2917 14.2776 11.8751C15.0044 12.4489 15.3679 13.2666 15.3679 14.3282C15.3679 15.3994 15.0044 16.2267 14.2776 16.8101C13.5603 17.3839 12.5561 17.6708 11.2649 17.6708H8.56791ZM8.56791 11.9181V16.767H11.2793C12.2548 16.767 13.0008 16.5566 13.5172 16.1358C14.0433 15.715 14.3063 15.1173 14.3063 14.3426C14.3063 13.5679 14.0433 12.9702 13.5172 12.5494C13.0008 12.1285 12.2548 11.9181 11.2793 11.9181H8.56791Z" fill="white"/>
                                            <rect x="0.5" y="2.36667" width="20.4667" height="25.1333" rx="1.5" stroke="white"/>
                                            <rect x="5.16663" y="0.5" width="11.1333" height="3.66667" rx="1.5" fill="#1F79DF" stroke="white"/>
                                        </svg>                                                                                                                                
                                    </div>
                                </div>
    
                                <div className="pages__infoTxt">
                                    <div className="pages__infoTxtTitle">
                                        <h4>Сумма по заказчику</h4>
                                    </div>
                                    <div className="pages__infoTxtVariant">
                                        <h2>3 400 000 ₽</h2>
                                    </div>
                                </div>
                            </div>
    
                            <div className="pages__infoSelectWrap">
                                <div className="whiteBlock pages__infoBlock pages__infoSelect">
                                    <div className="pages__infoSelectContent">
                                        <div className="pages__infoPic">
                                            <div className="pages__infoPicWrap">
                                                <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="0.5" y="2.71992" width="24.5951" height="21.8527" rx="1.5" stroke="white"/>
                                                    <rect x="7.42102" y="0.5" width="1.87292" height="5.92112" rx="0.936458" stroke="white"/>
                                                    <rect x="19.1742" y="0.5" width="1.87292" height="5.92112" rx="0.936458" stroke="white"/>
                                                    <path d="M4.27441 5.04874H26.0001C26.8285 5.04874 27.5001 5.72031 27.5001 6.54874V23.3121C27.5001 24.1405 26.8285 24.8121 26.0001 24.8121H4.27441C3.44599 24.8121 2.77441 24.1405 2.77441 23.3121V6.54873C2.77441 5.72031 3.44599 5.04874 4.27441 5.04874Z" fill="#77ADEA" stroke="white"/>
                                                    <path d="M7.82312 13.8529H9.12723C9.48621 13.8529 9.77723 14.144 9.77723 14.5029V15.807C9.77723 16.166 9.48621 16.457 9.12723 16.457H7.82312C7.46413 16.457 7.17312 16.166 7.17312 15.807V14.5029C7.17312 14.144 7.46413 13.8529 7.82312 13.8529Z" stroke="white" strokeWidth="0.7"/>
                                                    <path d="M7.82312 9.44747H9.12723C9.48621 9.44747 9.77723 9.73848 9.77723 10.0975V11.4016C9.77723 11.7606 9.48621 12.0516 9.12723 12.0516H7.82312C7.46413 12.0516 7.17312 11.7606 7.17312 11.4016V10.0975C7.17312 9.73848 7.46413 9.44747 7.82312 9.44747Z" stroke="white" strokeWidth="0.7"/>
                                                    <path d="M7.82312 18.2662H9.12723C9.48621 18.2662 9.77723 18.5572 9.77723 18.9162V20.2203C9.77723 20.5793 9.48621 20.8703 9.12723 20.8703H7.82312C7.46413 20.8703 7.17312 20.5793 7.17312 20.2203V18.9162C7.17312 18.5572 7.46413 18.2662 7.82312 18.2662Z" stroke="white" strokeWidth="0.7"/>
                                                    <path d="M21.0396 9.44747H22.3437C22.7026 9.44747 22.9937 9.73848 22.9937 10.0975V11.4016C22.9937 11.7606 22.7026 12.0516 22.3437 12.0516H21.0395C20.6806 12.0516 20.3896 11.7606 20.3896 11.4016V10.0975C20.3896 9.73848 20.6806 9.44747 21.0396 9.44747Z" stroke="white" strokeWidth="0.7"/>
                                                    <path d="M21.0396 13.8607H22.3437C22.7026 13.8607 22.9937 14.1517 22.9937 14.5107V15.8148C22.9937 16.1738 22.7026 16.4648 22.3437 16.4648H21.0395C20.6806 16.4648 20.3896 16.1738 20.3896 15.8148V14.5107C20.3896 14.1517 20.6806 13.8607 21.0396 13.8607Z" stroke="white" strokeWidth="0.7"/>
                                                    <path d="M21.0396 18.2773H22.3437C22.7026 18.2773 22.9937 18.5683 22.9937 18.9273V20.2314C22.9937 20.5904 22.7026 20.8814 22.3437 20.8814H21.0395C20.6806 20.8814 20.3896 20.5904 20.3896 20.2314V18.9273C20.3896 18.5683 20.6806 18.2773 21.0396 18.2773Z" stroke="white" strokeWidth="0.7"/>
                                                    <path d="M16.634 9.44747H17.9381C18.2971 9.44747 18.5881 9.73848 18.5881 10.0975V11.4016C18.5881 11.7606 18.2971 12.0516 17.9381 12.0516H16.634C16.275 12.0516 15.984 11.7606 15.984 11.4016V10.0975C15.984 9.73848 16.275 9.44747 16.634 9.44747Z" stroke="white" strokeWidth="0.7"/>
                                                    <path d="M16.634 13.8607H17.9381C18.2971 13.8607 18.5881 14.1517 18.5881 14.5107V15.8148C18.5881 16.1738 18.2971 16.4648 17.9381 16.4648H16.634C16.275 16.4648 15.984 16.1738 15.984 15.8148V14.5107C15.984 14.1517 16.275 13.8607 16.634 13.8607Z" stroke="white" strokeWidth="0.7"/>
                                                    <path d="M16.634 18.2773H17.9381C18.2971 18.2773 18.5881 18.5683 18.5881 18.9273V20.2314C18.5881 20.5904 18.2971 20.8814 17.9381 20.8814H16.634C16.275 20.8814 15.984 20.5904 15.984 20.2314V18.9273C15.984 18.5683 16.275 18.2773 16.634 18.2773Z" stroke="white" strokeWidth="0.7"/>
                                                    <path d="M12.2286 9.44747H13.5327C13.8917 9.44747 14.1827 9.73848 14.1827 10.0975V11.4016C14.1827 11.7606 13.8917 12.0516 13.5327 12.0516H12.2286C11.8697 12.0516 11.5786 11.7606 11.5786 11.4016V10.0975C11.5786 9.73848 11.8697 9.44747 12.2286 9.44747Z" stroke="white" strokeWidth="0.7"/>
                                                    <path d="M12.2286 13.8607H13.5327C13.8917 13.8607 14.1827 14.1517 14.1827 14.5107V15.8148C14.1827 16.1738 13.8917 16.4648 13.5327 16.4648H12.2286C11.8697 16.4648 11.5786 16.1738 11.5786 15.8148V14.5107C11.5786 14.1517 11.8697 13.8607 12.2286 13.8607Z" stroke="white" strokeWidth="0.7"/>
                                                    <path d="M12.2286 18.2773H13.5327C13.8917 18.2773 14.1827 18.5683 14.1827 18.9273V20.2314C14.1827 20.5904 13.8917 20.8814 13.5327 20.8814H12.2286C11.8697 20.8814 11.5786 20.5904 11.5786 20.2314V18.9273C11.5786 18.5683 11.8697 18.2773 12.2286 18.2773Z" stroke="white" strokeWidth="0.7"/>
                                                </svg>                                                                                             
                                            </div>
                                        </div>
        
                                        <div className="pages__infoTxt">
                                            <div className="pages__infoTxtTitle">
                                                <h4>Период</h4>
                                            </div>
                                            <div className="pages__infoTxtVariant pages__infoTxtVariantSelect" id="dateGrafics">
                                                <h2>2021 год</h2>
                                                <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.5 8L10.2631 0.5H0.73686L5.5 8Z" fill="#77ADEA"/>
                                                </svg>                                            
                                            </div>
                                        </div>
                                    </div>
    
                                    <div className="pages__infoSelectVariant pages__infoSelectVariant--hidden">
                                        <div className="pages__infoDate">
                                            <div className="pages__infoYear unselectable">
                                                <div className="pages__infoYearArr">
                                                    <svg width="5" height="6" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1.31134e-07 3L4.5 0.401923L4.5 5.59808L1.31134e-07 3Z" fill="#1F79DF"/>
                                                    </svg>                                                        
                                                </div>
                                                <div className="pages__infoYearSelect">
                                                    <p className="pages__infoYearItem">2020</p>
                                                    <p className="pages__infoYearItem pages__infoYearItem--active">2021</p>
                                                    <p className="pages__infoYearItem">2022</p>
                                                </div>
                                                <div className="pages__infoYearArr">
                                                    <svg width="5" height="6" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5 3L0.5 0.401923L0.5 5.59808L5 3Z" fill="#1F79DF"/>
                                                    </svg>                                                        
                                                </div>
                                            </div>
                                            <div className="pages__infoDateMounth">
                                                <div className="pages__infoDateItem">
    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
    
                        <section className="pages__grafics">
                            <div className="whiteBlock pages__graficsBigBlock">
                                <iframe src="http://localhost:3000/d-solo/8SRhf8u7k/test?orgId=1&from=1653247731000&to=1653247869000&theme=light&panelId=2" width="100%" height="500" frameborder="0"></iframe>
                            </div>
                        </section>
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