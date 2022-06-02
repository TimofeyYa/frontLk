import React from "react";
import classNames from "classnames";

function MonthElem(props){
    return(
        <div onClick={()=>props.selectMonth(props.num)} className="pages__infoDateItem">
            <div className="pages__infoDateRadioWrap">
                <div className={classNames('pages__infoDateRadio', {"pages__infoDateRadio--active": props.active})}>

                </div>
            </div>
            <div className="pages__infoDateName unselectable">
                <p>{props.name}</p>
            </div>
        </div>
    )
}

export default MonthElem;