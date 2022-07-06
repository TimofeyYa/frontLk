import React from 'react'

function PrisesPageContent(){
    return(
        <section className="prises">
           <div className="whiteBlock prises__content">
                <div className="staticTable">
                    <div className="staticTable__row staticTable__rowHeader" style={{"grid-template-columns": "repeat(3,1fr)"}}>
                        <div className="staticTable__rowItem">
                            <h4>Наименование</h4>
                        </div>

                        <div className="staticTable__rowItem">
                            <h4>Ед. Изм</h4>
                        </div>

                        <div className="staticTable__rowItem">
                            <h4>Тариф</h4>
                        </div>
                    </div>
                    
                    <div className="staticTable__row">
                        <div className="staticTable__rowItem">
                            <h5>ПЛАТФ_ВС ОБЩ</h5>
                        </div>

                        <div className="staticTable__rowItem">
                            <h5>1 pCPU</h5>
                        </div>

                        <div className="staticTable__rowItem">
                            <h4>1 800,00</h4>
                        </div>
                    </div>
                </div>
           </div>
        </section>
    )
}

export default PrisesPageContent;