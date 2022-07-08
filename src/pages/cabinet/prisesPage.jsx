import React from "react";
import CookieController from "../../functions/CookieController";
import PrisesPageContent from "../../elements/prisesPage/PrisesPageContent";

function PrisesPage (props){ 
    return(
        <div className="pages__content">
            <PrisesPageContent token={props.token}/> 
        </div>
    )
}

export default PrisesPage;