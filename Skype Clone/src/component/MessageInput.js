import React, {Component} from "react";
import "./MessageInput.css"

class MessageInput extends Component {

	render() {
		const { value, userId, handleKeyUp, handleChange} = this.props;		
		return (
			<div className="Message" >
				<input className="MessageInput"  
						onKeyUp={handleKeyUp(userId)}
						value={value} 
						placeholder="Write a mesage" 
						onChange={event => handleChange(event)} />
			</div>)
	}
}

export default MessageInput;