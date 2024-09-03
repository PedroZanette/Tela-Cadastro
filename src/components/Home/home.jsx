import * as React from 'react';
import FotoLogin from "../../assets/foguete.svg";
import { FcGoogle } from "react-icons/fc";
import '../../App.css';
import '../Home/home.css';


const Home = () => {

    return (
        <>
            <div className="home">
                <div className="card-home">
                    <h1 className="titulo-home">Iniciação Científica</h1>
                    <p className='p-home'>Grupo de Iniciação Científica de Florianópolis, Santa Catarina, propondo ferramentas para análises em Acústica de forma acessível.</p>
                    <button className='btn-saibaMais'> Saiba Mais ➤</button>
                </div>
                <div className="divFoto">
                    <img src={FotoLogin} alt="foto-login" className="foto-login" />
                </div>
            </div>
        </>
    )


}

export default Home;