import React, { Component } from 'react';
import { url } from '../Url';
import Axios from 'axios';

export class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
		};
	}

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		Axios.post(url + 'user/login', this.state)
			.then((response) => {
				console.log(response);
				if (response.data.status === true) {
					alert(response.data.message);
					localStorage.setItem('accessToken', response.data.accessToken);
					localStorage.setItem('userID', response.data.id);
					window.location.href = '/home';
				} else if (response.data.status == false) {
					alert(response.data.message);
				}
			})
			.catch(function (error) {
				alert(error);
				console.log(error);
			});
		this.setState({ email: '', password: '' });
	};

	render() {
		return (
			<div class="login-photo">
				<div class="form-container">
					<div class="image-holder"></div>
					<form onSubmit={this.handleSubmit}>
						<h2 class="text-center">
							<strong>LOGIN</strong>
						</h2>
						<div class="form-group">
							<input
								class="form-control"
								type="email"
								autofocus=""
								required="true"
								name="email"
								value={this.state.email}
								onChange={this.handleChange}
								placeholder="Email"
							/>
						</div>
						<div class="form-group">
							<input
								class="form-control"
								type="password"
								name="password"
								placeholder="Password"
								required="true"
								value={this.state.password}
								minlength="8"
								maxlength="15"
								onChange={this.handleChange}
							/>
						</div>

						<div class="form-group">
							<button class="btn btn-primary btn-block" type="submit">
								LOGIN
							</button>
						</div>
						<a class="already" href="register">
							Create new account? click here
						</a>
					</form>
				</div>
			</div>
		);
	}
}

export default Login;
