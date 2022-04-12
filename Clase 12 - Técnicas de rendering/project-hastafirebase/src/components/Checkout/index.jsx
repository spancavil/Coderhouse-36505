import React, { useState } from 'react';
import styles from './styles.module.scss';
import {db} from '../../Firebase/config';
import { addDoc, collection } from 'firebase/firestore';

const Checkout = ({ handleClose, cart, total }) => {

    const [nombre, setNombre] = useState("");
    const [direccion, setDireccion] = useState("")

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("Se hizo el submit");
        console.log(nombre, direccion);
        if (nombre === "" || direccion === ""){
            return
        }
        const order = {
            buyer: {
                nombre: nombre,
                direccion: direccion
            },
            items: cart
            ,
            total: total,
            createdAt: new Date().toLocaleString()
        }
        console.log(order);
        const orderCollection = collection(db, 'orders');
        addDoc(orderCollection, order).then(({id})=> alert(`Order generada con id ${id}`))
        
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