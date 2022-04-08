import React, { useState } from 'react';
import styles from './styles.module.scss'

const Checkout = ({ handleClose }) => {

    const [nombre, setNombre] = useState("");
    const [direccion, setDireccion] = useState("")

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("Se hizo el submit");
        console.log(nombre, direccion);
    }

    return (
        <div className={styles.modalContainer}>
            <div className={styles.modal}>
                <h2>Titulo de modal</h2>
                <button
                    className='btn btn-large btn-danger'
                    style={
                        { position: 'absolute', top: '20px', right: '20px' }
                    }
                    onClick={handleClose}
                >X
                </button>
                <form onSubmit={onSubmit}>
                    <input
                        placeholder='Nombre'
                        id="nombre"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                    <input
                        placeholder='Direccion'
                        id="direccion"
                        value={direccion}
                        onChange={e => setDireccion(e.target.value)}
                    />
                    <button type='submit' className='btn btn-primary'>Confirmar compra</button>
                </form>
            </div>
        </div>
    )
}

export default Checkout