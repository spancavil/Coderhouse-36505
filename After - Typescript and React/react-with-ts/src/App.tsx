import { useState } from 'react';
import ItemCount from './components/ItemCount';
import Modal from './components/Modal';
import ItemListContainer from './containers/ItemListContainer';

function App() {
  const [modal, setModal] = useState<boolean>(true)

  const onAdd = (quantity: number) => {
    console.log("Productos agregados al cart: ", quantity)
  }

  return (
    <div className="App">

      <ItemCount stock = {13} onAdd = {onAdd} initial={3}/>
      {modal && <Modal onClose={setModal} style={{
        width: '200px',
        height: '400px',
        boxShadow: '10px 10px 17px -7px rgba(0,0,0,0.75)',
        color: 'black',
        backgroundColor: 'white',
      }} >
        <h2>Contenido del modal</h2>
      </Modal>
      }

      { <ItemListContainer message='Hola' count={10} /> }
    </div>
  );
}

export default App;
