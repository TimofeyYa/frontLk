import classNames from "classnames";
import React from "react";
import getUserInfo from "../../functions/getUserInfo";
import DateController from "../subElements/DateController";
import NameLoader from "../subElements/loaders/NameLoader";

function SLAPageControls(props){
    const [name, setName] = React.useState("");
    
    React.useEffect(()=>{
        getUserInfo(setName, "name");
    }, []);


    const [fixed, setFixed] = React.useState(false);
    const sectionForScrollEvent = React.useRef(null);
    React.useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if (window.scrollY > sectionForScrollEvent.current.offsetTop - 35){
                setFixed(true)
            }else{
                setFixed(false)
            }
        })
    })
    return(
        <section ref={sectionForScrollEvent} className="pages__info pages__info--resurses">
            <div className={classNames("pages__infoWrap", {"pages__infoWrap--goHead": fixed})}>
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
            </div>
        </section>
    )
}

export default SLAPageControls;