import React from 'react'
import moment from 'moment';

const Todo = (props) => {
    var dataString = moment(props.date).format("YYYY,M,D");
    return (

        <div className="memory-box">
            <h1 className="memory-title">{props.postTitle}</h1>
            <p className="memory-description"> {props.postStory} </p>
            <p>{dataString} </p>
            <button className="memory-delete" onClick={props.delete}>Delete</button>
        </div>
    );
}

export default Todo;