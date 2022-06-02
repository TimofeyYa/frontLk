import React from "react";
import getUserInfo from "../functions/getUserInfo";
import DateController from "./subElements/DateController";

function MainPageControls(props){
    const [name, setName] = React.useState("");

    React.useEffect(()=>{
        const data = getUserInfo(setName, "name");
    }, []);

    return(
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
                        <h2>{name}</h2>
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

            <DateController date={props.date} setDate={props.setDate}/>
        </section>
    )
}

export default MainPageControls;