import React, { SyntheticEvent } from 'react';

type ModalType = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    onClose: (booleano: boolean) => void;
}

const Modal = ({
    children, 
    style,
    onClose,
}: ModalType) => {

    //SynthethicEvent es al tipo genérico de eventos en React, para no especificar el tipo de eventos.
    const handleClose = (event: SyntheticEvent) => {
        onClose(false)
    }

    return (
        <div style={style}>
            <button onClick={handleClose}>Cerrar</button>
            {children}
        </div>
    )
}

export default Modal