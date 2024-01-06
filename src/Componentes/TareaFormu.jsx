import '../estilos/TareaFormu.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';//Generar una clave unica.

export default function TareaFormu(props) {
    const [input, setInput] = useState('');
  
    const manejarCambio = (evento) => setInput(evento.target.value);
  
    const manerarEnvio = (e) => {
      e.preventDefault();

      const tareaNueva = {
        id: uuidv4(),//Generación de la indentificación única.
        texto: input,
        completada: false
      };
      props.onSubmit(tareaNueva);
    };
  
    return (
      <form
        action=""
        className="tarea-formulario"
        onSubmit={manerarEnvio}
      >
        <input
          type="text"
          className="tarea-input"
          placeholder="Escribe la tarea:"
          name="texto"
          onChange={manejarCambio}
        />
        <button className="tarea-boton">Agregar tareas</button>
      </form>
    );
  }