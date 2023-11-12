import React from 'react'
import '../../App.css'
import Footer from '../Footer'
import AboutSection from '../AboutSection'
import {ImageData} from '../data/ImageData'

function About () {
    return (
        <>
         <AboutSection slides={ImageData}/>
         <Footer/>
        </>
    )
}

export default About;