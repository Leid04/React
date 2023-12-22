import './App.css';
import {Testimonio} from './componentes/Testimonio.jsx';//Sin llaves si es default la exportacion, sino con {}
import datosTestimonios from './datos/datosTestimonios.js';
function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Estos son las imagenes.</h1>
        {/* Mapeo de datos para crear componentes Testimonio */}
        {datosTestimonios.map((testimonio, index) => (
          <Testimonio key={index} {...testimonio} />
        ))}
      </div>
    </div>
  );
}
export default App;