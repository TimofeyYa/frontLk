import React from "react";
import getComponents from "../../functions/getComponents";


function BigGrafic(props){

    // Работа с canvas
    const canv = React.useRef(null);
    const canvasWrap =  React.useRef(null);
    
    function createCanvas(numbers,titles, gap){
        const holst =  canv.current;
        holst.width = canvasWrap.current.clientWidth;
        holst.height = canvasWrap.current.clientHeight;

        if (typeof(numbers) != 'object') return;

        let canvas = holst.getContext('2d');
        // Создаём разметку
        createSectors(holst,canvas);

        // Рисуем линии деления
        const maxNam = Math.max(...numbers);
        const countLines = Math.round(holst.height / 50)
        let delenie = Math.ceil(((maxNam  * 1.6) / countLines));
        let delitel = Math.pow(10, delenie.toString().length - 1)
        delenie = Math.round(delenie / delitel) * delitel;
        createLines(holst,canvas, delenie, countLines);


        // Рисуем блоки
        createRect(holst,canvas,numbers, delenie, titles, gap)
    }

    function createSectors(holst, canvas){
        canvas.beginPath();
        canvas.lineWidth = 1;
        canvas.strokeStyle = 'black';
        canvas.moveTo(80, 0);
        canvas.lineTo(80, holst.height - 20);
        canvas.stroke();
        canvas.beginPath();
        canvas.lineWidth = 1;
        canvas.strokeStyle = 'black';
        canvas.moveTo(80, holst.height - 20);
        canvas.lineTo(holst.width - 20, holst.height - 20);
        canvas.stroke();

        canvas.fillStyle = "#000";
        canvas.strokeStyle = "#000";
        canvas.font = "normal 17px Arial";
        canvas.fillText("0", 60, holst.height - 15);
    }

    function createLines(holst, canvas, delenie, countLines){
        for (let i = 1; i <= countLines; i++){
            let num = delenie * i;

            canvas.fillStyle = "#000";
            canvas.strokeStyle = "#000";
            canvas.font = "normal 13px Arial";
            canvas.fillText(`${num}`, 70 - 7*num.toString().length, holst.height - 20 - 50 * i + 5);

            canvas.beginPath();
            canvas.lineWidth = 1;
            canvas.strokeStyle = 'gray';
            canvas.moveTo(80, holst.height - 20 - 50 * i);
            canvas.lineTo(holst.width - 20, holst.height - 20 - 50 * i);
            canvas.stroke();
        }
    }

    function createRect(holst, canvas, nambers, delenie, titles, gap){
        const step = delenie/50;

        let namElem = 0;
        let addGap = 0;
        for (let value of nambers){
            let sdvig = 1;
            let grafValue = 0
            const rectWith = (holst.width - 100 - gap*2) / nambers.length ;

            canvas.fillStyle = '#1F79DF';
            while (grafValue < value){
                grafValue+=step;
                canvas.fillRect((80 + gap) + (rectWith *namElem ) + addGap * gap, holst.height - 21 - sdvig, rectWith - addGap * gap, 1);
                sdvig++;
            }

            canvas.fillStyle = "#000";
            canvas.strokeStyle = "#000";
            canvas.font = "normal 15px Arial";
            canvas.fillText(`${titles[namElem]} - ${value}`,  (80 + gap) + (rectWith *namElem ) + addGap * gap + 5, holst.height - 2);

            if (sdvig > 30){
                canvas.fillStyle = "#fff";
                canvas.strokeStyle = "#000";
                canvas.font = "normal 17px Arial";
                canvas.fillText(value,  (80 + gap) + (rectWith *namElem ) + addGap * gap + 5, holst.height - 21 - sdvig + 25);
            }

            namElem++;
            addGap = 1;
        }
    }

    React.useEffect(()=>{
        createCanvas([123000, 36300, 15000],['Январь', "Февраль", "Март"], 30);
    },[])   

    return(
        <div className="pages__graficsBlockWrap">
            <div className="whiteBlock pages__graficsBlock pages__graficsBigBlock">
                <div ref={canvasWrap} className="canvas__wrap">
                    <canvas ref={canv}>

                    </canvas>
                </div>
            </div>
        </div>
    )
}

export default BigGrafic;

