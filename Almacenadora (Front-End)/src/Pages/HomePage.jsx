import React from 'react'
import Canvas from '../components/Canvas/Canvas'
import { Navbar } from '../components/NavBar/Navbar.jsx'
import { Footer } from '../components/Footer/Footer'

export const HomePage = () => {
    return (
        <>
            <Navbar></Navbar>
            <br />
            <Canvas></Canvas>
            <Footer></Footer>
        </>
    )
}
