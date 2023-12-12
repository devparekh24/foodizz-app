import React from 'react';
import './ModalBox.css';
import Modal from '../UI/Modal/Modal';
import orderSuccessfulImg from '../../assets/orderSuccess.png'

function App() {

    return (
        <Modal>
            <div className="order-modal">
                <img src={orderSuccessfulImg} alt='orderSuccessful!' />
            </div>
            <div className="order-text">
                <span>
                    <h4>Order created Successfully!</h4>
                    <p>Thank you for your order...</p>
                </span>
            </div>
        </Modal>
    );
}

export default App;
