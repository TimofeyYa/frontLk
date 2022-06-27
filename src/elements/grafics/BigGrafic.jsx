import axios from "axios";
import React from "react";
import getComponents from "../../functions/getComponents";
import BarChar from "../canvas/BarChar";


function BigGrafic(props){
    const mounth = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
    const [value, setValue] = React.useState([]);
    const [setTitles, setSetTitles] = React.useState([]);


    // Тут ещё необходимо сделать фильтрацию по месецам
    React.useEffect(()=>{
        const swapValue = [];
        const swapSetTitles = [];
        axios.get('http://localhost:5501/params/cost/getCostForYear?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MCwibG9naW4iOiJkYXRhY29ydGVsIiwicGFzc3dvcmQiOiIhUWF6eHN3MjNlZGMiLCJpYXQiOjE2NTYyOTQ5NzAsImV4cCI6MTY1NjM4MTM3MH0.KuKmwXO6nVUA5249RQfobwPb_gvDfmEabqz0mTX3WPQ&year=2022&mounth=April')
        .then(data => {
            for (let item of data.data.data){
                let dateChart = item['date'].split('-');
                swapSetTitles.push(new Date(`1 ${dateChart[1]} 2020`).getMonth());
                swapValue.push(item['Result']);
            }
            setSetTitles(swapSetTitles);
            setValue(swapValue);
        })
        .catch((e)=>{
            console.log("Ошибка при получении данных")
        })
    }, [])
    return(
        <div className="pages__graficsBlockWrap">
            <div className="whiteBlock pages__graficsBlock pages__graficsBigBlock">
                <BarChar value={value} titles={mounth} setTitles={setTitles}/>
            </div>
        </div>
    )
}

export default BigGrafic;

