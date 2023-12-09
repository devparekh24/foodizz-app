import React from 'react'
import data from '../data.json'
import './AvailableMeals.css'
import Card from '../../UI/Card/Card'
import MealItem from '../MealItem/MealItem'

const AvailableMeals = () => {

    const mealsList = data.map((item) => {
        return <MealItem
            id={item.id}
            key={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
        />
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
