import React from 'react'
import '../../App.css'
import Footer from '../Footer'
import AboutSection from '../AboutSection'
import image1 from '../../images/profile.jpg'
import image2 from '../../images/profile2.jpg'
import image3 from '../../images/profile3.jpg'
import image4 from '../../images/profile4.jpg'
import image5 from '../../images/profile5.jpg'
import image6 from '../../images/profile6.jpg'


export function About () {
    const imageSlides = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
    ];
    return (
        <div>
            <AboutSection imageUrls={imageSlides}/>
            <Footer/>
        </div>
    )
}

export default About;