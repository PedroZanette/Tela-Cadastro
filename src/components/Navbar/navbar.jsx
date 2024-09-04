import React from 'react'
import '../../App.css';
import '../Navbar/navbar.css'
import { Link } from 'react-router-dom';



const NavBarAll = () => {
  return (
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cadastro">Cadastro</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/perfil">Perfil</Link></li>
          <li><Link to="/calculator">Caluladora</Link></li>
          <li><Link to="/ai">Inteligência Artificial</Link></li>
        </ul>
      </nav>
      );
}

      export default NavBarAll