import React, { useState } from 'react'; // Importa React y useState desde la biblioteca React
import '../stylesheets/TareaFormulario.css'; // Importa un archivo de hojas de estilo
import { v4 as uuidv4 } from 'uuid'; // Importa la función v4 de la biblioteca uuid con un alias uuidv4

function TareaFormulario(props) {
  // Define un componente de formulario llamado TareaFormulario y recibe props como argumento

  const [input, setInput] = useState(''); // Crea un estado local llamado "input" con un valor inicial vacío

  const manejarCambio = e => {
    // Define una función llamada "manejarCambio" que se ejecuta cuando cambia el contenido del input
    setInput(e.target.value); // Actualiza el estado "input" con el valor del input del formulario
  }

  const manejarEnvio = e => {
    // Define una función llamada "manejarEnvio" que se ejecuta cuando se envía el formulario
    e.preventDefault(); // Previene el comportamiento predeterminado de envío del formulario

    const tareaNueva = {
      id: uuidv4(), // Genera un identificador único utilizando uuidv4
      texto: input, // Asigna el contenido del estado "input" a la propiedad "texto"
      completada: false // Establece la propiedad "completada" como falsa
    }

    props.onSubmit(tareaNueva); // Llama a la función "onSubmit" pasada como prop y le pasa la nueva tarea

  }

  return (
    <form 
      className='tarea-formulario' // Asigna una clase CSS al formulario

      // El codigo de abajo Define la función "manejarEnvio" como manejador del evento onSubmit del formulario
      onSubmit={manejarEnvio}>  
      <input 
        className='tarea-input' // Asigna una clase CSS al input
        type='text'
        placeholder='Escribe una Tarea'
        name='texto'
        onChange={manejarCambio} // Define la función "manejarCambio" como manejador del evento onChange del input
      />
      <button className='tarea-boton'>
        Agregar Tarea
      </button>
    </form>
  );
}

export default TareaFormulario; // Exporta el componente TareaFormulario para que pueda ser utilizado en otros lugares de la aplicación
