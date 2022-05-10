import React, { useState } from "react";


function LiItem(props){

    const [isClicked , setClick] = useState(false);

    function handleClick(){
        
        setClick((prevValue) => {
            return !prevValue;
        })
    }
    
    return  (
        <div onClick={handleClick} >
            <li style= {{textDecoration : isClicked ? "line-through" : "none"}} >{props.item}</li>
        </div>
    );
   
}

export default LiItem;