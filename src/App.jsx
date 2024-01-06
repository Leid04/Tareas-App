import '../src/estilos/App.css';
import ListaDeTareas from './Componentes/ListaDeTareas.jsx';
import Logo from './Componentes/Logo.jsx';

export default function App() {
  return (
    <div className='Tareas'>
      <Logo />
      <div className="tareas-lista-principal">
        <h1>Mis tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}