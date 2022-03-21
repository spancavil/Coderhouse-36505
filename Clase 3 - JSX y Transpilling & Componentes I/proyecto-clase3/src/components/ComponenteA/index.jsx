import React from 'react';
import './styles.css';

const ComponenteA = ({firstName}) => {

    return (
        <>
            <h5>Contenido del componente A</h5>
            <h5>{firstName}</h5>
        </>
    )
}

export default ComponenteA