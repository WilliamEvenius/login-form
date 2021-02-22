import React from 'react'
import './FancyForm.css';
import FancyTextInput from './FancyTextInput';
import FancyButton from './FancyButton';

function FancyForm() {
    return (
        <div className="fancyform">
            <div className="fancyform__title">
                <h2>User login</h2>
            </div>
            <div className="fancyform__section">
                <FancyTextInput placeholder="Username" />
                <FancyTextInput placeholder="Password" />
                <FancyButton />
            </div>
        </div>
    )
}

export default FancyForm
