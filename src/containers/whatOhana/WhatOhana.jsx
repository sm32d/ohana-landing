import React from 'react'
import './whatOhana.css'
import { Feature } from '../../components'

const WhatOhana = () => {
    return (
        <div className='ohana__whatOhana section__margin' id='wohana'>
            <div className='ohana__whatOhana-feature'>
                <Feature title="What is Ohana?" text="Veritatis voluptatem ratione ipsa est atque ipsum eveniet optio. Nihil minima sed qui quas voluptatum enim rerum. Aspernatur eum rerum architecto harum velit." />
            </div>
            <div className='ohana__whatOhana-heading'>
                <h1 className='gradient__text'>The possibilities are beyond imagination</h1>
                <p>Explore the library</p>
            </div>
            <div className='ohana__whatOhana-container'>
                <Feature title="Secure" text="Veritatis voluptatem ratione ipsa est atque ipsum eveniet optio." />
                <Feature title="Easy Sign-On" text="Veritatis voluptatem ratione ipsa est atque ipsum eveniet optio." />
                <Feature title="Shareable" text="Veritatis voluptatem ratione ipsa est atque ipsum eveniet optio." />
            </div>
        </div>
    )
}

export default WhatOhana