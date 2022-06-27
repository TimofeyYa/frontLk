import React from "react";

function BarChar(props){
    // Работа с canvas
    const canv = React.useRef(null);
    const canvasWrap =  React.useRef(null);
    
    function createCanvas(numbers, setTitles ,titles, gap){
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
        createRect(holst,canvas,numbers, delenie, titles, setTitles, gap)
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

    function createRect(holst, canvas, nambers, delenie, titles, setTitles, gapParam = 20){
        let gap = gapParam;
        const step = delenie/50;

        let namElem = 0;
        let addGap = 0;
        let fontSize1 = 15;
        let fonSize2 = 17;
        let stringCenter = " - ";
        
        if (nambers.length > 5){
            fontSize1 = 13;
            fonSize2 = 14;
            gap = Math.floor(gap / 1.7);
            
        }
        if (nambers.length > 10){
            fontSize1 = 11;
            fonSize2 = 12;
            gap = Math.floor(gap / 1.85);
            
        }
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
            canvas.font = `normal ${fontSize1}px Arial`;
    
            if (nambers.length < 10){
                canvas.fillText(`${titles[setTitles[namElem]]} - ${value}`,  (80 + gap) + (rectWith *namElem ) + addGap * gap + 5, holst.height - 2);
            }else{
                canvas.fillText(`${titles[setTitles[namElem]]}`,  (80 + gap) + (rectWith *namElem ) + addGap * gap + 5, holst.height - 10);
                canvas.fillText(`${value}`,  (80 + gap) + (rectWith *namElem ) + addGap * gap + 5, holst.height - 0);
            }
            if (sdvig > 30){
                canvas.fillStyle = "#fff";
                canvas.strokeStyle = "#000";
                canvas.font = `normal ${fonSize2}px Arial`;
                canvas.fillText(value,  (80 + gap) + (rectWith *namElem ) + addGap * gap + 5, holst.height - 21 - sdvig + 25);
            }

            namElem++;
            addGap = 1;
        }
    }

    
    React.useEffect(()=>{
        createCanvas(props.value, props.setTitles  ,props.titles, 30);
    },[props.value, props.setTitles])   


    return(
        <div ref={canvasWrap} className="canvas__wrap">
            <canvas ref={canv}>

            </canvas>
        </div>
    )
}

export default BarChar;