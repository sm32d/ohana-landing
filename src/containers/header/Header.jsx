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
                <form action="https://www.getrevue.co/profile/sm32d/add_subscriber" target="_blank" method="post" id="revue-form" name="revue-form" className='ohana__header-content__input'>
                    <input class="revue-form-field" placeholder="Your email address..." type="email" name="member[email]" id="member_email" />
                    <button type='submit' value="Subscribe" name="member[subscribe]" id="member_submit">Get Notified</button>
                </form>
            </div>
            <div className='ohana__header-image'>
                <img src={hero} alt='screenshot of ohana files' />
            </div>
        </div>
    )
}

export default Header