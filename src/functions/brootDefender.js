'use strict'

function brootDefender(setState, setTime){
    let date = localStorage.getItem('blockDate');
    if (date){
        const nowDate = new Date().getTime();
        if (nowDate < date){
            setTime(date);
            setState(true);
        }else{
            localStorage.setItem('blockDate', 0);
        }
    }
}

export default brootDefender;