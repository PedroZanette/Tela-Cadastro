import * as React from 'react';
import '../../App.css';
import '../AI/trafficAi.css';


const AI = () => {

    return (
        <>
            <div className="ai">
                    <div className='ai-screen'>
                    <h1 className='Titulo-Ai'>Inteligência  Artificial</h1>
                        <div className="ai-screen-content">
                            <div className="ai-screen-video">
                                <p>Arraste e solte o vídeo aqui! ou clique abaixo</p>
                                <button className='btn-enviar'>Enviar</button>
                            </div>
                        </div>
                    </div>
                    <div className="dashbord">
                        <h1 className='Titulo-Dashboard'>Dashboard</h1>
                        <div className="dashbord-info">
                            <h1 className='titulo-info'>Info</h1>
                        </div>
                    </div>
             
            </div>
        </>
    )


}



export default AI; 