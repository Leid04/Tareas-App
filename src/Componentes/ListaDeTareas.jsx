import TareaFormu from "./TareaFormu";
import '../estilos/ListaDeTareas.css';
import { useState } from "react";
import Tarea from "./Tarea";

export default function ListaDeTareas() {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (tarea) => {
    if(tarea.texto.trim()){//Si no esta en blanco.
      tarea.texto = tarea.texto.trim();//Quitar espacios.
      const tareasActualizadas = [tarea, ...tareas];//La tarea nueva al principio y las anteriores.
      setTareas(tareasActualizadas);//Actualizamos el array de tareas.
    } 
  };
  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map(tarea => {
      if(tarea.id === id){
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };

  return (
    <>
      <TareaFormu onSubmit={agregarTarea} />
      <div className="tareas-lista-contenedor">
        {
          tareas.map((tarea) =>
            <Tarea
              key={tarea.id}//Para que sepa el orden al actualizarlos.
              id={tarea.id}//Para poder luego acceder porque a key no se puede acceder.
              texto={tarea.texto}
              completada={tarea.completada}
              completarTarea={completarTarea}
              eliminarTarea={eliminarTarea}
            />
          )
        }
      </div>
    </>
  );
}