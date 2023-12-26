import '../src/estilos/App.css';
import Logo from './Componentes/Logo.jsx';
import TareaFormu from './Componentes/TareaFormu.jsx';

export default function App() {
  return (
    <div className='Tareas'>
      <Logo />
      <div className="tareas-lista-principal">
        <h1>Mis tareas</h1>
        <TareaFormu />
      </div>
    </div>
  );
}