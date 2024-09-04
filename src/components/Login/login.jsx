import * as React from 'react';
import FotoLogin from "../../assets/foguete.svg";
import { FcGoogle } from "react-icons/fc";
import '../../App.css';
import '../Login/login.css';


const Login = () => {

    return (
        <>
            <div className="login">
                <div className="divFoto">
                    <img src={FotoLogin} alt="foto-login" className="foto-login" />
                </div>
                <div className="cardLogin">
                    <h1 className="titulo">Login</h1>
                    <div className="card-login">
                        <input type="text" placeholder="Usuário ou Email" /><br /><br />
                        
                        <input type="password" placeholder="Senha" /><br /><br />
                
                        <button className="btn-1">Login</button> 
                        <button className="btn-2">Cadastrar</button> <br /><br />
                        <a href="RecPassword">Esqueceu a senha?</a><br /> <br />
                        <FcGoogle className="google"/>
                    </div>
                </div>

            </div>
        </>
    )


}

export default Login