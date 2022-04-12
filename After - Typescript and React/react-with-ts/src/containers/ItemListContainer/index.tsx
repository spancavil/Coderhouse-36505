import React, { useEffect, useState } from "react";
import useFetch from "../../services/useFetch";
import {Character} from '../../../types.d';
import Form from "../../components/Form";

interface PropsContainer {
    message: string;
    count: number;
}

interface State{
  data: Array<Character>
}

const ItemListContainer = ({message, count}: PropsContainer) => {

  const [characters, setCharacters] = useState<State["data"]>([]);

  useEffect(()=> {
    const getCharacters = async (): Promise<Array<Character>> => {
      try {
        const response = await fetch("https://rickandmortyapi.com/api/character");
        return await response.json();
      } catch (error: any) {
        return(error);
      }
    }
    
    getCharacters().then(data => setCharacters(data))

  }, [])

  const handleSubmit = (character: Character) => {
    
    setCharacters([...characters, character])
  }

  // const data = useFetch("https://rickandmortyapi.com/api/character");
  console.log(characters);
  return (
    <>
      <div>
        {characters?.length !== 0 ? 
          <ul>
            {characters?.map(element => <li key={element.id}>{element.name}</li>)}
          </ul>
          :
          <h3>Loading..</h3>
        }
      </div>
      <Form handleSubmit={handleSubmit}></Form>
    </>
  )
}

export default ItemListContainer