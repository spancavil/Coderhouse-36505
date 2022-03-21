import './App.css';
import ComponenteA from './components/ComponenteA';
import ComponentWithChildren from './components/ComponentWithChildren';

function App() {

  const nombre = "Sebastián";

  return (
    <div>
      <h2>Hola!</h2>
      <ComponenteA firstName={nombre}/>
      <ComponentWithChildren title="Card numero 1">
        <h4>Descripcion de la card 1</h4>  
      </ComponentWithChildren>
      <ComponentWithChildren title = "Card numero 2">
        <p>Nostrud voluptate aute non enim reprehenderit sint aliquip sit incididunt fugiat consequat tempor sunt.</p>  
      </ComponentWithChildren>
    </div>
  );
}

export default App;
