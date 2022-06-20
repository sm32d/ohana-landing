import React from 'react'
import { Feature } from '../../components'
import './features.css'

const featuresData = [
    {
        title: 'Secure',
        text: "Veritatis voluptatem ratione ipsa est atque ipsum eveniet optio.",
    },
    {
        title: 'Easy Sign-On',
        text: "Veritatis voluptatem ratione ipsa est atque ipsum eveniet optio.",
    },
    {
        title: 'Shareable',
        text: "Veritatis voluptatem ratione ipsa est atque ipsum eveniet optio.",
    },
]

const Features = () => {
    return (
        <div className='ohana__features section__padding' id='features'>
            <div className='ohana__features-heading'>
                <h1 className='gradient__text'>The Future is Now and You Just Need To Realise it. Step into Future Today & Make it Happen.</h1>
                <p>Request Early Access</p>
            </div>
            <div className='ohana__features-container'>
                {featuresData.map((item, index) => (
                    <Feature title={item.title} text={item.text} key={item.title + index} />
                ))}
            </div>
        </div>
    )
}

export default Features