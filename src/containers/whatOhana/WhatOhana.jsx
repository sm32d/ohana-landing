import React from 'react'
import './whatOhana.css'
import { Feature } from '../../components'

const WhatOhana = () => {
    return (
        <div className='ohana__whatOhana section__margin' id='wohana'>
            <div className='ohana__whatOhana-feature'>
                <Feature title="What is Ohana?" text="Ohana is a cloud-native file storage and sharing mechanism that is secure, convenient, and resilient. Files
stored in the system are securely distributed across several nodes in shards that allow redundancy." />
            </div>
            <div className='ohana__whatOhana-heading'>
                <h1 className='gradient__text'>Built for the modern enterprise</h1>
            </div>
            <div className='ohana__whatOhana-container'>
                <Feature title="Easy Sign-On" text="Ohana fits right into your existing enterprise systems. Just one password for your users to remember." />
                <Feature title="Web Friendly" text="Login from the browser to manage your files- anywhere, anytime." />
                <Feature title="Built for Sharing" text="Sharing internally? No problem. Sharing externally? We've got that covered too!" />
            </div>
        </div>
    )
}

export default WhatOhana