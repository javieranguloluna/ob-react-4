import React, { useState } from 'react'

const Cuadrado = () => {

    const [style, setStyle] = useState({
        width: '255px',
        height: '255px',
        backgroundColor: 'black',
        transition: 'background-color 0.5s ease-in-out'
    })

    const [loop, setLoop] = useState()

    const setColor = () => {
        setStyle({
            ...style,
            backgroundColor: `rgb(${Math.random() * 256},${Math.random() * 256},${Math.random() * 256})`
        })
    }

    const handleMouseOver = (e) => {
        setLoop(setInterval(setColor,500))
    }

    const handleMouseLeave = (e) => {
        clearInterval(loop)
    }

    const handleDoubleClick = (e) => {
        clearInterval(loop)
    }


    return (
        <div
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            onDoubleClick={handleDoubleClick}
            style={style}>
        </div>
    )
}

export default Cuadrado