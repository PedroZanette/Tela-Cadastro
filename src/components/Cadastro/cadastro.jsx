import * as React from 'react';
import FotoCadastro from "../../assets/foto-cadastro.png";
import { FcGoogle } from "react-icons/fc";
import '../../App.css';
import '../Cadastro/cadastro.css';


const Cadastro = () => {

    return (
        <>
            <div className="cadastro">
                <div className="divFoto">
                    <img src={FotoCadastro} alt="foto-cadastro" className="foto-cadastro" />
                </div>
                <div className="cardCadastro">
                    <h1 className="titulo">Cadastrar</h1>
                    <div className="card-cadastro">
                        <input type="text" placeholder="Usuário" /><br /><br />
                        <input type="email" placeholder="Email" /><br /><br />
                        <input type="password" placeholder="Senha" /><br /><br />
                        <input type="password" placeholder="Repetir Senha" /><br /><br />
                        <button className="btn-1">Cadastrar</button> 
                        <button className="btn-2">Login</button> <br />
                        <FcGoogle className="google"/>
                    </div>
                </div>

            </div>
        </>
    )


}

export default Cadastro