import React from 'react'
import {Link} from 'react-router-dom'

function CardItems(props) {
    return (
        <>
        <li className='cards__item'>
            <Link className='cards__item__link' to={props.path}>
                <figure className='cards__item__pic-wrap'>
                    <img 
                        src={props.src}
                        alt='Project Image'
                        className="cards__item__img"/>
                </figure>
                <div className='cards__item__info'>
                    <h5 className='cards__item__text'>{props.text}</h5>
                        <p1 className='cards__item__description'>{props.info}</p1>
                </div>
            </Link>
        </li>
        </>
    )
}
 
export default CardItems