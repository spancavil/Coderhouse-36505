import { useState } from 'react';
import Modal from './components/Modal';
import ItemListContainer from './containers/ItemListContainer';

function App() {
  const [modal, setModal] = useState<boolean>(true)
  return (
    <div className="App">

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

      <ItemListContainer message='Hola' count={20} />
    </div>
  );
}

export default App;
