import React, { useContext, useEffect, useState } from 'react'
import CartIcon from '../../Assets/cartIcon';
import {useNavigate} from 'react-router-dom';
import { Shop } from '../../context/ShopProvider';

const CartWidget = () => {

  const navigate = useNavigate()
  const {conteoItems} = useContext(Shop);
  const [cantidadTotal, setCantidadTotal] = useState(0);

  useEffect(()=> {
    setCantidadTotal(conteoItems())
  }, [conteoItems])

  console.log(cantidadTotal);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <CartIcon onClick={()=> navigate('/cart')} style={{cursor: 'pointer'}}/>
      {cantidadTotal!==0 && <p style={{color: 'white'}}>{cantidadTotal}</p>}
    </div>
  )
}

export default CartWidget