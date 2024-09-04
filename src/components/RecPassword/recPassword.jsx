import * as React from 'react';
import FotoLogin from "../../assets/foguete.svg";
import { FcGoogle } from "react-icons/fc";
import '../../App.css';
import '../RecPassword/recPassword.css';



const RecPassword = () => {

    return (
        <>
            <div className="login">
                <div className="divFoto">
                    <img src={FotoLogin} alt="foto-login" className="foto-login" />
                </div>
                <div className="cardLogin">
                    <h1 className="titulo">Recueração de senha</h1>
                    <div className="card-login">
                        <input type="text" placeholder="Usuário ou Email" /><br /><br />
                        
                        <input type="password" placeholder="Senha" /><br /><br />
                
                        <button className="btn-1">Login</button> 
                        <button className="btn-2">Cadastrar</button> <br /><br />
                        <a href="../RecPassword/recpassword">Esqueceu a senha?</a><br /> <br />     
                    </div>
                </div>

            </div>
        </>
    )


}

export default RecPassword