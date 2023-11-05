import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Me</h2>
                            <Link to='/'>Projects</Link>
                            <Link to='/'>About</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Social Media</h2>
                            <Link to='/'>Linkedin</Link>
                            <Link to='/'>GitHub</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            MAYA <i className='fab fa-type-typo3' />
                        </Link>
                    </div>
                    <small className='website-rights'>Maya Stelzer 2023</small>
                    <div className='social-icons'>
                        <Link className='social-icon-link Linkedin'
                        to='/'
                        target='blank'
                        aria-label="Linkedin"
                        >
                            <i className="fa-brands fa-linkedin"></i>
                        </Link>
                        <Link className='social-icon-link GitHub'
                        to='/'
                        target='blank'
                        aria-label="GitHub"
                        >
                            <i class="fa-brands fa-github"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer