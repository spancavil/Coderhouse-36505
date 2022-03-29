import React from 'react'

const ItemDetail = ({personaje}) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            width: '90%',
            height: '90%',
        }}>
            <img 
            src={personaje.image}
            style ={{
                width: '500px',
            }}
            alt="personaje-img"
            />
            <div>
                <h2>Name: {personaje.name}</h2>
                <h2>Species: {personaje.species}</h2>
            </div>
        </div>
    )
}

export default ItemDetail