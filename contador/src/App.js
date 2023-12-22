import './App.css';
import imagen from './imagenes/imagen1.jpg';
import Boton from './componentes/Boton.jsx';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {
  const [numClics, setNumClicks] = useState(0);

  const manejarClick = () => setNumClicks(numClics + 1);
  const reiniciarContador = () => setNumClicks(0);
  
  return (
    <div className="App">
      <div className="contenedor-logo">
        <img 
          src={imagen}
          alt="Logo" 
          className="img-logo" />
      </div>
      <div className="contenedor-principal">
        <Contador numClics={ numClics }/>
        <Boton 
          texto = 'Clic'
          esBotonClick= { true }
          manejarClick= { manejarClick }/>
        <Boton 
          texto = 'Reiniciar'
          esBotonClick= { false }
          manejarClick= { reiniciarContador }/>
      </div>
    </div>
  )
}

export default App
