import React, { useContext, useState } from 'react'
import './Cart.css'
import Modal from '../UI/Modal/Modal'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem/CartItem'
import ModalBox from '../OrderSuccessFullModal/ModalBox'

const Cart = (props) => {

    const cartCtx = useContext(CartContext)
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = cartCtx.items.length > 0
    const [orderCreated, setOrderCreated] = useState(false)

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id)
    }

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 })
    }

    const clearCartHandler = () => {
        cartCtx.items = []
        cartCtx.totalAmount = 0
    }

    const orderCreatedHandler = () => {
        setOrderCreated(true)

        setTimeout(() => {
            clearCartHandler()
            setOrderCreated(false)
        }, 2500)
    }

    let cartItems = (
        <ul className="cart-items">
            {cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            ))}
        </ul>
    );

    return (
        <Modal>
            {orderCreated && <ModalBox />}
            {cartItems}
            <div className="total">
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className="actions">
                <button className="button--alt" onClick={props.onCartHide}>Close</button>
                {hasItems && <button className="button" onClick={orderCreatedHandler}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart
