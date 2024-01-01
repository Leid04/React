import logo from '../img/calculadora.jpg';

const Logo = () => {
    return(
      <div className="contenedor-logo">
        <img 
          src={logo} 
          className='logo'
          alt="Logo calculadora" />
      </div>
    );
}

export default Logo;