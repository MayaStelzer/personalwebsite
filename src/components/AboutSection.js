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
      <div className="about">
        <div className="row">
            <div className="column">
                <div className="profile-images">
                    <div className='left-arrow' onClick={prevImage}><i class="fas fa-circle-left"/></div>
                    <div className='right-arrow' onClick={nextImage}><i class="fas fa-circle-right"/></div>
                    <img src={imageUrls[imageIndex]} className='images'/>
                </div>
            </div>
            <div className="c">
                <div className='content'>
                    <p className='profile-content'>Hi, my name is Maya Stelzer. I am currently a second year Computer Science student at Gonzaga University, but I'm originally from the Bay Area, California. 
                    I began this website during a hackathon, and I have continued to design and add features while learning more about React and HTML/CSS. I am 
                    interested in Software Development and AI/Machine Learning. Outside of school, I enjoy working out, rock climbing, hiking, and snowboarding.
                    </p>
                </div>
            </div>
        </div>
      </div>
    );
  }

  export default AboutSection;