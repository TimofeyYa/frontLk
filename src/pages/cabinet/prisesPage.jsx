import React from "react";
import CookieController from "../../functions/CookieController";
import PrisesPageContent from "../../elements/prisesPage/PrisesPageContent";

function PrisesPage (){ 
    const KEY = CookieController.getCookie("userKey");
    return(
        <div className="pages__content">
            <PrisesPageContent/>
        </div>
    )
}

export default PrisesPage;