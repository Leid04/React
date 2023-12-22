import '../styles/Testimonio.css';

export const Testimonio = (props) => {//La función COMPONENTE reutilizable.
    return(//Devuelve la estructura.
        <div className="contenedor-testimonio">
            <img
                className="imagen-testimonio" 
                src={require(`../imagenes/${props.imagen}.jpg`)}//Asi es como se insertan imagenes 
                alt="arbol" />
            <div className="contenedor-texto-testimonio">
                <strong>
                    <p className="nombre-testimonio">{props.nombre} en {props.pais}</p>
                </strong>
                <p className="cargo-testimonio">{props.cargo} en {props.empresa}</p>
                <i>
                    <p className="texto-testimonio">"{props.testimonio}"</p>
                </i>
            </div>
        </div>
    );
}
export default Testimonio;//Permitimos exportarlo para que alguien mas lo pueda importar.
//Si es de default no hay que poner las {} para importarlo.