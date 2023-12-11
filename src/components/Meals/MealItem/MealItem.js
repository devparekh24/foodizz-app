import React, { useContext } from 'react'
import './MealItem.css'
import MealItemForm from './MealItemForm'
import cartContext from '../../../store/cart-context'

const MealItem = (props) => {

    const price = `$${props.price.toFixed(2)}`
    const cartCtx = useContext(cartContext)

    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount,
            price: props.price
        })
    }
    return (
        <li className='meal'>
            <div>
                <h3>{props.name}</h3>
                <div className='description'>{props.description}</div>
                <div className='price'>{price}</div>
            </div>
            <div>
                <MealItemForm onAddToCart={addToCartHandler} />
            </div>
        </li>
    )
}

export default MealItem
