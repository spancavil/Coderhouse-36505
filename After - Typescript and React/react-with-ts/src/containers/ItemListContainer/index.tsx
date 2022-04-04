import useFetch from "../../services/useFetch";

interface propsContainer {
    message: string;
    count: number;
}

const ItemListContainer = ({message, count}: propsContainer) => {

  const data = useFetch("https://rickandmortyapi.com/api/characterssss");
  console.log(data);
  return (
    <div>
        <h2>{message}</h2>
        <h3>Conteo: {count}</h3>
    </div>

  )
}

export default ItemListContainer