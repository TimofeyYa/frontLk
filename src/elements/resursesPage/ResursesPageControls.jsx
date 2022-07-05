import React from "react";
import getUserInfo from "../../functions/getUserInfo";
import DateController from "../subElements/DateController";
import NameLoader from "../loaders/NameLoader";
import axios from "axios";
import ServerData from "../../config/ServerData.config";
import numberNormalize from "../../functions/numberNormalize";



function ResursesPageControls(props){
    const [name, setName] = React.useState("");
    
    React.useEffect(()=>{
        getUserInfo(setName, "name");
    }, []);


    // Для управления временем 

    const [endTime, setEndTime] = React.useState(new Date());
    const [startTime, setStartTime] = React.useState(new Date());


    React.useEffect(()=>{
        if(props.date.length > 1){
            if (props.date[1].getMonth() + 2 === 13) {
                setEndTime(new Date(`${props.date[1].getFullYear() + 1}-01-01`));
            }else{
                setEndTime(new Date(`${props.date[1].getFullYear()}-${props.date[1].getMonth() + 1}-01`));
            }
            setStartTime(new Date(`${props.date[0].getFullYear()}-${props.date[0].getMonth()+1}-01`));
        }else{
            if (props.fullYear){
                setEndTime(new Date(`${props.date[0].getFullYear()}-12-31`))
                setStartTime(new Date(`${props.date[0].getFullYear()}-01-01`))
            }
            else{
                if (props.date[0].getMonth() + 2 === 13) {
                    setEndTime(new Date(`${props.date[0].getFullYear()}-${props.date[0].getMonth() + 1}-31`));
                }else{
                    setEndTime(new Date(`${props.date[0].getFullYear()}-${props.date[0].getMonth() + 2}-01`));
                }
                setStartTime(new Date(`${props.date[0].getFullYear()}-${props.date[0].getMonth()+1}-01`));
            }
        }

    }, [props.date[0], props.date[1]])

    return(
        <section className="pages__info pages__info--resurses">
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
                        <h2>{name.length > 0 ? name :  <NameLoader/>  }</h2>
                    </div>
                </div>
            </div>


            <DateController fullYear={props.fullYear} setFullYear={props.setFullYear} date={props.date} setDate={props.setDate}/>
        </section>
    )
}

export default ResursesPageControls;