import React from 'react'
import headerImage from '../assets/troll-face.png'

export default function Nav()
{
    return (
        <header className = "header">
            <img src={headerImage} alt="Logo" className = "header-image" />
            <h1>Meme Generator</h1>
        </header>
    )
}