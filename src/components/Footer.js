import React from 'react'

const Footer = (props) => {
    return (
        <div>
            <h1>Oh hi Ben! From the footer</h1>
            <p><strong>Your Location:</strong> {props.longitude}, {props.latitude}</p>
        </div>
    )
}

export default Footer