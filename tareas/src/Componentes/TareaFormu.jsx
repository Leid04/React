import '../estilos/TareaFormu.css';

const TareaFormu = ({ props }) => {
    return(
        <form action="" className="tarea-formulario">
            <input 
                type="text"
                className="tarea-input" 
                placeholder="Escribe la tarea:"
                name="texto"
            />
            <button className="tarea-boton">Agregar tareas</button>
        </form>
    );
}
export default TareaFormu;