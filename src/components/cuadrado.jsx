import React, { useRef, useState } from 'react'

const Cuadrado = () => {

    const [style, setStyle] = useState({
        width: '255px',
        height: '255px',
        backgroundColor: 'black'
    })

    const ref = useRef()

    return (
        <div ref={ref} style={style}></div>
    )
}

export default Cuadrado