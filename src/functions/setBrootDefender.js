'use strict'

function setBrootDefender(setTime){
    let date = new Date().getTime() + 16000;
    localStorage.setItem('blockDate', date);
    setTime(date);
}

export default setBrootDefender;