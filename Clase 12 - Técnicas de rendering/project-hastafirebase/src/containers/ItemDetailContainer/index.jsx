import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../components/ItemDetail'
import { db } from '../../Firebase/config';
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {

    const [personaje, setPersonaje] = useState({})

    const { id } = useParams();

    useEffect(() => {

        (async () => {
            try {
                // const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
                // console.log(response);
                // const data = await response.json();
                // console.log(data);
                // setPersonaje(data);

                const docRef = doc(db, "productos", id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    console.log("Document data:", docSnap.data());
                    setPersonaje({id: docSnap.id, ...docSnap.data()})
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            } catch (error) {
                console.log(error);
            }
        })()

    }, [id])

    console.log(personaje);

    return (
        <div style={{
            width: '100%',
            height: '90vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        }}>
            <ItemDetail personaje={personaje} />
        </div>
    )
}

export default ItemDetailContainer