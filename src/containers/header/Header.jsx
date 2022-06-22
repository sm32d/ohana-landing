import React from 'react'
import './header.css'
import hero from '../../assets/hero.png'

const Header = () => {
    return (
        <div className='ohana__header section__padding' id='home'>
            <div className='ohana__header-content'>
                <h1 className='gradient__text'>
                    Store and Share Your Files Securely with Ohana
                </h1>
                <p>A cloud-native file storage solution that is secure, scalable,
                    resilient, and built for the sharing economy of today.</p>
                <p>Releasing this Autumn!</p>
                <form name="mailing-list" method="POST" data-netlify="true" className='ohana__header-content__input'>
                    <input type="email" placeholder="Your email address" />
                    <button type='submit'>Get Notified</button>
                </form>
            </div>
            <div className='ohana__header-image'>
                <img src={hero} alt='screenshot of ohana files' />
            </div>
        </div>
    )
}

export default Header