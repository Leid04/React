import React from 'react';
import logo from './img/calculadora.jpg';
import './App.css';
import Boton from './componentes/Boton.jsx';

function App() {
  return (
    <div className="App">
      <div className="contenedor-logo">
        <img 
          src={logo} 
          className='logo'
          alt="Logo calculadora" />
      </div>
      <div className="calculadora">
        <div className="fila">
          <Boton>1</Boton>
          <Boton>+</Boton>
        </div>
        <div className="fila">a</div>
        <div className="fila">a</div>
        <div className="fila">a</div>
        <div className="fila">a</div>
      </div>
    </div>
  );
}

export default App;
