import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Go To</h2>
                            <Link to='/'>Home</Link>
                            <Link to='/Projects'>Projects</Link>
                            <Link to='/About'>About</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Social Media</h2>
                            <a href='https://www.linkedin.com/in/mayastelzer'
                            target='_blank'>LinkedIn<i className="fab fa-linkedin"></i></a>
                            <a href='https://github.com/MayaStelzer'
                            target='_blank'>GitHub<i class="fab fa-github"></i></a>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <small className='website-rights'>Maya Stelzer 2023</small>
                </div>
            </section>
        </div>
    )
}

export default Footer