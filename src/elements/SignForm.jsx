import React from "react";
import classNames from "classnames";
import axios from "axios";
import setBrootDefender from "../functions/setBrootDefender";
import brootDefender from "../functions/brootDefender";

function SignForm(){
    const [loginActive, setLoginActive] = React.useState(false);
    const [passwordActive, setPasswordActive] = React.useState(false);

    const [loginValue, setLoginValue] = React.useState("");
    const [passValue, setPassValue] = React.useState("");

    const [loginError, setLoginError] = React.useState(false);
    const [passworError, setPasswordError] = React.useState(false);
    const [message, setMessage] = React.useState("");

    const [loser, setLoser] = React.useState(0);
    const [lock, setLock] = React.useState(false);
    const [lockDate, setLockDate] = React.useState(0);

    const brootDefFunc = () =>{
        setLoser(loser + 1);
        if (loser > 5){
            setLock(true);
            setLoginValue('');
            setPassValue('');
            setBrootDefender(setLockDate);
        }
    }

    React.useEffect(()=>{
        brootDefender(setLock, setLockDate);
    }, [])

    React.useEffect(()=>{  
        if (lockDate){
            let lockIntId = setInterval(()=>{
                if (new Date().getTime() < lockDate){
                    setMessage(`Блокировка ${Math.floor((lockDate - new Date().getTime()) / 1000) + 1} секунд(-ы)`);
                }else{
                    setLoginError(false);
                    setPasswordError(false);
                    setMessage('')
                    setLock(false);
                    setLockDate(0);
                    setLoser(0);
                    clearInterval(lockIntId);
                }
            }, 1000)
        }
    
    }, [lockDate])


    function setLogin (bool){
        if (loginValue.length > 0){
            setLoginActive(true);
        }else{
            setLoginActive(bool);
        }
    }

    function setPassword(bool){
        if (passValue.length > 0){
            setPasswordActive(true);
        }else{
            setPasswordActive(bool);
        }
    }

    function setErrorLogin(bool, message){
        setLoginError(bool);
        setMessage(message);
    }

    function setErrorPassword(bool, message){
        setPasswordError(bool);
        setMessage(message);
    }

    function setAllErrors(message){
        setLoginError(true);
        setPasswordError(true);
        setMessage(message)
    }

    function removeAllErrors(){
        setLoginError(false);
        setPasswordError(false);
        setMessage("")
    }

    function sendMessage(){
        try{
            removeAllErrors();

            if (loginValue.length > 25 || loginValue.length == 0){
                setErrorLogin(true, "Поле 'Логин' заполненно не верно");
                return;
            }
            if (passValue.length > 25 || passValue.length < 2){
                setErrorPassword(true, "Поле 'Пароль' заполненно не верно");
                return;
            }

            axios.get(`http://45.133.218.11:5501/user/login?login=${loginValue}&password=${passValue}`)
            .then(function (response) {
                if (response.status == '200'){
                    let data = response.data;
                    if (data.status == 1){
                        document.cookie = `userKey=${data.token}`;
                        window.location.href = '/';
                    }else{
                        setAllErrors("Не верный логин или пароль");
                        brootDefFunc();
                    }
                }else{
                    setAllErrors("Ошибка подключения к серверу");
                }
            }).catch(()=>{
                setAllErrors("Ошибка подключения к серверу");
            })
        }catch(e){
            setAllErrors("Ошибка подключения к серверу");
        }
    }
    return(
            <div className="whiteBlock signform__formWrap">
                <div className="signform__form">
                    <div className="signform__formPic">
                        <svg width="156" height="41" viewBox="0 0 156 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M75.8629 9.66017C68.0383 9.66017 65.8436 13.7443 64.8676 21.0051C63.8338 28.6107 65.1443 33.0352 73.2243 33.0352C81.0531 33.0352 83.2964 28.6107 84.3297 21.0051C85.3196 13.7443 83.9648 9.66017 75.8629 9.66017ZM75.6962 14.8925C78.6079 14.8925 78.9332 16.5261 78.3349 21.0187C77.6793 25.8426 76.5756 27.8256 73.4043 27.8256C70.4927 27.8256 70.264 25.5203 70.8709 21.0187C71.5307 16.1903 72.5201 14.8925 75.7091 14.8925H75.6962Z" fill="#1B1A19"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M104.427 17.4653C105.174 12.0606 102.465 10.0503 97.1298 10.0503H88.9841L85.9053 32.6675H91.7286L92.8809 24.2042H94.2972L97.2746 32.6766H103.499L99.9271 23.6007C102.482 22.7475 103.964 20.8779 104.427 17.4517V17.4653ZM94.161 14.7653H96.1356C98.3126 14.7653 98.911 15.0829 98.6604 16.8073C98.405 18.8449 97.4242 19.4847 95.2209 19.4847H93.5231L94.161 14.7653Z" fill="#1B1A19"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M123.471 10.0549H118.4V10.0503H112.576V10.0549L107.5 10.0503L106.814 15.0829L111.89 15.092L109.493 32.6675H115.316L117.709 15.092H122.785L123.471 10.0549Z" fill="#1B1A19"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M140.44 15.092L141.126 10.0549L131.968 10.0503H126.805L123.722 32.6675H129.549V32.663L138.047 32.6675L138.729 27.6304L130.231 27.6259L130.785 23.5825L138.782 23.587L139.463 18.5544L131.467 18.5454L131.942 15.0829L140.44 15.092Z" fill="#1B1A19"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M148.191 27.6304L150.588 10.0503H144.769L141.686 32.663H146.858V32.6675L155.307 32.663L155.993 27.6259L148.191 27.6304Z" fill="#1B1A19"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.9596 9.50569C3.7263 18.8993 9.20661 31.8687 21.4383 34.5597C-1.52527 45.2467 -9.51258 12.056 14.9596 9.50569Z" fill="#1F79DF"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.356934 14.7607C11.1636 2.58991 24.9391 5.39438 34.2239 17.1295C34.6901 -3.00086 6.50138 -7.35278 0.356934 14.7607Z" fill="#1F79DF"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M55.143 10.2319C45.9418 13.4675 43.7074 29.5046 52.6624 32.5541C55.2311 33.4299 58.5386 33.0079 61.1426 32.477L61.8723 27.1313C59.3961 27.7257 55.6355 28.7831 54.052 26.1284C52.2137 23.0516 53.4275 16.7121 57.452 15.2373C59.1717 14.5974 61.7361 15.0467 63.4601 15.4732L64.1552 10.3908C61.3183 9.71458 57.9755 9.23356 55.143 10.2319Z" fill="#1B1A19"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M21.374 18.5137L21.5456 30.8978L33.0911 40.5637H47.1085L21.374 18.5137Z" fill="#FF512A"/>
                        </svg>                                
                    </div>
                    <form action="" className={classNames({"elem-noactive": lock})}>
                        <div className={classNames('inputWrap', {'inputWrap--active': loginActive, "inputWrap--alert":loginError})}>
                            <p className="inpTxt">Логин</p>
                            <input onChange={event=>setLoginValue(event.target.value)} value={loginValue} onFocus={()=>setLogin(true)} onBlur={()=>setLogin(false)} type="text"/>
                        </div>
                        <div className={classNames('inputWrap', {'inputWrap--active': passwordActive, "inputWrap--alert":passworError})}>
                            <p className="inpTxt">Пароль</p>
                            <input onChange={event=>setPassValue(event.target.value)} value={passValue} onFocus={()=>setPassword(true)} onBlur={()=>setPassword(false)} type="password"/>
                        </div>
                    </form>
                    <div className={classNames('signform__formBtn', {'elem-noactive': lock})}>
                        <button onClick={sendMessage} className="mainBtn orangeBtn">
                            Войти
                        </button>
                    </div>
                    <div className="signform__formErrors">
                        <p>{message}</p>
                    </div>
                </div>
            </div>
    )
}

export default SignForm;