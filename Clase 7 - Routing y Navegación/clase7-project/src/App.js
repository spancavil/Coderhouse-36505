import './App.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer';

function App() {
  return (
    <>
      <NavBar/>
      {/* <ItemListContainer greeting={"Bienvenidos a nuestra after app"}/> */}
      <ItemDetailContainer/>
    </>
    );
}

export default App;
