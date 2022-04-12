import React from 'react'

const ReturnTemprano = ({ condition }) => {
    if (condition){
        return (
            <h2>La condición es verdadera</h2>
        )
    }
    return (
        <h2>
            La condición es falsa
        </h2>
    )
}

export default ReturnTemprano