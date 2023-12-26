import TareaFormu from "./TareaFormu";
import '../estilos/ListaDeTareas.css'
import { useState } from "react";
import Tarea from "./Tarea";

export default function ListaDeTareas(){

    const [tareas, setTareas] = useState([]);
    const agregarTarea = (tarea) => {
        console.log(tarea);
    }   
    
    return(//<></> son los fragmentos
        <>
            <TareaFormu onSubmit={agregarTarea} />
            <div className="tareas-lista-contenedor">
                {
                    tareas.map((tarea) =>
                        <Tarea 
                            texto={tarea.texto}
                            completada={tarea.completada}
                        />
                    ) 
                }
            </div>
        </>
    );
}