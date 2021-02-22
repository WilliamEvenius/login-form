import React from 'react'
import './FancyTextInput.css'

function FancyTextInput(props) {
    return (
        <div className="fancytextinput">
            <input type="text" placeholder={props.placeholder}></input>
        </div>
    )
}

export default FancyTextInput
