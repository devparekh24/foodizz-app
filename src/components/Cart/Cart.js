import React from 'react'
import './Cart.css'
import Modal from '../UI/Modal/Modal'

const Cart = (props) => {
    const cartItems = (
        <ul className="cart-items">
            {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map((item) => (
                <li>{item.name}</li>
            ))}
        </ul>
    );

    return (
        <Modal>
            {cartItems}
            <div className="total">
                <span>Total Amount</span>
                <span>25.98</span>
            </div>
            <div className="actions">
                <button className="button--alt" onClick={props.onCartHide}>Close</button>
                <button className="button">Order</button>
            </div>
        </Modal>
    )
}

export default Cart
