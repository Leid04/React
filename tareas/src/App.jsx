import logoImagen from './img/tareas.jpg';

function App() {
  return (
    <div className='Tareas'>
      <div className="contenedor-logo">
        <img 
          src={logoImagen}
          alt="" 
          className="logo" 
        />
      </div>
    </div>
  );
}

export default App;
