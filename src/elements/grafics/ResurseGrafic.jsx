import axios from "axios";
import React from "react";
import getComponents from "../../functions/getComponents";


function ResurseGrafic(props){
    const [data, setData] = React.useState({
        "claster": [0,0,0,0],
        "power":[0,0,0,0],
        "usePower":[0,0,0,0]
    });
    

    // Нужно дописать запросы обращения к БД
    React.useEffect(()=>{
        
    }, []);

    return(
        <div className="pages__graficsBlockWrap">
            <div className="pages__graficsBlockTitle">
                <h2>Ресурсы платформы VDI-Bograda144</h2>
            </div>
            <div className="pages__graficsBlock pages__graficsResurseBlock">
                <div className="whiteBlock pages__graficsResurseBlockSecWrap">
                    <h3>Показатели кластера без учета резервирования</h3>
                    <div className="pages__graficsResurseBlockSec">
                        <div className="pages__graficsResurseBlockItem">
                            <h4>{data["claster"][0]}</h4>
                            <h5>Максимум Запущенных ВМ, шт</h5>
                        </div>
                        <div className="pages__graficsResurseBlockItem">
                            <iframe src="http://45.133.218.11:3000/d-solo/zHe7Ii3nz/vdi-bograda144?orgId=1&from=1648746000000&to=1651337999000&theme=light&panelId=10" width="130" height="80" frameborder="0"></iframe>
                            <h5>Максимум ВМ, шт</h5>
                        </div>
                        <div className="pages__graficsResurseBlockItem">
                            <iframe src="http://45.133.218.11:3000/d-solo/zHe7Ii3nz/vdi-bograda144?orgId=1&from=1648746000000&to=1651337999000&theme=light&panelId=9" width="130" height="80" frameborder="0"></iframe>
                            <h5>Кол-во серверов, шт</h5>
                        </div>
                        <div className="pages__graficsResurseBlockItem">
                            <iframe src="http://45.133.218.11:3000/d-solo/zHe7Ii3nz/vdi-bograda144?orgId=1&from=1648746000000&to=1651337999000&theme=light&panelId=24" width="130" height="80" frameborder="0"></iframe>
                            <h5>Консолидация pCPU к vCPU</h5>
                        </div>
                    </div>
                </div>

                <div className="whiteBlock pages__graficsResurseBlockSecWrap">
                    <h3>Вычислительная мощность кластера без учета резервирования</h3>
                    <div className="pages__graficsResurseBlockSec">
                        <div className="pages__graficsResurseBlockItem">
                        <iframe src="http://45.133.218.11:3000/d-solo/zHe7Ii3nz/vdi-bograda144?orgId=1&from=1648746000000&to=1651337999000&theme=light&panelId=25" width="130" height="80" frameborder="0"></iframe>
                            <h5>Частота ядер, GHz</h5>
                        </div>
                        <div className="pages__graficsResurseBlockItem">
                        <iframe src="http://45.133.218.11:3000/d-solo/zHe7Ii3nz/vdi-bograda144?orgId=1&from=1648746000000&to=1651337999000&panelId=14&theme=light" width="130" height="80" frameborder="0"></iframe>
                            <h5>Физические ядра, шт</h5>
                        </div>
                        <div className="pages__graficsResurseBlockItem">
                        <iframe src="http://45.133.218.11:3000/d-solo/zHe7Ii3nz/vdi-bograda144?orgId=1&from=1648746000000&to=1651337999000&theme=light&panelId=18" width="130" height="80" frameborder="0"></iframe>
                            <h5>Оперативная память, GB</h5>
                        </div>
                        <div className="pages__graficsResurseBlockItem">
                        <iframe src="http://45.133.218.11:3000/d-solo/zHe7Ii3nz/vdi-bograda144?orgId=1&from=1648746000000&to=1651337999000&theme=light&panelId=15" width="130" height="80" frameborder="0"></iframe>
                            <h5>Объем хранилища, GB</h5>
                        </div>
                    </div>
                </div>

                <div className="whiteBlock pages__graficsResurseBlockSecWrap">
                    <h3>Используемая мощность кластера</h3>
                    <div className="pages__graficsResurseBlockSec">
                        <div className="pages__graficsResurseBlockItem">
                        <iframe src="http://45.133.218.11:3000/d-solo/zHe7Ii3nz/vdi-bograda144?orgId=1&from=1648746000000&to=1651337999000&theme=light&panelId=16" width="130" height="80" frameborder="0"></iframe>
                            <h5>Средняя частота ядер, GHz</h5>
                        </div>
                        <div className="pages__graficsResurseBlockItem">
                        <iframe src="http://45.133.218.11:3000/d-solo/zHe7Ii3nz/vdi-bograda144?orgId=1&from=1648746000000&to=1651337999000&theme=light&panelId=17" width="130" height="80" frameborder="0"></iframe>
                            <h5>Среднее кол-во vCPU, шт</h5>
                        </div>
                        <div className="pages__graficsResurseBlockItem">
                        <iframe src="http://45.133.218.11:3000/d-solo/zHe7Ii3nz/vdi-bograda144?orgId=1&from=1648746000000&to=1651337999000&theme=light&panelId=19" width="130" height="80" frameborder="0"></iframe>
                            <h5>Среднее кол-во RAM, GB</h5>
                        </div>
                        <div className="pages__graficsResurseBlockItem">
                        <iframe src="http://45.133.218.11:3000/d-solo/zHe7Ii3nz/vdi-bograda144?orgId=1&from=1648746000000&to=1651337999000&theme=light&panelId=20" width="130" height="80" frameborder="0"></iframe>
                            <h5>Объем хранилища, GB</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResurseGrafic;