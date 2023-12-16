import React, { useState } from 'react'

const ColorToggle = () => {
    const [square1Color, setSquare1Color] = useState('red')
    const [square2Color, setSquare2Color] = useState('blue')

    const handleSquareClick = (squareNumber) => {
        if (squareNumber === 1) setSquare1Color((prevColor) => (prevColor === 'red' ? 'blue' : 'red'))
        else setSquare2Color((prevColor) => (prevColor === 'blue' ? 'red' : 'blue'))
    }

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    }

    const squareStyle = {
        width: '100px',
        height: '100px',
    }

    return (
        <div style={containerStyle}>
            <div
                style={{ ...squareStyle, backgroundColor: square1Color }}
                onClick={() => handleSquareClick(1)}
            ></div>
            <div
                style={{ ...squareStyle, backgroundColor: square2Color }}
                onClick={() => handleSquareClick(2)}
            ></div>
        </div>
    )
}

export default ColorToggle;