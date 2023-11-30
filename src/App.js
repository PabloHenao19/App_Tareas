import './App.css'; // Importa un archivo de hojas de estilo para el componente App
import logopablo from './imagenes/logo-pablo.png'; // Importa una imagen llamada logopablo desde el directorio 'imagenes'
import ListaDeTareas from './componentes/ListaDeTareas'; // Importa el componente ListaDeTareas desde el archivo './componentes/ListaDeTareas'

function App() {
  return (
    <div className="App"> 
      <div className='logo-pablo-contenedor'>
        <img src={logopablo} 
        // El codigo de abajo Muestra la imagen logopablo con la clase CSS 'logo-pablo'
        className='logo-pablo' /> 
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1> 
        <ListaDeTareas /> 
      </div>
    </div>
  );
}

export default App; // Exporta el componente App para que pueda ser utilizado en otros lugares de la aplicación

