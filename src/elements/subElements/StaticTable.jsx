import classNames from "classnames";
import React from "react";

function StaticTable(props){
    let columnsTemplate = ``;
    props.columns && props.columns.forEach((number)=>{
        columnsTemplate = columnsTemplate + ` ${number}fr`;
    }) 
    
    const [tableContent, setTableContent] = React.useState([]);
    const [tableDefaultContent, setTableDefaultContent] = React.useState([]);
    
    // Работа с сортировкой
    const [columnsSortType, setColumnsSortType] = React.useState([]);

    React.useEffect(()=>{
        // Это для сортировки
        const zeroArray = [];
        for (let i = 0; i < props.titles.length; i++)
        zeroArray.push(0);
        setColumnsSortType(zeroArray);
       
        // Перебираем передаваемый массив в объектов в объект объектов
        setTableDefaultContent([]);
        setTableContent([]);
        if (props.data[0]){
            let subTableContent = [];
            props.data.map((element)=>{
                let row = [];
                for (let key in element){
                    row.push(element[key]);
                }
                subTableContent.push(row);
            })
            setTableDefaultContent(subTableContent);
            setTableContent(subTableContent);
           
        }
    }, [props.data])

    function changeTypeSortColumn(columnIndex){
        const zeroArray = [];
        for (let i = 0; i < props.titles.length; i++)
        zeroArray.push(0);
        switch(columnsSortType[columnIndex]){
            case 0: zeroArray[columnIndex] = 1; break;
            case 1: zeroArray[columnIndex] = -1; break;
            case -1: zeroArray[columnIndex] = 0; break;
        }
        setColumnsSortType(zeroArray);
        sortTableByColumn(columnIndex,zeroArray[columnIndex]);
    }

    function sortTableByColumn(columnIndex, sortType){
        let sortTable = [...tableContent];
        switch(sortType){
            case 0: setTableContent(tableDefaultContent); break;
            case 1: {
                sortTableByMax(sortTable, columnIndex);
                setTableContent(sortTable);
                break;
            }
            case -1: {
                sortTableByMin(sortTable, columnIndex);
                setTableContent(sortTable);
                break;
            }
        }
    }

    function sortTableByMin(sortTable, columnIndex){
        let swapArray = [];
        let isNumberSort = !Number.isNaN(Number(Number(sortTable[0][columnIndex])));
        let flag = 1;
        while (flag === 1){
            flag = 0;
            for (let i =0; i < sortTable.length - 1; i++){
                if (isNumberSort){
                    if (Number(sortTable[i+1][columnIndex]) < Number(sortTable[i][columnIndex])){
                        swapArray = [...sortTable[i]];
                        sortTable[i] = [...sortTable[i+1]];
                        sortTable[i+1] = [...swapArray];
                        flag = 1;
                    }
                }else{
                    if (sortTable[i+1][columnIndex] > sortTable[i][columnIndex]){
                        swapArray = [...sortTable[i]];
                        sortTable[i] = [...sortTable[i+1]];
                        sortTable[i+1] = [...swapArray];
                        flag = 1;
                    }
                }
            }
        }
    }

    function sortTableByMax(sortTable, columnIndex){
        let swapArray = [];
        let isNumberSort = !Number.isNaN(Number(Number(sortTable[0][columnIndex])));
        let flag = 1;
        while (flag === 1){
            flag = 0;
            for (let i =0; i < sortTable.length - 1; i++){
                if (isNumberSort){
                    if (Number(sortTable[i+1][columnIndex]) > Number(sortTable[i][columnIndex])){
                        swapArray = [...sortTable[i]];
                        sortTable[i] = [...sortTable[i+1]];
                        sortTable[i+1] = [...swapArray];
                        flag = 1;
                    }
                }else{
                    if (sortTable[i+1][columnIndex] < sortTable[i][columnIndex]){
                        swapArray = [...sortTable[i]];
                        sortTable[i] = [...sortTable[i+1]];
                        sortTable[i+1] = [...swapArray];
                        flag = 1;
                    }
                }
            }
        }
    }
    
    return(
        <div className="staticTableWrap">
            <div className="staticTable">
                <div className="staticTable__row staticTable__rowHeader" style={{"gridTemplateColumns": columnsTemplate}}>
                    {props.titles && props.titles.map((title, index) => 
                        <div onClick={()=>changeTypeSortColumn(index)} key={`staticTable_${title}_${index}`} className="staticTable__rowItem">
                            <h4 className="unselectable">{title}</h4>

                            <div className=
                                {classNames("staticTable__rowItemPic",
                                    {"hidden":columnsSortType[index] == 0,
                                    "staticTable__rowItemPic--rotate":columnsSortType[index] == -1})
                                }
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="8" viewBox="0 0 11 8" fill="none">
                                    <path d="M5.5 8L10.2631 0.5H0.73686L5.5 8Z" fill="#77ADEA"/>
                                </svg>
                            </div>
                        </div>    
                    )}
                </div>
                
                {tableContent && tableContent.map((row,indexRow) => {
                return(
                    <div key={`staticTableRow_${indexRow}`} className="staticTable__row" style={{"gridTemplateColumns": columnsTemplate}}>
                        {row.map((label, index)=> 
                            <div key={`staticTableItem_${index}_${label}_${indexRow}`} className="staticTable__rowItem">
                                <h5>{label}</h5>
                            </div>
                        )}
                    </div>
                )
                })}
            </div>
        </div>
    )
}

export default StaticTable;