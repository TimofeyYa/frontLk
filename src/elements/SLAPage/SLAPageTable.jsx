import axios from 'axios';
import React from 'react';
import StaticTable from '../subElements/StaticTable'
import ServerData from '../../config/ServerData.config';

function SLAPageTable(props){
    let [tableContent, setTableContent] = React.useState([]);

    React.useEffect(()=>{
        axios.get(`${new ServerData().getHost()}/params/SLA/getSLA?token=${props.token}`)
        .then(result => setTableContent(result.data.data))
        .catch(e => console.log(e));
    }, []);

    return (
        <section className="SLA">
           <div className="whiteBlock SLA__content">
                <StaticTable 
                titles={
                    ["Тикет", "Создан", "Приоритет", "SLA реакции", "Время реакции",
                     "Нормативное время реакции", "SLA решения", "Время решения",
                     "Нормативное время решения", "Статус"]
                }
                columns={[1,1,1,1,1,1,1,1,1,1]} data={tableContent} sort={true}/>
           </div>
        </section>
    ) 
}

export default SLAPageTable;