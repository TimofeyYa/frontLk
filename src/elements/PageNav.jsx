import React from "react";
import NavItem from "./subElements/NavItem";

function PageNav(){
    const dataLinks = [
        ["Бюджет", "/"],
        ["Контакты", "/contacts"],
    ]
    return(
        <nav className="pages__nav">
            <ul>    
                {dataLinks && dataLinks.map((item, index)=> <NavItem name={item[0]} link={item[1]} key={`nav${index}_${item[0]}`} />)}
            </ul>
        </nav>
    )
}

export default PageNav;