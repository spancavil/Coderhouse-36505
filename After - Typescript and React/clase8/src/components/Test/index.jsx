import React, { useEffect } from 'react'

const Test = ({setDisplayTest}) => {

    const handleClick = (evento) => {
        //React arma un evento "sintético"
        console.log(evento);
        //Evento nativo
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

    const handleKeyDown = (evento) => {
        console.log(evento.keyCode)
        if (evento.keyCode === 65 || evento.keyCode === 69 || evento.keyCode === 73 || evento.keyCode === 79 || evento.keyCode === 85) {
            console.log("Prevenimos el comportamiento por defaul");
            evento.preventDefault()
        }
        console.log("No prevenimos el comportamiento por default");
    }

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
            <input onKeyDown= {handleKeyDown} placeholder='Máscara de input'/>
        </div>
    )
}

export default Test