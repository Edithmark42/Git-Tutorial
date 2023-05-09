import React, { useState } from 'react';

export default function TextArea(props) {
    
    const handleUpClick = () => {
        let upperCase = Text.toUpperCase();
        setText(upperCase);
    }
    const handleLoClick = () => {
        let upperCase = Text.toLowerCase();
        setText(upperCase);
    }


    const handleOnChange = (event) => {
        setText(event.target.value);
    }


    const clearTextArea = () => {
        setText("");
    }
    const [Text, setText] = useState("Type text here");
    return (
        <>
            <h1>{props.heading}</h1>
            <div className="form-floating">
                <textarea className="form-control" onChange={handleOnChange} value={Text} id="floatingTextarea2" style={{ height: '200px' }}></textarea>
                <label htmlFor="floatingTextarea2"></label>
            </div>
            <button className="btn btn-primary mx-3 my-3" onClick={handleUpClick}>Convert To Upper</button>
            <button className="btn btn-primary mx-3 my-3" onClick={handleLoClick}>Convert to Lower</button>
            <button className="btn btn-primary mx-3 my-3" onClick={clearTextArea}>Clear</button>

            <div className="container">
                <h2>Text details</h2>
                <p>
                    no of words are {Text.split(" ").length} and no of charecters are {Text.length}
                </p>
                <p>{Text}</p>
            </div>
        </>

    )
}
