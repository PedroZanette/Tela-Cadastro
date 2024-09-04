import * as React from 'react';
import { useState } from 'react';
import './App.css';
import Cadastro from './components/Cadastro/cadastro';
import Perfil from './components/Perfil/perfil';
import Login from './components/Login/login';
import Home from './components/Home/home';
import AI from './components/AI/trafficAi';
import Calculator from './components/Calculator/calculator';
import { Footer } from './components/Footer/footer';
import RecPassword from './components/RecPassword/recPassword';


/*Eu não aguento mais*/
function App() {

  const [paginaAtual, setPaginaAtual] = useState('Home');

  const renderPagina = () => {
    switch (paginaAtual) {
      case 'Home':
        return <Home/>;
      case 'Cadastro':
        return <Cadastro />;
      case 'Login':
        return <Login />;
      case 'Perfil':
        return <Perfil />;
      case 'Calculator':
        return<Calculator />;
      case 'AI':
        return <AI />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <nav>
        <button onClick={() => setPaginaAtual('Home')}>Home</button>
        <button onClick={() => setPaginaAtual('Cadastro')}>Cadastro</button>
        <button onClick={() => setPaginaAtual('Login')}>Login</button>
        <button onClick={() => setPaginaAtual('Perfil')}>Perfil</button>
        <button onClick={() => setPaginaAtual('Calculator')}>Caluladora</button>
        <button onClick={() => setPaginaAtual('AI')}>Inteligência Artificial</button>
      </nav>
      {renderPagina()}
      <Footer />
    </>
  )
}

export default App
