import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

function NavItem(props){
    const bool = window.location.pathname == props.link;
    return(
        <li className={classNames("pages__navItem", {"pages__navItem--selected":bool })}><div className="lines linesBold"></div> <Link to={props.link}>{props.name}</Link></li>
    )
}

export default NavItem;