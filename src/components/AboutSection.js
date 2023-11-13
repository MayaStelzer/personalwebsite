import React, {useState} from 'react'
import './AboutSection.css';

export function AboutSection({ imageUrls }) {
    const [imageIndex, setImageIndex] = useState(0);
  
    const nextImage = () => {
      setImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    };
  
    const prevImage = () => {
      setImageIndex((prevIndex) =>
        prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1
      );
    };
  
    return (
      <div classname="about-section-container">
        <div className='profile-content'>
            <p>Hi, my name is Maya Stelzer. I am a current student at Gonzaga Univeristy, studying Computer Science.</p>
        </div>
        <div className="profile-images">
            <div className='left-arrow' onClick={prevImage}><i class="fas fa-chevron-left"/></div>
            <div className='right-arrow' onClick={nextImage}><i class="fas fa-chevron-right"/></div>
            <img src={imageUrls[imageIndex]} className='images'/>
        </div>
      </div>
    );
  }

  export default AboutSection;