import React from 'react'
import CardItem from './CardItems'
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Take a look at my projects!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src='images/blog.jpg'
                        text="Ski/Snowboard Blog"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards