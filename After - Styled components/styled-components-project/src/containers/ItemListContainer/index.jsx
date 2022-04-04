import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// import { useParams, useNavigate } from 'react-router-dom';
const Item = styled.li`
    padding: 3em;
    background: papayawhip;
    /* display: flex;
    flex-direction: column;
    justify-content: flex-start; */
    cursor: pointer;
`

const Boton = styled.p`
    padding: 2em;
    background:${props => props.bg === "green" ? "darkolivegreen" : "black"};
`

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([]);
    // const { id } = useParams() //Siempre trae un string
    // const navigate = useNavigate();

    // console.log(id);

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
                let id;
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

    }, []) //Colocamos el id como dependencia, para que cada vez que haya un nuevo id, se ejecute nuevamente.


    return (
        <div>
            <h2>{greeting}</h2>
            {/* NOTA: Llamar a ItemList para que haga el map */}
            {products.length !== 0 ?
                <ul>
                    {products.map(product => {
                        return <Boton
                            bg = "verde"
                            // onClick={() => navigate(`/Button/${product.id}`)}
                            >
                            {product.name}
                        </Boton>

                    })}
                </ul>
                :
                <h2>Loading...</h2>
            }
        </div >
    )
}

export default ItemListContainer