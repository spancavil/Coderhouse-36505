import './App.css';
import Button from './components/Button';
import InLine from './components/InLine';
import InputConClase from './components/InputConClases';
import ReturnTemprano from './components/ReturnTemprano';
import SpreadingDePropiedades from './components/SpreadingDePropiedades';

function App() {
  return (
    <div className="App">
      <ReturnTemprano condition={false}/>
      <InLine condition={true}/>
      <Button color="red" letter='white'/>
      <InputConClase condition={true}/>
      <SpreadingDePropiedades condition={true}/>
    </div>
  );
}

export default App;
