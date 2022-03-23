import React, {useState} from 'react';

const ClickTracker = () => {

    const [count, setCount] = useState(0);
    const [date, setDate] = useState("")

    const handleCount = () => {
        setCount(count + 1);
        setDate(new Date().toLocaleString());
    }

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