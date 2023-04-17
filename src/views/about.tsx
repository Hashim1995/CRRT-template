import React from 'react'
import { Outlet } from 'react-router-dom'

function About() {
    return (
        <div>
            <div>about</div>
            <div><Outlet /></div>
        </div>
    )
}

export default About