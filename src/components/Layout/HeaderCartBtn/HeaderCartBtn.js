import React, { useContext } from 'react'
import CartIcon from '../../Cart/CartIcon'
import cartContext from '../../../store/cart-context'
import './HeaderCartBtn.css'

const HeaderCartBtn = (props) => {

    const cartCtx = useContext(cartContext)

    const numOfCartItems = cartCtx.items.reduce((acc, currentItem) => {
        return acc += currentItem.amount
    }, 0)
    return (
        <button className='button' onClick={props.onCartShow}>
            <span className='icon'>
                <CartIcon />
            </span>
            <span>
                Your Cart
            </span>
            <span className='badge'>
                {numOfCartItems}
            </span>
        </button>
    )
}

export default HeaderCartBtn
