import React from 'react';
import StaticTable from '../subElements/StaticTable'

function SLAPageTable(){
    let tableContent = [];
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