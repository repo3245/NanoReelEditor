// Modal.js
import React from 'react';
import './Modal.css';
import { GoogleLoginButton } from './GoogleLoginButton';


const Modal = ({ show, onClose, children }) => {
    if (!show) return null;

    return (
        <div className="overlay" onClick={onClose}>
            <div className="modal" onClick={e => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>X</button>
                {children}

                <GoogleLoginButton
                />
            </div>

        </div>
    );
};

export default Modal;
