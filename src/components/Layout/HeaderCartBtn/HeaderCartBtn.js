import React, { useContext, useEffect, useState } from 'react'
import CartIcon from '../../Cart/CartIcon'
import cartContext from '../../../store/cart-context'
import './HeaderCartBtn.css'

const HeaderCartBtn = (props) => {

    const cartCtx = useContext(cartContext)
    const [btnAnimated, setBtnAnimated] = useState(false)
    const { items } = cartCtx

    useEffect(() => {

        if (items.length === 0) return;

        setBtnAnimated(true)

        const timer = setTimeout(() => {
            setBtnAnimated(false)
        }, 100)

        return () => {
            clearTimeout(timer)
        }
    }, [items])

    const numOfCartItems = items.reduce((acc, currentItem) => {
        return acc += currentItem.amount
    }, 0)

    return (
        <button className={`button ${btnAnimated ? 'bump' : ''}`} onClick={props.onCartShow}>
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
