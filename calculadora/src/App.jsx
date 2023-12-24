import React from 'react';
import './App.css';
import logo from './img/calculadora.jpg';
import Boton from './componentes/Boton.jsx';
import Pantalla from './componentes/Pantalla.jsx';
import BotonBorrar from './componentes/BotonBorrar.jsx';

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
        <div className="pantalla"><Pantalla /></div>
        <div className="fila">
          <Boton>1</Boton>
          <Boton>2</Boton>
          <Boton>3</Boton>
          <Boton>+</Boton>
        </div>
        <div className="fila">
          <Boton>4</Boton>
          <Boton>5</Boton>
          <Boton>6</Boton>
          <Boton>-</Boton>
        </div>
        <div className="fila">
          <Boton>7</Boton>
          <Boton>8</Boton>
          <Boton>9</Boton>
          <Boton>*</Boton>
        </div>
        <div className="fila">
          <Boton>=</Boton>
          <Boton>0</Boton>
          <Boton>.</Boton>
          <Boton>/</Boton>
        </div>
        <div className="fila">
          <BotonBorrar>C</BotonBorrar>
        </div>
      </div>
    </div>
  );
}
export default App;