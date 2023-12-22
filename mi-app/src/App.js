import './App.css';
import {Testimonio} from './componentes/Testimonio.jsx';//Sin llaves si es default la exportacion, sino con {}
function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Estos son las imagenes.</h1>
        <Testimonio/>
      </div>
    </div>
  );
}
export default App;