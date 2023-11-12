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
                        src='/../images/blog.jpg'
                        text="React Ski/Snowboard Blog"
                        details="https://staging.slalomcolumn.com/"
                        info="A full-stack ski/snowboard blog website, created using ReactJS and PostgreSQL. Content written by my older sibling, which I entered into a SQL database to be queried by the website. 
                        The blog will be a site for ski and snowboard enthusiasts looking to explore the snowy world of winter sports!"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards