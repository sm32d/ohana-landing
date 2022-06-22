import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

const Menu = () => (
    <>
        <p><a href="#home">Home</a></p>
        <p><a href="#wohana">What is Ohana?</a></p>
        <p><a href="#features">Features</a></p>
    </>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className='ohana__navbar'>
            <div class='ohana__navbar-links'>
                <div className='ohana__navbar-links_logo'>
                    <h1>Ohana</h1>
                </div>
                <div className='ohana__navbar-links_container'>
                    <Menu />
                </div>
            </div>
            <div className='ohana__navbar-download'>
                <button type='button'>Pre-Register</button>
            </div>
            <div className='ohana__navbar-menu'>
                {toggleMenu
                    ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className='ohana__navbar-menu_container scale-up-center'>
                        <div className='ohana__navbar-menu_container-links'>
                            <Menu />
                            <div className='ohana__navbar-menu_container-links-download'>
                                <button type='button'>Pre-Register</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar