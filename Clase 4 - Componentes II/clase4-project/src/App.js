import { useState } from 'react';
import './App.css';
import ClickTracker from './components/ClickTracker';
import ComponenteStateful from './components/ComponenteStateful';

function App() {

  const [stateful, setStateful] = useState(false);
  const [clickTracker, setClickTracker] = useState(false);

  return (
    <div className="App">
      <button onClick={()=> setStateful(!stateful)}>Show/hide Stateful component</button>
      <button onClick={()=> setClickTracker(!clickTracker)}>Show/hide ClickTracker component</button>
      {stateful === true ? <ComponenteStateful valorInicial={"estado inicial"} /> : null}
      {clickTracker === true ? <ClickTracker/> : null }
    </div>
  );
}

export default App;
