import * as React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Cadastro from './components/Cadastro/cadastro';
import Perfil from './components/Perfil/perfil';
import Login from './components/Login/login';
import Home from './components/Home/home';
import AI from './components/AI/trafficAi';
import Calculator from './components/Calculator/calculator';
import Navbar from './components/Navbar/navbar';
import { Footer } from './components/Footer/footer';
import RecPassword from './components/RecPassword/recPassword';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/ai" element={<AI />} />
        <Route path="/recuperar senha" element={<RecPassword />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App

