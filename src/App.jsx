import * as React from 'react';
import { useState } from 'react';
import './App.css';
import Cadastro from './components/Cadastro/cadastro';
import Perfil from './components/Perfil/perfil';
import Login from './components/Login/login';
import { Footer } from './components/Footer/footer';


function App() {

  const [paginaAtual, setPaginaAtual] = useState('Home');

  const renderPagina = () => {
    switch (paginaAtual) {
      case 'Cadastro':
      return <Cadastro />;
      case 'Login':
      return <Login />;
      case 'Perfil':
      return <Perfil />;
      default:
      return <Cadastro />;
    }
  };

  return (
    <>
      <nav>
        <button onClick={() => setPaginaAtual('Cadastro')}>Cadastro</button>
        <button onClick={() => setPaginaAtual('Login')}>Login</button>
        <button onClick={() => setPaginaAtual('Perfil')}>Perfil</button>
      </nav>
      {renderPagina()}
      <Footer />
    </>
  )
}

export default App
