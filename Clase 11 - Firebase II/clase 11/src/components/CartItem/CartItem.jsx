import React from 'react';
import styles from './styles.module.scss';

const CartItem = ({ item }) => {
    return (
        <div className='cartItem'>
            <img className='imagen' src={item.img} alt="cart-img" width={'50px'} />
            <h2 style={{width: "20%"}}>{item.name}</h2>
            <h2>${item.price}</h2>
            <button className='btn btn-large btn-danger'>X</button>
        </div>
    )
}

export default CartItem;