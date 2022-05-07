import React, { Component } from "react";
import "./Header.css"


export default class Header extends Component {
	render() {
		const {user} = this.props
		return (
			<div className="header">
				<h2 className="headername">{user.name}</h2>
				<p className="headerstatus">{user.status}</p>
			</div>)
	}
}