import React, { useEffect } from 'react'

const Test = ({setDisplayTest}) => {

    const handleClick = (evento) => {
        //React arma un evento "sintético"
        console.log(evento);
        console.log(evento.nativeEvent);
    }

    useEffect(() => {

        //Función handleEsc
        const handleEsc = (event) => {
            if (event.keyCode === 27) {
                console.log('will close')
                setDisplayTest(false);
            }
        };

        //Agregamos un escuchador de eventos a la ventana principal
        window.addEventListener('keydown', handleEsc);

        //Función de saneamiento al desmontarse el componente
        return () => {
            console.log("Se va a desmontar el componente");
            window.removeEventListener('keydown', handleEsc);
        };
    }, [setDisplayTest])

    return (
        <div style={{
            width: '200px',
            height: '400px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'green',
        }}>
            <button onClick={handleClick}>Click on me</button>
        </div>
    )
}

export default Test