import './App.css';
import InLine from './components/InLine';
import ReturnTemprano from './components/ReturnTemprano';

function App() {
  return (
    <div className="App">
      <ReturnTemprano condition={false}/>
      <InLine condition={true}/>
    </div>
  );
}

export default App;
