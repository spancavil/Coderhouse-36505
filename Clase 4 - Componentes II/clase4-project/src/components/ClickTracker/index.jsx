import React, {useState, useEffect} from 'react';

const ClickTracker = () => {

    const [count, setCount] = useState(0);
    const [date, setDate] = useState("")

    const handleCount = () => {
        setCount(count + 1);
        setDate(new Date().toLocaleString());
    }

    //Se ejecuta SOLAMENTE cuando se monta el componente
    useEffect(()=> {
        console.log("Se montó el componente Click Tracker");
        return () => {
            console.log("Se desmontó el componente");
        }
    }, [])

    //Se ejecuta cuando se monta el componente y cuando se actualiza el count
    useEffect(()=> {
        console.log("Se montó/actualizó el componente Click Tracker")
    }, [count])

    console.log("Se ejecuta un render de Click Tracker")

    return (
        <div style={{
            marginTop: '20px'
        }}>
            <button onClick={handleCount}>Click</button>
            <p>Cantidad de clicks {count}. Ultimo click: {date}</p>
        </div>
    )
}

export default ClickTracker