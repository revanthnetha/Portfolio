import './Buttons.css'
import React from 'react';


function Buttons (){
    return(
        <div className="container button_container">
            <a href="#home" className='btn pri'>
                Learn More 
            </a>
            <a href="#contact" className='btn sec'>
                Get in Touch
            </a>
        </div>
    )
}

export default Buttons;