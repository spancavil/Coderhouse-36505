import React, { useState } from 'react';
import styles from './styles.module.scss';
import { db } from '../../Firebase/config';
import { addDoc, collection, doc, getDoc, writeBatch } from 'firebase/firestore';

const Checkout = ({ handleClose, cart, total }) => {

    const [nombre, setNombre] = useState("");
    const [direccion, setDireccion] = useState("")

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("Se hizo el submit");
        console.log(nombre, direccion);
        if (nombre === "" || direccion === "") {
            return
        }
        const orderGenerada = {
            buyer: {
                nombre: nombre,
                direccion: direccion
            },
            items: cart
            ,
            total: total,
            createdAt: new Date().toLocaleString()
        }

        //Primer paso: abrir un batch
        const batch = writeBatch(db)//ver en qué level colocarlo

        //Array auxiliar que me define si hay productos fuera de stock
        const outOfStock = []

        //Chequear el stock del producto en nuestra db y restarlo a la cantidad, si corresponde
        cart.forEach((prod) => {
            getDoc(doc(db, 'productos', prod.id))
            .then((documentSnapshot) => {
                if (documentSnapshot.data().stock >= prod.quantity) {
                    batch.update(doc(db, 'productos', documentSnapshot.id), {
                        stock: documentSnapshot.data().stock - prod.quantity
                    })
                } else {
                    outOfStock.push({ id: documentSnapshot.id, ...documentSnapshot.data() })
                }
                console.log(outOfStock);
        
                if (outOfStock.length === 0) {
                    addDoc(collection(db, 'orders'), orderGenerada).then(({ id }) => {
                        batch.commit().then(() => {
                            alert("Se genero la order con id: " + id)
                        })
                    }).catch((err) => {
                        console.log(`Error: ${err.message}`);
                    })
                } else {
                    let mensaje = ''
                    for (const producto of outOfStock) {
                        mensaje += `${producto.name} `
                    }
                    alert(`Productos fuera de stock: ${mensaje}`)
                }
            })
        })


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