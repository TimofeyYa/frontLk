import React from "react";
import {useSearchParams} from 'react-router-dom';
import MainPageControls from "../../elements/budgetPage/BudgetPageControls";
import MainPageGrafics from "../../elements/budgetPage/BudgetPageGrafics";
import ScaleGraf from "../../elements/ScaleGraf";


function BudgetPage (props){ 
    // Работа с параметрами для фильтрации
    const [searchParams] = useSearchParams();
    const [route] = React.useState(searchParams.get("route"));

    // Для нашей таблицы с сумой по кластеру - сейчас просто тестовый вариант
    const [sumForMyTable, setSumForMyTable] = React.useState(0); 

    // Управление для scale
    const [scaleGraf,setScaleGraf] = React.useState(false);
  
        return(
            <div className="pages__content">
                <MainPageControls setSumForMyTable={setSumForMyTable} token={props.token} fullYear={props.fullYear} setFullYear={props.setFullYear} route={route}  date={props.date} setDate={props.setDate}/>
                <MainPageGrafics sumForMyTable={sumForMyTable} setScale={setScaleGraf} fullYear={props.fullYear} token={props.token} route={route}  date={props.date}/>
                <ScaleGraf src={scaleGraf} setScale={setScaleGraf}/>
            </div>
        )

    
}

export default BudgetPage;