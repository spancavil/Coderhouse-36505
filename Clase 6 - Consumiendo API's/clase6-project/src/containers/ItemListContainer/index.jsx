import React, { useEffect, useState } from 'react';

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([]);

    /* const onAdd = (count) => {
        console.log(`Se agregaron ${count} productos al carrito`);
    } */

    useEffect(()=> {
        //IIFE
        ( async ()=> {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                console.log(response);
                const data = await response.json();
                console.log(data);
                setProducts(data);
            } catch (error) {
                console.log(error);
            }
        })()

    }, [])

    console.log(products);

    return (
        <div>
            <h2>{greeting}</h2>
            {/* NOTA: Llamar a ItemList para que haga el map */}
            <ul>
                {products.map(product => {
                    return <li>{product.description}</li>
                })}
            </ul>
        </div>
    )
}

export default ItemListContainer