import React, { SyntheticEvent } from 'react';

type ModalProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    onClose: (booleano: boolean) => void;
}

const Modal = ({
    children, 
    style,
    onClose,
}: ModalProps) => {

    //SynthethicEvent es al tipo genérico de eventos en React, para no especificar el tipo de eventos.
    const handleClose = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        onClose(false);
        console.log(event);
    }

    return (
        <div style={style}>
            <button onClick={handleClose}>Cerrar</button>
            {children}
        </div>
    )
}

export default Modal