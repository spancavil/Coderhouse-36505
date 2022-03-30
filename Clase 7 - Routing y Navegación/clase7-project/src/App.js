import './App.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path = '/' element = {<ItemListContainer/>}/>
        <Route path = '/category/:id' element = {<ItemListContainer/>} />
        <Route path = '/item/:id' element = {<ItemDetailContainer/>} />
      {/* <ItemListContainer greeting={"Bienvenidos a nuestra after app"}/> */}
      {/* <ItemDetailContainer/> */}
      </Routes>
    </BrowserRouter>
    );
}

export default App;
