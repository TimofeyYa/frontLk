import React from "react";
import '../css/signin.css';
import SignForm from "../elements/SignForm";
import getCookie from '../functions/getCookie'
import {Navigate} from 'react-router-dom';

function SignPage (){

    const KEY = getCookie("userKey");

    
    if (!(KEY.length > 10)){
    return(
        <section className="signform">
            <SignForm/>
        </section>
    )
    }else{
        return(
            <Navigate replace to="/" />
        )
    }
}

export default SignPage;