import React, { useContext } from 'react';
import { Shop } from '../../context/ShopProvider';
import styles from './styles.module.scss';

const CartItem = ({ item }) => {

    const {removeItem} = useContext(Shop);
    return (
        <div className={styles.cartItem}>
            <img className='imagen' src={item.image} alt="cart-img" width={'100px'} />
            <h2>Cantidad: {item.quantity}</h2>
            <h2 style={{width: "20%"}}>{item.name}</h2>
            <h2>${item.price}</h2>
            <button className='btn btn-large btn-danger' onClick={()=> removeItem(item.id)}>X</button>
        </div>
    )
}

export default CartItem;