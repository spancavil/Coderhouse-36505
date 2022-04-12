import React from 'react'
import CartIcon from '../../Assets/cartIcon';
import {useNavigate} from 'react-router-dom';

const CartWidget = () => {

  const navigate = useNavigate()
  return (
    <CartIcon onClick={()=> navigate('/cart')} style={{cursor: 'pointer'}}/>
  )
}

export default CartWidget