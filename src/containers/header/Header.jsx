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
                <p>Veritatis voluptatem ratione ipsa est atque ipsum eveniet optio. Nihil minima sed qui quas voluptatum enim rerum. Aspernatur eum rerum architecto harum velit.</p>
                <div className='ohana__header-content__input'>
                    <input type="email" placeholder="Your email address" />
                    <button type='button'>Get Started</button>
                </div>
            </div>
            <div className='ohana__header-image'>
                <img src={hero} alt='screenshot of ohana files' />
            </div>
        </div>
    )
}

export default Header