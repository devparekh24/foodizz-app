import React, { Fragment } from 'react'
import './Header.css'
import bgImg from '../../../assets/bg1.jpg'

const Header = () => {
    return (
        <Fragment>
            <header className='header'>
                <h1>Foodizz</h1>
                <button>Cart</button>
            </header>
            <div className="main-image">
                <img src={bgImg} alt='delicious food!' />
            </div>
        </Fragment>
    )
}

export default Header
