import '../style/BotonBorrar.css';

const BotonBorrar = (props) => {
    return(
        <div 
            className="botonBorrar"
            onClick={props.manejarClick}>
            {props.children}
        </div>
    );
}
export default BotonBorrar;