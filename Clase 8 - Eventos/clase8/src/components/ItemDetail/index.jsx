import React from 'react';
import ItemCount from '../ItemCount';

const ItemDetail = ({personaje}) => {

    const [quantity, setQuantity] = React.useState(0)

    const handleAdd = (quantity) => {
        console.log(quantity);
        setQuantity(quantity);
    }

    const handleTerminate = () => {
        console.log("Terminó la compra")
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            width: '90%',
        }}>
            <img 
            src={personaje.image}
            style ={{
                width: '400px',
            }}
            alt="personaje-img"
            />
            <div>
                <h2>Name: {personaje.name}</h2>
                <h2>Species: {personaje.species}</h2>
                {quantity === 0 ? 
                    <ItemCount stock={10} onAdd={handleAdd}/> 
                    :
                    <button className="btn btn-primary" onClick={handleTerminate}>Finalizar compra</button>     
                }
            </div>
        </div>
    )
}

export default ItemDetail