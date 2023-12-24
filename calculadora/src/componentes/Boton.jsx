import '../style/Boton.css';

const Boton = (props) => {
    const esOperador = valor => isNaN(valor) && (valor !== '.') && (valor !== '=');
    return(
        <div 
            className={`boton-contenedor ${esOperador(props.children)? "operador" : null}`.trimEnd()}
            onClick={() =>props.manejarClick(props.children)}//() => para decir que tiene que ejecutar la funcion
            >
            {props.children}
        </div>
    );
}
export default Boton; 