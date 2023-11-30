import React, { useState } from "react"; // Importa React y useState desde la biblioteca React
import TareaFormulario from "./TareaFormulario"; // Importa el componente TareaFormulario desde el archivo './TareaFormulario'
import Tarea from './Tarea'; // Importa el componente Tarea desde el archivo './Tarea'
import '../stylesheets/ListaDeTareas.css'; // Importa un archivo de hojas de estilo

function ListaDeTareas (){

    const [tareas, setTareas] = useState([]); // Crea un estado local llamado "tareas" con un valor inicial vacío y una función para actualizarlo
    const agregarTarea = tarea => {
        if (tarea.texto.trim()) {
          tarea.texto = tarea.texto.trim();
          const tareasActualizadas = [tarea, ...tareas];
          setTareas(tareasActualizadas); // Agrega una nueva tarea a la lista de tareas
        }
      }
    
      const eliminarTarea = id => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasActualizadas); // Elimina una tarea de la lista de tareas
      }
    
      const completarTarea = id => {
        const tareasActualizadas = tareas.map(tarea => {
          if (tarea.id === id) {
            tarea.completada = !tarea.completada;
          }
          return tarea;
        });
        setTareas(tareasActualizadas); // Marca una tarea como completada o no completada
      }
    return (

// El codigo de abajo Renderiza el componente TareaFormulario y pasa la función "agregarTarea" como prop
        <>
      <TareaFormulario onSubmit={agregarTarea} /> 
      <div className='tareas-lista-contenedor'>
        {
          tareas.map((tarea) =>
            <Tarea
              key={tarea.id}
              id={tarea.id} 
              texto={tarea.texto}
              completada={tarea.completada}
              completarTarea={completarTarea}
              eliminarTarea={eliminarTarea} /> // Renderiza el componente Tarea para cada tarea en la lista y pasa las propiedades necesarias
          ) 
        }
      </div>
    </>
    );
}

export default ListaDeTareas; // Exporta el componente ListaDeTareas para que pueda ser utilizado en otros lugares de la aplicación
