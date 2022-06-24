import React from "react";
import getComponents from "../../functions/getComponents";


function DetailGrafic(props){
    const [url,setUrl] = React.useState(false);

    React.useEffect(()=>{
        getComponents(setUrl,"test")
    },[])
    
    return(
        <div className="pages__graficsBlockWrap">
            <div className="pages__graficsBlockTitle">
                <h2>Детализация показателей по платформе Cluster22a-1</h2>
            </div>
            <div className="pages__graficsBlock pages__graficsDetailBlock">
            <div className="whiteBlock pages__graficsDetailBlockItem">
                    <iframe title="detail-1" src={`http://45.133.218.11:3000/d-solo/zHe7Ii3nz/vdi-bograda144?orgId=1&from=${props.start}&to=${props.end}&theme=light&panelId=25`} width="100%" height="200" frameborder="0"></iframe>
            </div>
            <div className="whiteBlock pages__graficsDetailBlockItem">
                    <iframe title="detail-2" src={`http://45.133.218.11:3000/d-solo/zHe7Ii3nz/vdi-bograda144?orgId=1&from=${props.start}&to=${props.end}&theme=light&panelId=30`} width="100%" height="200" frameborder="0"></iframe>
            </div>
            <div className="whiteBlock pages__graficsDetailBlockItem">
                    <iframe title="detail-3" src={`http://45.133.218.11:3000/d-solo/zHe7Ii3nz/vdi-bograda144?orgId=1&from=${props.start}&to=${props.end}&theme=light&panelId=32`} width="100%" height="200" frameborder="0"></iframe>
            </div>
            <div className="whiteBlock pages__graficsDetailBlockItem">
                    <iframe title="detail-4" src={`http://45.133.218.11:3000/d-solo/zHe7Ii3nz/vdi-bograda144?orgId=1&from=${props.start}&to=${props.end}&theme=light&panelId=31`} width="100%" height="200" frameborder="0"></iframe>
            </div>
            </div>
        </div>
    )
}

export default DetailGrafic;