import React from 'react'
import {Link} from 'react-router-dom'

function CardItems(props) {
    return (
        <>
        <li className='cards__item'>
            <div className='cards__item__link' to={props.path}>
                <div className="cards__item__content">
                    <figure className='cards__item__pic-wrap'>
                        <img 
                            src={props.src}
                            alt='Project Image'
                            className="cards__item__img"
                        />
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'>{props.text}</h5>
                        <a href={props.details}
                        target='_blank'>www.staging.slalomcolumn.com/<i className='cards__item__description'></i></a>                        
                        <p className='cards__item__description'>{props.info}</p>
                    </div>
                </div>                
            </div>
        </li>
        </>
    )
}
 
export default CardItems