import './App.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import NotFound from './components/NotFound';
import TestContainer from './containers/TestContainer';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path = '/' element = {<TestContainer/>}/>
        <Route path = '/category/:id' element = {<ItemListContainer/>} />
        <Route path = '/item/:id' element = {<ItemDetailContainer/>} />
        <Route path = '*' element = {<NotFound/>} />
      {/* <ItemListContainer greeting={"Bienvenidos a nuestra after app"}/> */}
      {/* <ItemDetailContainer/> */}
      </Routes>
    </BrowserRouter>
    );
}

export default App;
