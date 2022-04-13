import React, {useState} from 'react'

interface Props {
    stock: number
    onAdd: (quantity: number) => void
    initial?: number
}

const ItemCount = ({ stock, onAdd, initial = 1 }: Props) => {

    const [count, setCount] = useState<number>(initial)

    const sumar = () => {
        if (count < stock){
            setCount(count + 1)
        }
    }

    const restar = () => {
        if (count > 1 ) {
            setCount(count - 1)
        }
    }

    const handleAdd = () => {
        onAdd(count)
    }

    return (
        <div>
            <button onClick={restar}>-</button>
            <span>{count}</span>
            <button onClick={sumar}>+</button>
            <button onClick={handleAdd}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount