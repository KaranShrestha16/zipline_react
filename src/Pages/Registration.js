import React, { Component } from 'react';
import { url } from '../Url';
import Axios from 'axios';

export class Registration extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			username: '',
		};
	}

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		Axios.post(url + 'user/signup', this.state)
			.then((response) => {
				console.log(response);

				if (response.data.status === true) {
					alert(response.data.message);
					window.location.href = '/';
				} else if (response.data.status == false) {
					alert(response.data.message);
				}
			})
			.catch(function (error) {
				alert(error.data.message);
			});
		this.setState({ email: '', username: '', password: '' });
	};

	render() {
		return (
			<div class="login-photo">
				<div class="form-container">
					<div class="image-holder"></div>
					<form onSubmit={this.handleSubmit}>
						<h2 class="text-center">
							<strong>SIGNUP</strong>
						</h2>
						<div class="form-group">
							<input
								class="form-control"
								type="text"
								autofocus=""
								required="true"
								name="username"
								value={this.state.username}
								onChange={this.handleChange}
								placeholder="User Name"
							/>
						</div>
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
								SIGNUP
							</button>
						</div>
						<a class="already" href="/">
							Already have account? click here to Login
						</a>
					</form>
				</div>
			</div>
		);
	}
}

export default Registration;
