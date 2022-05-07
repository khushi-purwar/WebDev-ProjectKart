import React, { Component } from 'react'
import Header from "./Header"
import Chats from "./Chats";
import _ from "lodash"
import "./ChatWindow.css"
import MessageInput from "./MessageInput"
import {setValueType, sendMesage} from "../actions/index"
import { connect} from "react-redux"



class ChatWindows extends Component {
	render() {
		const { activeUserId, state, handleKeyUp, handleChange} = this.props;		
		const { typing } = state;		
		const activeUser = state.contacts[activeUserId];
		const messages = state.messages[activeUserId]
		return (
			<div className="chatwindow">
				<Header user={activeUser} />
				<Chats messages={_.values(messages)} />
				<MessageInput value={typing} userId={activeUser.user_id} 
							  handleKeyUp={handleKeyUp} 
							  handleChange={handleChange}  />
			</div>)

	}
}

const mapDispatchToProps = (dispatch) => {
    return ({
        handleKeyUp: (userId) => {
			return event => {
				let text = event.target.value;
					if (event.keyCode === 13) {
						if (!text) {
							return
						}
						text = text.trim();
						if (!text) {
							return;
						}
						dispatch(sendMesage(text, userId));
						dispatch(setValueType(""))
					}
					}
            
		},
		handleChange: event => {
			dispatch(setValueType(event.target.value))		
    }
})};

const mapStateToProps = (state) => {
	return {
		state: state,

	}
}
const ChatWindow = connect(mapStateToProps,mapDispatchToProps)(ChatWindows);
export default ChatWindow;




