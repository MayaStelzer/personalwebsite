import React, {useState, useEffect} from 'react'
import './HeroSection.css';
import '../App.css'
import Typewriter from 'typewriter-effect'

function HeroSection() {
    const [text, setText] = useState('');
    const fullText = "Hello and Welcome!";
    const delay = 100;

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
          if (currentIndex < fullText.length) {
            setText(fullText.substring(0, currentIndex + 1));
            currentIndex++;
          } else {
            clearInterval(interval);
          }
        }, delay);
    
        return () => {
          clearInterval(interval);
        };
      }, []);

    return (
        <div className='hero-container'>
            <h1>{text}</h1>
        </div>
    )
}

export default HeroSection;