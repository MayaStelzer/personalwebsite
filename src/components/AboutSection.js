import React, {useState} from 'react'
import './AboutSection.css';
import {ImageData} from './data/ImageData'

const AboutSection = ({slides}) => {
    const[current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }
    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <section className="slider">
            <div className='left-arrow' onClick={prevSlide}><i class="fas fa-chevron-left"/></div>
            <div className='right-arrow' onClick={nextSlide}><i class="fas fa-chevron-right"/></div>
            {ImageData.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                       {index === current && (
                        <img src={slide.image} alt='profile image' className='image' />
                       )}
                    </div>
                );
            })}
        </section>
    );
};
export default AboutSection;