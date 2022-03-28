import React, { useState } from 'react';
import './styles.css';

const ItemCount = ({stock, onAdd}) => {

    const [quantity, setQuantity] = useState(1);

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    const handleAdd = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    }

    return (
        <div className='container'>
            <h2>Producto X</h2>
            <div className='buttons'>
                <button onClick={handleDecrement} type="button" className="btn btn-danger btn-sm">-</button>
                <span>{quantity}</span>
                <button onClick={handleAdd} type="button" className="btn btn-primary btn-sm">+</button>
            </div>
            <button onClick={()=> onAdd(quantity) } type="button" className="btn btn-primary btn-sm">Add to cart</button>
        </div>
    )
}

export default ItemCount