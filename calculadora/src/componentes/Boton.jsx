import '../style/Boton.css';

const Boton = (props) => {
    const esOperador = valor => isNaN(valor) && (valor !== '.') && (valor !== '=');
    return(
        <div 
            className={`boton-contenedor ${esOperador(props.children)? "operador" : null}`.trimEnd()}>
            {props.children}
        </div>
    );
}
export default Boton; 