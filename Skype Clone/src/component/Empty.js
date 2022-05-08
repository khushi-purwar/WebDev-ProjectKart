import React, { Component } from "react";

import "./Empty.css"

export default class Empty extends Component {
	render() {
		const { user } = this.props;
		const firstName = user.name.split("")[0]
		return (
			<div className="empty">
				<h1 className="emptyname">Welcome, {firstName} </h1>
				<img src={user.profile_pic} alt={user.name} className="emptyimg" />
				<p className="emptystatus">
					<b>Status:</b>{user.status}
				</p>
				<button className="emptybutton">Start a conversation</button>
				<p className="emptyinfo">
					Search for someone to start chatting with or go to Contacts to see who is available
				</p>

			</div>)
	}
}