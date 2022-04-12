import React from 'react';
import './styles.css';

const InputConClase = ({condition = false}) => {
  return (
    <input placeholder='Ingrese algo' className={condition ? "claseA": "claseB"}></input>
  )
}

export default InputConClase