function numberNormalize(number = 0, round = true){
    let numText; // само число
    let floatChart = ''; // Дробная часть от числа
    if (typeof(number) == 'number'){
        numText = number.toString();
    }else{
        numText = number;
    }

    // Отделяем дробную часть
    if (numText.indexOf('.') > 0){
        let swap = numText.split('.');
        numText = swap[0];
        floatChart = swap[1];
    }

    if (round && floatChart.length > 2){
        if (floatChart[0] === '0'){
            floatChart ='0'+Math.round(Number(floatChart) / 100);
        }else{
            floatChart =''+Math.round(Number(floatChart) / 100);
        }
    }

    // Итоговый результат
    let resultString = '';

    let symNum = 1;
    for (let i = numText.length; i >= 1 ; i--){
        if (symNum % 3 == 0 && symNum != numText.length){
            resultString = ` ${numText[i - 1]}` + resultString;
        }else{
            resultString = `${numText[i - 1]}` + resultString;
        }
        symNum++;
    }

    if (floatChart.length > 0){
        resultString = `${resultString}.${floatChart}` 
    }
    
    return resultString;
}

export default  numberNormalize;