import React, {useState} from 'react'

export default function TextForm(props) {
    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }
    const handleUpprCaseClick = () => {
        console.log("Uppercase Button was clicked");
        let newtext = text.toUpperCase();
        setText(newtext);
    }
    const handleLowrCaseClick = () => {
        console.log("Lowercase Button was clicked");
        let newtext = text.toLowerCase();
        setText(newtext);
    }
    const [text, setText] = useState("");
    // text = "new text"; // Wrong way to change the text
    // setText("new text"); Correct way to change the text
    return (
        <>
            <div className='container' style={{color : props.mode==="dark"?"white":"black"}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{backgroundColor : props.mode==="dark"?"#5b5b5b":"white", color : props.mode==="dark"?"white":"black"}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpprCaseClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowrCaseClick}>Convert to Lowercase</button>
            </div>
            <div className='container my-4' style={{color : props.mode==="dark"?"white":"black"}}>
                <h2>Your Text Summary:</h2>
                <p> {text.split(" ").length} words  {text.length} characters</p>
                <p> {0.008 * text.split(" ").length} minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0 ? text : "Enter something in the textbox area for preview"}</p>
            </div>
        </>
    )
}
