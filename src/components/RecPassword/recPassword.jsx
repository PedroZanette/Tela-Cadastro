import * as React from 'react';
import FotoLogin from "../../assets/foguete.svg";
import '../../App.css';
import '../RecPassword/recPassword.css';
import { Link } from 'react-router-dom';



const RecPassword = () => {

    return (
        <>
            <div className="login">
                <div className="divFoto">
                    <img src={FotoLogin} alt="foto-login" className="foto-login" />
                </div>
                <div className="cardLogin">
                    <h1 className="titulo">Recuperar senha</h1>
                    <div className="card-login">
                        <input type="text" placeholder="Usuário ou Email" /><br /><br />

                        <input type="password" placeholder="Nova Senha" /><br /><br />
                        <Link to={"/login"}>
                            <button className="btn-1" >Recuperar</button>
                        </Link> <br /> <br />
                        <Link to={"/login"}>Voltar</Link><br /> <br />
                    </div>
                </div>

            </div>
        </>
    )


}

export default RecPassword