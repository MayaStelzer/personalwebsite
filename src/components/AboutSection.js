import {React, useRef} from 'react'
import './AboutSection.css';
import profile1 from "../images/profile.jpg"
import profile2 from "../images/profile2.jpg"
import profile3 from "../images/profile3.jpg"
import profile4 from "../images/profile4.jpg"
import profile5 from "../images/profile5.jpg"
import profile6 from "../images/profile6.jpg"

function AboutSection() {
    let imageContainerRef = useRef(null)
    const IMAGES = [profile1, profile2, profile3, profile4, profile5, profile6]
    const prev = () => imageContainerRef.current.scrollLeft -= 250
    const next = () => imageContainerRef.current.scrollLeft += 250;

    return (
        <div className='profile'>
            <div className="profile__pics">
                <div className="prev" onClick={prev}><i class="fas fa-angle-left"/></div>
                <div className="slide-panel" ref={imageContainerRef}>
                    {IMAGES.map(image => {return (<img src={image}/>)})}
                </div>
                <div className="next" onClick={next}><i class="fas fa-angle-right"/></div>
            </div>
            <div className='profile__content'>
                <p>My name is Maya Stelzer</p>
            </div>
        </div>

    )
}

export default AboutSection