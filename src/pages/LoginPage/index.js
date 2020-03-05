import React, { Component } from "react";
import LoginForm from "../../components/LoginForm/index";
import "./LoginPage.css";

export default class LoginPage extends Component {
	render() {
		return (
			<div className="login-page">
				<LoginForm />
			</div>
		);
	}
}
