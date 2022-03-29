import React, { useEffect, useState } from 'react'
import ItemDetail from '../../components/ItemDetail'

const ItemDetailContainer = () => {

    const [personaje, setPersonaje] = useState({})

    useEffect(()=> {

        ( async ()=> {
            try {
                const response = await fetch('https://rickandmortyapi.com/api/character/3');
                console.log(response);
                const data = await response.json();
                console.log(data);
                setPersonaje(data);
            } catch (error) {
                console.log(error);
            }
        })()

    }, [])

    console.log(personaje);

    return (
        <div style={{
            width: '100%',
            height: '95vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        }}>
            <ItemDetail personaje={personaje}/>
        </div>
    )
}

export default ItemDetailContainer