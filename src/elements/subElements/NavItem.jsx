import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { useSearchParams } from "react-router-dom";


function NavItem(props){
    const bool = window.location.pathname === props.link;
    let [searchParams, setSearchParams] = useSearchParams();
    let route = searchParams.get("route") || false;
    let claster = searchParams.get("claster") || false;


    if (props.subMenu && bool){
        return(
            <div className="pages__navItemWrap">
            <li className={classNames("pages__navItem", {"pages__navItem--selected":bool && !route,  "pages__navItem--onlyLine":route})}><div className="lines linesBold"></div> <Link to={props.link}>{props.name}</Link></li>
                {props.subMenu && props.subMenu.map((item, index)=> {
                    if (item[1] && route=== item[0]){
                        return(
                            <div className="pages__navItemSubWrap">
                                <li key={`navSub_${index}`} className={classNames("pages__navItem pages__navItemSub", {"pages__navItem--selected":route=== item[0]})}>
                                    <Link className="pages__navItemSubLink" to={`?route=${item[0]}`}>
                                        {item[0]}
                                        <svg width="7" height="5" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.5 5L6.53109 0.5H0.468911L3.5 5Z" fill="#77ADEA"/>
                                        </svg>
                                    </Link>
                                </li>
                                {item[1].map((element,indexEl) =>
                                    <li key={`navSubSub_${indexEl}`} className={classNames("pages__navItem pages__navItemSubSub", {"pages__navItemSub--selected":claster=== element})}><Link className="pages__navItemSubLink" to={`?route=${item[0]}&claster=${element}`}>{element}</Link></li>
                                )}
                            </div>
                        )
                    }else{
                        return(
                            <li key={`navSub_${index}`} className={classNames("pages__navItem pages__navItemSub", {"pages__navItem--selected":route=== item[0]})}>
                                <Link className="pages__navItemSubLink" to={`?route=${item[0]}`}>
                                    {item[0]}
                                    {item[1] &&
                                    <svg width="7" height="5" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.5 5L6.53109 0.5H0.468911L3.5 5Z" fill="#77ADEA"/>
                                    </svg>
                                    }
                                </Link>
                            </li>
                        )
                    }
                    
                })}
            </div>
        )
    }else{
        return(
            <li className={classNames("pages__navItem", {"pages__navItem--selected":bool })}><div className="lines linesBold"></div> <Link to={props.link}>{props.name}</Link></li>
        )
    }
  
}

export default NavItem;