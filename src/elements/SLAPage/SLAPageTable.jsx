import axios from 'axios';
import React from 'react';
import StaticTable from '../subElements/StaticTable'
import ServerData from '../../config/ServerData.config';

function SLAPageTable(props){
    // Работа со временем
    const [endTime, setEndTime] = React.useState(new Date(`${props.date[0].getFullYear()}-${props.date[0].getMonth() + 2}-01`));
    const [startTime, setStartTime] = React.useState(new Date(`${props.date[0].getFullYear()}-${props.date[0].getMonth()+1}-01`));
    

    React.useEffect(()=>{
        // Проверка выбран ли период
        if(props.date.length > 1){
            if (props.date[1].getMonth() + 2 === 13) {
                setEndTime(new Date(`${props.date[1].getFullYear() + 1}/01/01`));
            }else{
                setEndTime(new Date(`${props.date[1].getFullYear()}/${props.date[1].getMonth() + 1}-01`));
            }
            setStartTime(new Date(`${props.date[0].getFullYear()}/${props.date[0].getMonth()+1}/01`));
        }else{
            if (props.fullYear){
                setEndTime(new Date(`${props.date[0].getFullYear()}/12/31`))
                setStartTime(new Date(`${props.date[0].getFullYear()}/01/01`))
            }
            else{
                if (props.date[0].getMonth() + 2 === 13) {
                    setEndTime(new Date(`${props.date[0].getFullYear()}/${props.date[0].getMonth() + 1}/31`));
                }else{
                    setEndTime(new Date(`${props.date[0].getFullYear()}/${props.date[0].getMonth() + 2}/01`));
                }
                setStartTime(new Date(`${props.date[0].getFullYear()}/${props.date[0].getMonth()+1}/01`));
            }
        }
    }, [props.date[0], props.date[1]])


    // Контент таблицы 
    let [tableContent, setTableContent] = React.useState([]);

    React.useEffect(()=>{
        let url = `${new ServerData().getHost()}/params/SLA/getSLA?token=${props.token}`;
        if (startTime) url+=`&start=${startTime.getFullYear()}-${startTime.getMonth()+1}-${startTime.getDate()}&end=${endTime.getFullYear()}-${endTime.getMonth()+1}-${endTime.getDate()}`
        axios.get(url)
        .then(result => setTableContent(result.data.data))
        .catch(e => console.log(e));
    }, [startTime]); 

    return (
        <section className="SLA">
           <div className="whiteBlock SLA__content">
               <div className="SLA__tableWrap">
                   <div className="SLA__tableWrapContent">
                    <StaticTable 
                        titles={
                            ["Тикет", "Создан", "Приоритет", "SLA реакции", "Время реакции",
                            "Норматив. время реакции", "SLA решения", "Время решения",
                            "Норматив. время решения", "Статус"]
                        }
                        columns={[1,1,1,1,1,1,1,1,1,1]} data={tableContent} sort={false}/>
                   </div>
               </div>
           </div>
        </section>
    ) 
}

export default SLAPageTable;