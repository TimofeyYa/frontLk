import React from "react";
import {useSearchParams} from 'react-router-dom';
import CookieController from "../../functions/CookieController";
import MainPageControls from "../../elements/budgetPage/BudgetPageControls";
import MainPageGrafics from "../../elements/budgetPage/BudgetPageGrafics";
import ScaleGraf from "../../elements/ScaleGraf";


function BudgetPage (props){ 
    // Работа с параметрами для фильтрации
    const [searchParams] = useSearchParams();
    const [route] = React.useState(searchParams.get("route"));

    // Работа с датой
    const [date,setDate] = React.useState([new Date()]);
    const [fullYear,setFullYear] = React.useState(false);

    // Управление для scale
    const [scaleGraf,setScaleGraf] = React.useState(false);


  
        return(
            <div className="pages__content">
                <MainPageControls token={props.token} fullYear={fullYear} setFullYear={setFullYear} route={route}  date={date} setDate={setDate}/>
                <MainPageGrafics setScale={setScaleGraf} fullYear={fullYear} token={props.token} route={route}  date={date}/>
                <ScaleGraf src={scaleGraf} setScale={setScaleGraf}/>
            </div>
        )

    
}

export default BudgetPage;