import React, { useState } from "react";


function InputText(){

    const [inputText, setInputText] = useState("");
    const [listItem, setListItem] = useState([]);

    function handleChange(event){
        const newValue = event.target.value;
        setInputText(newValue);
    }

    function handleClick(){
       
        setListItem( (prevItem) => {
            return [...prevItem , inputText]
           
        } );

        setInputText("");
    }
   

    return(
        <div className="write">
            <input type="text" onChange={handleChange} value={inputText} ></input>
            <button onClick={handleClick}>+</button>
        </div>

    );
}

export default InputText;