import React, { useReducer } from 'react'
import CartContext from './cart-context'

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            const updatedItems = state.items.concat(action.item);
            const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount
            }

        case 'REMOVE_ITEM':
            return {

            }
    }
    return defaultCartState
}

const CartProvider = (props) => {

    const [cartState, dispatchActions] = useReducer(cartReducer, defaultCartState)

    const addItemToCartHandler = (item) => {
        dispatchActions({ type: 'ADD_ITEM', item: item })
    }

    const removeItemFromCartHandler = (id) => {
        dispatchActions({ type: 'REMOVE_ITEM', id: id })
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }
    return (
        <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
    )
}

export default CartProvider
