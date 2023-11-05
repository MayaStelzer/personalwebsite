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
                        info="This project creates a vibrant ski/snowboard blog website, showing real-life experiences and insightful research from my older sibling. 
                        Through SQL-based database management and HTML/CSS design, the website will offer user-friendly interface, whether users seek tips, recommendations, or thrilling tales. 
                        The blog will be a site for ski and snowboard enthusiasts looking to explore the snowy world of winter sports. Checkout my GitHub for a more detailed look!"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards