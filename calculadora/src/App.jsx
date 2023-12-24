import React from 'react';
import './App.css';
import logo from './img/calculadora.jpg';
import Boton from './componentes/Boton.jsx';
import Pantalla from './componentes/Pantalla.jsx';
import BotonBorrar from './componentes/BotonBorrar.jsx';
import { useState } from "react";//Importar hooks

function App() {
  const [input, setInput] = useState('');
  const getInput = (val) => {
    setInput(input + val);
  }

  return (
    <div className="App">
      <div className="contenedor-logo">
        <img 
          src={logo} 
          className='logo'
          alt="Logo calculadora" />
      </div>
      <div className="calculadora">
        <div className="pantalla">
          <Pantalla input={input} />
          </div>
        <div className="fila">
          <Boton manejarClick={getInput}>1</Boton>
          <Boton manejarClick={getInput}>2</Boton>
          <Boton manejarClick={getInput}>3</Boton>
          <Boton manejarClick={getInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={getInput}>4</Boton>
          <Boton manejarClick={getInput}>5</Boton>
          <Boton manejarClick={getInput}>6</Boton>
          <Boton manejarClick={getInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={getInput}>7</Boton>
          <Boton manejarClick={getInput}>8</Boton>
          <Boton manejarClick={getInput}>9</Boton>
          <Boton manejarClick={getInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={getInput}>=</Boton>
          <Boton manejarClick={getInput}>0</Boton>
          <Boton manejarClick={getInput}>.</Boton>
          <Boton manejarClick={getInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonBorrar manejarClick={getInput}>C</BotonBorrar>
        </div>
      </div>
    </div>
  );
}
export default App;