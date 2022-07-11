import React from "react";
import {useSearchParams} from 'react-router-dom';
import MainPageControls from "../../elements/budgetPage/BudgetPageControls";
import MainPageGrafics from "../../elements/budgetPage/BudgetPageGrafics";
import ScaleGraf from "../../elements/ScaleGraf";


function BudgetPage (props){ 
    // Работа с параметрами для фильтрации
    const [searchParams] = useSearchParams();
    const [route] = React.useState(searchParams.get("route"));

    

    // Управление для scale
    const [scaleGraf,setScaleGraf] = React.useState(false);
  
        return(
            <div className="pages__content">
                <MainPageControls token={props.token} fullYear={props.fullYear} setFullYear={props.setFullYear} route={route}  date={props.date} setDate={props.setDate}/>
                <MainPageGrafics setScale={setScaleGraf} fullYear={props.fullYear} token={props.token} route={route}  date={props.date}/>
                <ScaleGraf src={scaleGraf} setScale={setScaleGraf}/>
            </div>
        )

    
}

export default BudgetPage;