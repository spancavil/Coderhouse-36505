import React, {useState} from 'react'

const ComponenteStateful = ({valorInicial}) => {

    const [estado, setEstado] = useState(valorInicial);

    const handleState = () => {
        if (estado === "estado inicial") {
            setEstado("estado cambiado")
        } else {
            setEstado("estado inicial")
        }
    }

    return (
        <>
            <button onClick={handleState} >Cambio de estado</button>
            <span>Estado: {estado}</span>
        </>
    )
}

export default ComponenteStateful;