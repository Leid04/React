import '../style/BotonBorrar.css';

const BotonBorrar = (props) => {
    return(
        <div className="botonBorrar">
            {props.children}
        </div>
    );
}
export default BotonBorrar;