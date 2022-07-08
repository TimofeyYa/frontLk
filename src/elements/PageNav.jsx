import React from "react";
import NavItem from "./subElements/NavItem";


function PageNav(){
    const dataLinks = [
        ["Бюджет", "/cabinet/budget", [["Общая", ["SRV-Bograda144","VDI-Bograda144", "Cluster-22a-1"]], ["Реестр"], ["УЗЗ"]]],
        ["Ресурсы", "/cabinet/resurses", [["Общая", ["SRV-Bograda144","VDI-Bograda144", "Cluster-22a-1"]], ["Реестр"], ["УЗЗ"]]],
        ["SLA", "/cabinet/SLA"],
        ["Цены", "/cabinet/prises"],
        ["Документы", "/cabinet/docs"], 
        ["Контакты", "/cabinet/contacts"]
   ]

    return(
        <nav className="pages__nav pages__nav--active">
            <ul>    
                {dataLinks &&
                 dataLinks.map((item, index)=> {
                     return <NavItem subMenu={item[2]} name={item[0]} link={item[1]} key={`nav${index}_${item[0]}`} />;
                 } )}
            </ul>
        </nav>
    )
}

export default PageNav;