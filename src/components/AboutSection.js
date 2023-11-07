import React, {Component} from 'react'
import './AboutSection.css';
import {PictureData} from './PictureData';
import {shuffle} from './helpers/shuffle';

function AboutSection() {
    return (
        <div className='profile'>
            <figure className='profile__pic'>
                <img 
                    src='/images/profile.jpg'
                    alt='Profile Picture'
                />
            </figure>
            <div className='profile__content'>
                <p>My name is Maya Stelzer</p>
            </div>
        </div>

    )
}

export default AboutSection