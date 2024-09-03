import * as React from 'react';
import { IoPersonCircleOutline } from "react-icons/io5";
import '../../App.css';
import '../Calculator/calculator.css';


const Calculator = () => {

    return (
        <>
         <div className="perfil">
                <div className="cardPerfil">
                <h1 className="titulo">Perfil</h1>
                    <div className="card-Perfil">
                        <h1 className='info'>Nome</h1>
                        <input type="text" placeholder="Nome" /><br /><br />
                        <h1 className='info'>Senha</h1>
                        <input type="password" placeholder="Senha" /><br /><br />
                        <h1 className='info'>Email</h1>
                        <input type="email" placeholder="Email" /><br /><br />
                        <button className="btn-1Salvar">Salvar</button> 
                        <button className="btn-2Sair">Sair</button> <br />
                    </div>
                </div>
                <div className="divFotoPerfil">
                <IoPersonCircleOutline className='icone' />


                </div>
            </div>
        </>
    )


}



export default Calculator; 