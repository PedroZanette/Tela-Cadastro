import * as React from 'react';
import '../../App.css';
import '../Calculator/calculator.css';


const Calculator = () => {

    return (
        <>
            <div className="calculator">
                <div className="cardCalculator">
                    <h1 className="titulo-calculator">Calculadora</h1>
                    <div className="card-calculator">
                        <div className="models">
                            <h2 className='Titulo-itens'>Parâmetros</h2>
                            <div className='models-selection'>
                            <div className='iten-1'>
                                <p>Modelo</p>
                                </div>
                                <select className="select">
                                    <option value="valor1" selected>Hanc</option>
                                    <option value="valor2" >Johnson</option>
                                    <option value="valor3">Galloway</option>
                                    <option value="valor3">Burgess</option>
                                    <option value="valor3">Griffiths</option>
                                    <option value="valor3">Fagotti</option>
                                    <option value="valor3">Bolt</option>
                                    <option value="valor3">CSTB</option>
                                </select>
                            </div>
                            <div className='iten-2'>
                                <p>Qtd. Veículos</p>
                                <input className='input-calculator' type="number" />
                            </div>
                            <div className='iten-3'>
                                <p>Distância entre o ponto de observação e o centro da pista (m)</p>
                                <input className='input-calculator' type="number" />
                            </div>
                        </div>
                        <div className="result">
                            <h2 className='Titulo-itens'>Resultado</h2>
                            <div className='iten-4'>
                            <p>L50 (dB)</p>
                            <input className='input-calculator' type="number" readOnly/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )


}



export default Calculator; 