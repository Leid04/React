import logo from '../img/tarea.jpg';

export default function Logo(){
    return(
      <div className="contenedor-logo">
        <img 
          src={logo}
          alt="Dalas" 
          className="logo" 
        />
      </div>
    );
}