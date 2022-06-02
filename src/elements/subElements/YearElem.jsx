import React from "react";

function YearElem(props){
    

    return(
        <div className="pages__infoYear unselectable">
            <div onClick={()=> props.selectYear(props.year - 1)} className="pages__infoYearArr">
                <svg width="5" height="6" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.31134e-07 3L4.5 0.401923L4.5 5.59808L1.31134e-07 3Z" fill="#1F79DF"/>
                </svg>                                                        
            </div>
            <div className="pages__infoYearSelect">
                <p className="pages__infoYearItem">{props.year - 1}</p>
                <p className="pages__infoYearItem pages__infoYearItem--active">{props.year}</p>
                <p className="pages__infoYearItem">{props.year + 1}</p>
            </div>
            <div onClick={()=> props.selectYear(props.year + 1)} className="pages__infoYearArr">
                <svg width="5" height="6" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 3L0.5 0.401923L0.5 5.59808L5 3Z" fill="#1F79DF"/>
                </svg>                                                        
            </div>
        </div>
    )
}

export default YearElem;