import React from "react";
import classNames from "classnames";
import setCookie from "../functions/setCookie";

function UserMenu(props){
    const [menuActive, setMenuActive] = React.useState(true);
    const menuElem =React.useRef();

    function showMenu(){
   
        setMenuActive(!menuActive);
    }

    function exit(){
        setCookie('userKey', "");
        window.location.reload();
    }


    return(
        <div className="header__profile">
            <div className="header__profilePic">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="9.5" cy="9.5" r="9" stroke="black"/>
                    <path d="M13.3212 13.6636L5.71447 13.6636C5.82395 12.8308 6.2048 12.0517 6.80532 11.4511C7.52472 10.7317 8.50043 10.3276 9.51781 10.3276C10.5352 10.3276 11.5109 10.7317 12.2303 11.4511C12.8308 12.0517 13.2117 12.8308 13.3212 13.6636ZM11.6862 7.15924C11.6862 8.35678 10.7154 9.32758 9.51781 9.32758C8.32027 9.32758 7.34947 8.35678 7.34947 7.15924C7.34947 5.9617 8.32027 4.99091 9.51781 4.99091C10.7154 4.99091 11.6862 5.9617 11.6862 7.15924Z" stroke="black"/>
                </svg>                                
            </div>

            <div className="unselectable header__name" onClick={showMenu}>
                <p>{typeof(props.name) == "string" && props.name}</p>
            </div>

            {props.menuActive &&
            <div className="header__arr">
                <svg width="6" height="5" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 4.5L5.59808 0H0.401924L3 4.5Z" fill="#317EE4"/>
                </svg>                                
            </div>
            }
            
            {props.menuActive &&
            <div ref={menuElem} className={classNames('header__profileMenu', {"header__profileMenu--hidden": menuActive})}>
                <div className="header__profileMenuItem header__profileMenuItem--exit" onClick={exit}>
                    <p>Выйти из системы</p>
                </div>

                <div className="header__profileMenuItem">
                    <p>Сменить пользователя</p>
                </div>
            </div>
            }
        </div>
    )
}

export default UserMenu;