import React from 'react'
import data from '../data.json'
import './AvailableMeals.css'
import Card from '../../UI/Card/Card'

const AvailableMeals = () => {

    const mealsList = data.map((item) => {
        return <li key={item.id}>{item.name}</li>
    })

    return (
        <section className='meals'>
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>
        </section>
    )
}

export default AvailableMeals
