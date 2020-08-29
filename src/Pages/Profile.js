import React, { Component } from 'react';
import Footer from '../Component/Footer';
import Navgation from '../Component/Navgation';
import Axios from 'axios';
import { url } from '../Url';

export class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			username: '',
		};
	}

	componentDidMount() {
		console.log(localStorage.getItem('userID'));
		Axios.get(url + 'user/get_user/' + localStorage.getItem('userID'), {
			headers: {
				authorization: localStorage.getItem('accessToken'),
			},
		})
			.then((response) => {
				this.setState({
					email: response.data.email,
					username: response.data.username,
				});
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	}
	render() {
		return (
			<>
				<Navgation />
				<main class="page">
					<section class="clean-block about-us">
						<div class="container">
							<div class="block-heading">
								<h2 class="text-info">Profile</h2>
							</div>
							<div class="row justify-content-center">
								<div class="col-sm-6 col-lg-4">
									<div class="card clean-card text-center">
										<img
											class="card-img-top w-100 d-block"
											src="/assets/img/avatars/avatar1.jpg?h=2bf47f2c2deaed837d2490a2db0a7175"
										/>
										<div class="card-body info">
											<h4 class="card-title">Name: {this.state.username}</h4>
											<h4 class="card-title">Email: {this.state.email}</h4>
											<p class="card-text">
												Lorem ipsum dolor sit amet, consectetur adipisicing
												elit.
											</p>
											<div class="icons">
												<a href="#">
													<i class="icon-social-facebook"></i>
												</a>
												<a href="#">
													<i class="icon-social-instagram"></i>
												</a>
												<a href="#">
													<i class="icon-social-twitter"></i>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</main>

				<Footer />
			</>
		);
	}
}

export default Profile;
