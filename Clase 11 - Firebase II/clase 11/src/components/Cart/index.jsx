import React, { useContext, useEffect, useState } from 'react'
import { Shop } from '../../context/ShopProvider';
import CartItem from '../CartItem/CartItem';
import Checkout from '../Checkout';

const Cart = () => {

  const { cart, sumaTotal } = useContext(Shop)
  const [suma, setSuma] = useState();
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setSuma(sumaTotal())
  }, [sumaTotal])

  const handleCheckout = () => {
    setModal(true);
  }

  const handleClose = () => {
    setModal(false)
  }

  return (
    <div >
      {cart.map(item => <CartItem item={item} key={item.id} />)}
      <h3>Total: {suma}</h3>
      <button className='btn btn-primary m-2' onClick={handleCheckout}>Checkout</button>
      {modal && <Checkout
        handleClose={handleClose}
        cart={cart}
        total={suma}
      />}
    </div>
  )
}

export default Cart