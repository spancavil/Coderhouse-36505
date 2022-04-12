import React, { useContext } from 'react';
import { Shop } from '../../context/ShopProvider';
import ItemCount from '../ItemCount';
import {useNavigate} from 'react-router-dom';

const ItemDetail = ({personaje}) => {

    const [quantity, setQuantity] = React.useState(0)

    const {addCart} = useContext(Shop);

    const navigate = useNavigate();

    const handleAdd = (quantity) => {
        console.log(quantity);
        setQuantity(quantity);
    }

    const handleTerminate = () => {
        console.log("Terminó la compra")
        addCart(personaje, quantity);
        navigate('/cart');
    }

    const handleBrowsing = () => {
        navigate('/')
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
                    <>
                        <button className="btn btn-primary m-3" onClick={handleTerminate}>Ir al carrito</button>
                        <button className='btn btn-primary' onClick={handleBrowsing}> Seguir navegando</button>     
                    </>
                }
            </div>
        </div>
    )
}

export default ItemDetail