import React from 'react';
import './cta.css';

const CTA = () => {
    return (
        <div className='ohana__cta'>
            <div className='ohana__cta-content'>
                <p>Be one of the first to enjoy our services.</p>
                <h3>Register now and get notified of our release!</h3>
            </div>
            <div className='ohana__cta-btn'>
                <a href="#home"><button type='button'>Get Notified</button></a>
            </div>
        </div>
    )
}

export default CTA