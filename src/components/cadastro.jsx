import React from "react";
import FotoCadastro from "../assets/foto-cadastro.png";
import google from "../assets/google.png";
import '../App.css';


const Cadastro = () => {

    return (
        <>
            
                <h1 className="titulo">Cadastrar</h1>
                <div className="card">
                    <input type="text" placeholder="Usuário" /><br /><br />
                    <input type="email" placeholder="Email" /><br /><br />
                    <input type="password" placeholder="Senha" /><br /><br />
                    <input type="password" placeholder="Repitir Senha" /><br /><br />
                    <button>Cadastrar</button> &nbsp;
                    <button>Login</button> <br />
                    <img src={google} alt="google" className="google" />
                </div>
                <div className="Foto">
                    <img src={FotoCadastro} alt="foto-cadastro" className="foto-cadastro" />
                </div>
                <p>@2024  Iniciação Científica. Escola SESI Florianópolis</p>
        </>
    )


}

export default Cadastro