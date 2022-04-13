import React, { useState } from 'react';
import { Personaje } from '../../../types';

interface Props {
    handleSubmit: (character: Personaje) => void
}

const Form = ({handleSubmit}: Props) => {

    const [inputValues, setInputValues] = useState<Personaje>({
        id: 0,
        name: "",
        status: "",
        species: "",
        type: "",
        gender: "",
        origin: "",
        location: "",
        image: "",
        episode: [""],
        url: "",
        created: "",
    })

    const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setInputValues({ ...inputValues, [evt.target.name]: evt.target.value });
    }

    const onSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        handleSubmit(inputValues);
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input name='name' placeholder='name' value={inputValues.name} onChange={onChange} />
                <input name='status' placeholder='status' value={inputValues.status} onChange={onChange} />
                <button type='submit'>Add character</button>
            </form>
        </div>
    )
}

export default Form;