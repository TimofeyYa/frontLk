class BrootDefenderController{
    isBrootDefenderActive(setState, setTime){
        let date = localStorage.getItem('blockDate');
        if (date){
            const nowDate = new Date().getTime();
            if (nowDate < date){
                setTime(date);
                setState(true);
            }else localStorage.setItem('blockDate', 0);
        }
    }
    setBrootDefender(setTime){
        let date = new Date().getTime() + 16000;
        localStorage.setItem('blockDate', date);
        setTime(date);
    }
}

export default new BrootDefenderController();