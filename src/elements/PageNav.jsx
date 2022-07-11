import React from "react";
import NavItem from "./subElements/NavItem";


function PageNav(props){

    return(
        <nav className="pages__nav pages__nav--active">
            <ul>    
                {props.dataLinks &&
                 props.dataLinks.map((item, index)=> {
                     return <NavItem subMenu={item[2]} name={item[0]} link={item[1]} key={`nav${index}_${item[0]}`} />;
                 } )}
            </ul>
        </nav>
    )
}

export default PageNav;