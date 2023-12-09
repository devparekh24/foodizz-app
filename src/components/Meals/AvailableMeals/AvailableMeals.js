import React from 'react'
import data from '../data.json'
import './AvailableMeals.css'

const AvailableMeals = () => {

    const mealsList = data.map((item) => {
        return <li key={item.id}>{item.name}</li>
    })

    return (
        <section className='meals'>
            <ul>
                {mealsList}
            </ul>
        </section>
    )
}

export default AvailableMeals
