import logo from '../img/tarea.jpg';
const Logo = () => {
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
export default Logo;