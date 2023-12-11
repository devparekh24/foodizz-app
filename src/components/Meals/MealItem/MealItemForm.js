import React, { useRef } from 'react'
import './MealItemForm.css'
import Input from '../../UI/Input/Input'

const MealItemForm = (props) => {

    const amountInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault()
        const enteredAmount = +amountInputRef.current.value;
        props.onAddToCart(enteredAmount)
    }
    return (
        <form className='form' onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                label='Amount'
                input={{
                    id: 'amount' + props.id,
                    type: 'number',
                    min: '1',
                    step: '1',
                    defaultValue: '1'
                }} />
            <button>+ Add</button>
        </form>
    )
}

export default MealItemForm
