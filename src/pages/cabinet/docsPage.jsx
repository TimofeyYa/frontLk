import React from "react";
import CookieController from "../../functions/CookieController";


function DocsPage (){ 
    const KEY = CookieController.getCookie("userKey");
    return(
        <div className="pages__content">
            
        </div>
    )
}

export default DocsPage;