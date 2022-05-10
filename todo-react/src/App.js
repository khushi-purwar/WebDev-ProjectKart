import React, { useState } from "react";
import LiItem from "./components/TodoItem";

function App(){

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
   

    return (
        <div>
            <div className="heading">
                <h1>Things To Do</h1>
            </div>

            <div className="write">
                <input type="text" onChange={handleChange} value={inputText} ></input>
                <button onClick={handleClick}>+</button>
            </div>

            <div className="display">
                <ul>
                {/* maps through all the elements of the list item and displays  individual item in li */}
                  {listItem.map(todoItem => <LiItem  item={todoItem}/>)}
                </ul>
            </div>

        </div>
       
      
    
    );
   
}

export default App;