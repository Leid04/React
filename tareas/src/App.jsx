import '../src/estilos/App.css';
import Logo from './Componentes/Logo.jsx';
import Tarea from './Componentes/Tarea.jsx';

function App() {
  return (
    <div className='Tareas'>
      <Logo />
      <div className="tareas-lista-principal">
        <h1>Mis tareas</h1>
        <Tarea texto={'pringado'}/>
      </div>
    </div>
  );
}

export default App;
