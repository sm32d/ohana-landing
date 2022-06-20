import React from 'react'

import { Footer, Features, WhatOhana, Header } from './containers'
import { CTA, Navbar } from './components'
import './App.css'

const App = () => {
    return (
        <div className='App'>
            <div className='gradient__bg'>
                <Navbar />
                <Header />
            </div>
            <WhatOhana />
            <Features />
            <CTA />
            <Footer />
        </div>
    )
}

export default App