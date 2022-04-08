import React, { useContext, useEffect, useState } from 'react'
import { Shop } from '../../context/ShopProvider';
import CartItem from '../CartItem/CartItem';

const Cart = () => {

  const {cart, sumaTotal} = useContext(Shop)
  const [suma, setSuma] = useState();

  useEffect(()=> {
    setSuma(sumaTotal())
  }, [sumaTotal])
  
  return (
    <div >
      {cart.map(item => <CartItem item = {item} key={item.id}/>)}
      <h3>Total: {suma}</h3>
    </div>
  )
}

export default Cart