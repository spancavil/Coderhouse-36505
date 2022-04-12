import React from 'react'

const Button = ({color = "black", letter = "white"}) => {
  return (
    <button style={{backgroundColor: color, color: letter}}>Boton negro por defecto</button>
  )
}

export default Button