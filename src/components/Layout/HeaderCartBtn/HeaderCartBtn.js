import React from 'react'
import CartIcon from '../../Cart/CartIcon'
import './HeaderCartBtn.css'

const HeaderCartBtn = (props) => {
    return (
        <button className='button' onClick={props.onCartShow}>
            <span className='icon'>
                <CartIcon />
            </span>
            <span>
                Your Cart
            </span>
            <span className='badge'>
                3
            </span>
        </button>
    )
}

export default HeaderCartBtn
