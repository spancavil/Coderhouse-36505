import './App.css';
import ClickTracker from './components/ClickTracker';
import ComponenteStateful from './components/ComponenteStateful';

function App() {
  return (
    <div className="App">
      <ComponenteStateful valorInicial={"estado inicial"} />
      <ClickTracker/>
    </div>
  );
}

export default App;
