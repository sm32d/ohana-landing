import React from 'react'
import { Feature } from '../../components'
import './features.css'

const featuresData = [
    {
        title: 'Resilient in 1. 2. 3.',
        text: "Each file is split into shards that are distributed across multiple nodes. You set the shards required to rebuild the file and Ohana will take care of the rest.",
    },
    {
        title: 'Secure',
        text: "With your data distributed and each shard being AES-128 encrypted, security is a no brainer!",
    },
    {
        title: 'Scalable',
        text: "Storage finished? Fret not! Adding a node in the cluster is super easy.",
    },
]

const Features = () => {
    return (
        <div className='ohana__features section__padding' id='features'>
            <div className='ohana__features-heading'>
                <h1 className='gradient__text'>Features that make both the employees and admins happy</h1>
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