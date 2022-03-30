import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([]);
    const { id } = useParams() //Siempre trae un string

    console.log(id);

    /* const onAdd = (count) => {
        console.log(`Se agregaron ${count} productos al carrito`);
    } */

    useEffect(() => {
        //IIFE
        (async () => {
            try {
                const response = await fetch('https://rickandmortyapi.com/api/character');
                console.log(response);
                const data = await response.json();
                console.log(data);
                const personajes = data.results;
                if (!id) {
                    setProducts(personajes);
                } else {
                    //Filtrar según el id
                    const personajesFiltrados = personajes.filter(personaje => personaje.species === id)
                    console.log(personajesFiltrados);
                    setProducts(personajesFiltrados);
                }
            } catch (error) {
                console.log(error);
            }
        })()

    }, [id]) //Colocamos el id como dependencia, para que cada vez que haya un nuevo id, se ejecute nuevamente.

    console.log(products);

    return (
        <div>
            <h2>{greeting}</h2>
            {/* NOTA: Llamar a ItemList para que haga el map */}
            {products.length !== 0 ?
                <ul>
                    {products.map(product => {
                        return <li key={product.name}>
                            <Link to ={`/item/${product.id}`}>
                                {product.name}
                            </Link>
                        </li>
                    })}
                </ul>
                :
                <h2>Loading...</h2>
            }
        </div>
    )
}

export default ItemListContainer