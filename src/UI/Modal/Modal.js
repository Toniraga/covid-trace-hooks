import React from 'react'
import ShowModal from './ShowModal/ShowModal'

const Modal = (props) => {
    return (
        <ShowModal 
            closeModal={props.closeModal}
            payload={props.payload}
        />
    )
}

export default Modal
