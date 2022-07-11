import React from "react";
import ResursesPageControls from "../../elements/resursesPage/ResursesPageControls";
import ResursesPageGrafics from "../../elements/resursesPage/ResursesPageGrafics";
import ScaleGraf from "../../elements/ScaleGraf";
import {useSearchParams} from 'react-router-dom'

function ResursesPage (props){         
    // Работа с параметрами для фильтрации
    const [searchParams, setSearchParams] = useSearchParams();
    const route = searchParams.get("route");

    // Работа с датой
    const [date,setDate] = React.useState([new Date()]);
    const [fullYear,setFullYear] = React.useState(false);

    // Управление для scale
    const [scaleGraf,setScaleGraf] = React.useState(false);
    let [thisRouteParams, setThisRouteParams] = React.useState([]);

    React.useEffect(()=>{
        let thisLink = [];
        props.dataLinks.forEach((link)=>{
            if (link[0] === 'Ресурсы'){
                thisLink= link;
                setThisRouteParams(link);
            }
        })
        if (route === null){
            setSearchParams({'route':thisLink[2][0][0]})
        }
    }, [route])

  
    return(
        <div className="pages__content">
            <div className="pages__content">
                <ResursesPageControls token={props.token} fullYear={fullYear} setFullYear={setFullYear} route={route}  date={date} setDate={setDate}/>
                <ResursesPageGrafics thisRouteParams={thisRouteParams[2]} setScale={setScaleGraf} fullYear={fullYear} token={props.token} route={route}  date={date}/>
                <ScaleGraf src={scaleGraf} setScale={setScaleGraf}/>
            </div>
        </div>
    )
}

export default ResursesPage;