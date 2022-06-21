import React from "react";
import getComponents from "../../functions/getComponents";


function CostGrafic(props){
    const [url,setUrl] = React.useState(false);

    React.useEffect(()=>{
        getComponents(setUrl,"test")
    },[])
    
    return(
        <div className="pages__graficsBlockWrap">
            <div className="pages__graficsBlockTitle">
                <h2>Детализация показателей по платформе Cluster22a-1</h2>
            </div>
            <div className="pages__graficsBlockCostWrap">
                <div className="whiteBlock pages__graficsBlock pages__graficsTableBlock">
                    <iframe src="http://45.133.218.11:3000/d-solo/zHe7Ii3nz/vdi-bograda144?orgId=1&from=1648746000000&to=1651337999000&theme=light&panelId=21" width="100%" height="400" frameborder="0"></iframe>
                </div>
                <div className="whiteBlock pages__graficsBlock pages__graficsPieBlock">
                    <iframe src="http://45.133.218.11:3000/d-solo/zHe7Ii3nz/vdi-bograda144?orgId=1&from=1648746000000&to=1651337999000&panelId=22&theme=light" width="100%" height="400" frameborder="0"></iframe>
                </div>
            </div>
        </div>
    )
}

export default CostGrafic;