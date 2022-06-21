import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { useSearchParams } from "react-router-dom";


function NavItem(props){
    const bool = window.location.pathname === props.link;
    let [searchParams, setSearchParams] = useSearchParams();
    let route = searchParams.get("route");


    if (props.subMenu && bool){
        return(
            <div className="pages__navItemWrap">
            <li className={classNames("pages__navItem", {"pages__navItem--selected":bool && !route,  "pages__navItem--onlyLine":route})}><div className="lines linesBold"></div> <Link to={props.link}>{props.name}</Link></li>
                {props.subMenu && props.subMenu.map((item, index)=>  <li className={classNames("pages__navItem pages__navItemSub", {"pages__navItem--selected":route=== item})}><Link className="pages__navItemSubLink" to={`?route=${item}`}>{item}</Link></li>)}
            </div>
        )
    }else{
        return(
            <li className={classNames("pages__navItem", {"pages__navItem--selected":bool })}><div className="lines linesBold"></div> <Link to={props.link}>{props.name}</Link></li>
        )
    }
  
}

export default NavItem;