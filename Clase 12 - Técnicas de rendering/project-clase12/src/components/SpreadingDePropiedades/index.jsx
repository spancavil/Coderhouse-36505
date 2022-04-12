import React from 'react';
import './styles.css'

const SpreadingDePropiedades = ({ condition }) => {

    const config = condition ? {
        className: "bigText",
        title: "Titulo cuando la condicion es verdadera"
    } : {
        className : "smallText",
        title: "Titulo cuando la condicion es false"
    }

    return (<h2 {...config}>
        Un mensajito de martes...
    </h2>)

}

export default SpreadingDePropiedades;