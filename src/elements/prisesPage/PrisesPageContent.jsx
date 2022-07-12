import axios from 'axios';
import React from 'react'
import StaticTable from '../subElements/StaticTable';
import ServerData from '../../config/ServerData.config';

function PrisesPageContent(props){
    const [tableContent, setTableContent] = React.useState([]);

    React.useEffect(()=>{
        axios.get(`${new ServerData().getHost()}/params/prise/getPrise?token=${props.token}`)
        .then(result => setTableContent(result.data.data))
        .catch(e => console.log(e));
    }, []);

    return(
        <section className="prises">
           <div className="whiteBlock prises__content">
                <StaticTable titles={["Наименование", "Ед. Изм", "Тариф (c НДС)", "Описание"]} columns={[2,2,2,4]} data={tableContent} sort={true}/>
           </div>
        </section>
    )
}

export default PrisesPageContent;