import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const compromissos = ['ler', 'estudar', 'almoçar', 'orar'];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Lista de Tarefas
        </h1>
        <p>
          { compromissos.map(tarefa => Task(tarefa)) }
        </p>
      </header>
    </div>
  );
}

export default App;
