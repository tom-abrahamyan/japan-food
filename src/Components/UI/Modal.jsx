import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css"

const BackDrop = (props) => {
    return (
        <div className={styles.backdrop} onClick={props.onHideCart}></div>
    )
}

const ModalWindow = (props) => {
    return (
        <div className={styles.modal}>
            <div className={styles.content}>
                {props.children}
            </div>
        </div>
    )
}

function Modal(props){

    const portalElement = document.querySelector('#overlays');

    return(
        <>
            {ReactDOM.createPortal(<BackDrop onHideCart={props.onHideCart}/>, portalElement)}
            {ReactDOM.createPortal(<ModalWindow>{props.children}</ModalWindow>, portalElement)}
        </>
    )
}

export default Modal;