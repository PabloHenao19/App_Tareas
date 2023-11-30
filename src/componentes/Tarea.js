import React from 'react'; // Importa React desde la biblioteca React
import '../stylesheets/Tarea.css'; // Importa un archivo de hojas de estilo
import { AiOutlineCloseCircle } from "react-icons/ai"; // Importa el icono AiOutlineCloseCircle de la biblioteca react-icons/ai

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  // Define un componente de Tarea que recibe ciertas propiedades como argumentos

  return (
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
      

      <div 
        className='tarea-texto' // Asigna una clase CSS al contenedor de texto de la tarea
        // El codigo de abajo Define una función que se ejecuta al hacer clic en el texto de la tarea
        onClick={() => completarTarea(id)}> 
        {texto} 
      </div>
      <div 
        className='tarea-contenedor-iconos' // Asigna una clase CSS al contenedor de iconos de la tarea
        // El codigo de abajo Define una función que se ejecuta al hacer clic en el contenedor de iconos
        onClick={() => eliminarTarea(id)}> 
        <AiOutlineCloseCircle className='tarea-icono' /> 
      </div>
    </div>
  );    
}

export default Tarea; // Exporta el componente Tarea para que pueda ser utilizado en otros lugares de la aplicación
