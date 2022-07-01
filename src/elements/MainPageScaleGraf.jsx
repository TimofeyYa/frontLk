import classNames from "classnames";
import React from "react";

function MainPageScaleGraf(props){
    const popup = React.useRef(null);

    React.useEffect(()=>{
        popup.current.addEventListener("click", (e)=>{
            if (e.target == popup.current){
                props.setScale(false)
            }
        })
    }, [])

    return(
        <div ref={popup} className={classNames('popup', {'popup-none': !props.src})}>
            <div className="popup__content popup__contentScale whiteBlock">
                <iframe title="bigGraf" src={props.src} width="100%" height="100%" frameBorder="0"></iframe>
                <div className="popScaleExit" onClick={()=>props.setScale(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                        <path d="M1 1L11.8487 12M12 1L1.15131 12" stroke="#C4C4C4"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default MainPageScaleGraf;