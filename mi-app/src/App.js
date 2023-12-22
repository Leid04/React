import './App.css';
import {Testimonio} from './componentes/Testimonio.jsx';//Sin llaves si es default la exportacion, sino con {}
function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Estos son las imagenes.</h1>
        <Testimonio 
          nombre = 'Arbol'
          pais = 'Ucrania'
          imagen = 'imagen1'
          cargo = 'Dar el oxigeno'
          empresa = 'Mundo'
          testimonio = 'Hola doy oxigeno para ti'/>
        <Testimonio 
          nombre = 'Tierra'
          pais = 'Universo'
          imagen = 'imagen2'
          cargo = 'Soporta humanos'
          empresa = 'Sistema solar'
          testimonio = 'El lugar que alberga la vida'/>
      </div>
    </div>
  );
}
export default App;