import React, { useState } from 'react'

export default function TextBox(props) {

    // const [myStyle, setmyStyle] = useState( {
    //     backgroungcolor:'white'
    // })

    // toggleStyle = ()=>{
    //     if(myStyle.backgroungcolor==='white'){
    //         setmyStyle({
    //             backgroungcolor:'black'
    //         })
    //     }else{
    //         setmyStyle({
    //             backgroungcolor:'white'
    //         })
    //     }
    // }

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to upper case","success")
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lower case","success")

    }

    const handleClear = () => {
        let newText = "";
        setText(newText)
        props.showAlert("Text Cleared","success")

    }

    const handleCopy = () => {
        // console.log("I am copy");
        let text = document.getElementById("FormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied","success")

    }

    const handleExtraSpaces = () => {
        let spText = text.split(/[ ]+/)
        setText(spText.join(" "))
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState('');

    return (
        <>
            {/* style={myStyle} */}
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1 > {props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="FormControlTextarea1" rows="7" style={{ backgroundColor: props.mode === 'dark' ? '#343a40' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
                </div>
                <button className="btn btn-primary mx-3 my-3" onClick={handleUpClick}>Convert to Upper Case</button>
                <button className="btn btn-primary mx-3 my-3" onClick={handleLowClick}>Convert to Lower Case</button>
                <button className="btn btn-primary mx-3 my-3" onClick={handleClear}>Clear</button>
                <button className="btn btn-primary mx-3 my-3" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-3 my-3" onClick={handleExtraSpaces}>Clear Extra Spaces</button>

                {/* <button className="btn btn-dark mx-3" onClick={toggleStyle}>Dark Mode</button> */}
                {/* <button type='button' className="btn btn-dark" onClick={toggleStyle}>Dark</button> */}
            </div>
            <div className='container my-4' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>
                    Text Summary
                </h1>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} letters</p>
            </div>
        </>
    )
}
