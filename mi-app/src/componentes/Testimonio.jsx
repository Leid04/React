import React from 'react';

export const Testimonio = () => {//La función COMPONENTE reutilizable.
    return(//Devuelve la estructura.
        <div className="contenedor-testimonio">
            <img
                className="imagen-testimonio" 
                src={require("../imagenes/imagen1.jpg")}//Asi es como se insertan imagenes 
                alt="arbol"/>
            <div className="contenedor-texto-testimonio">
                <p className="nombre-testimonio">Arbol</p>
                <p className="cargo-testimonio">Dar el oxigeno</p>
                <p className="texto-testimonio">Este arbol es muy bonito bla bla bla</p>
            </div>
        </div>
    );
}
export default Testimonio;//Permitimos exportarlo para que alguien mas lo pueda importar.
//Si es de default no hay que poner las {} para importarlo.