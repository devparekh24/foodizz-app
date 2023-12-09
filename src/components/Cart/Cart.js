import React from 'react'
import './Cart.css'

const Cart = (props) => {
    const cartItems = <ul className='cart-items'>{[{ id: '1', name: 'Sushi', amount: 2, price: 12.99 }].map((item) => (<li key={item.id}>{item.name}</li>))}</ul>
    return (
        <div>
            {cartItems}
            <div className='total'>
                <span>Total Amount</span>
                <span>25.98</span>
            </div>
            <div className='actions'>
                <button className='button--alt'>Close</button>
                <button className='button'>Order</button>
            </div>
        </div>
    )
}

export default Cart
