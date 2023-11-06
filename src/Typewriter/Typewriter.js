import React from 'react'
import Typewriter from 'typewriter-effect'
import './Typewriter.css'

function Typewriter() {
    return (
        <div className='typewriter-container'>
            <h1>
                <Typewriteroptions
                    options={{
                    autoStart: true,
                    loop: false,
                    delay: 50,
                    string: ["Hello and welcome"]
                }}
                />
            </h1>
        </div>
    )
}

export default Typewriter;