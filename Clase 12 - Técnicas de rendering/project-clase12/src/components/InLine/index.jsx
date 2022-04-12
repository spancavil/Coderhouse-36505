import React from 'react'

const InLine = (props) => {
    console.log(props);
    return (<>
        {props.condition ? <h1>Se cumple la condición</h1>:<h1>No se cumple la condición</h1>}
    </>
    )
}

export default InLine