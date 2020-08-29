import React, { Component } from 'react';

export class Navgation extends Component {
	handelLogout = () => {
		localStorage.clear('token');
		localStorage.clear('userID');
		window.location.href = '/';
	};

	render() {
		return (
			<React.Fragment>
				<nav class="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar">
					<div class="container">
						<a class="navbar-brand logo" href="home">
							ZIPLINE
						</a>
						<button
							data-toggle="collapse"
							class="navbar-toggler"
							data-target="#navcol-1"
						>
							<span class="sr-only">Toggle navigation</span>
							<span class="navbar-toggler-icon"></span>
						</button>
						<div class="collapse navbar-collapse" id="navcol-1">
							<ul class="nav navbar-nav ml-auto">
								<li class="nav-item" role="presentation">
									<a class="nav-link" href="home">
										HOME
									</a>
								</li>
								<li class="nav-item" role="presentation">
									<a class="nav-link" href="ziplineType">
										ZIPLINE TYPE
									</a>
								</li>
								<li class="nav-item" role="presentation">
									<div class="nav-link dropdown">
										<a
											class="dropdown-toggle"
											data-toggle="dropdown"
											aria-expanded="false"
										>
											Booking
										</a>
										<div class="dropdown-menu" role="menu">
											<a
												class="dropdown-item"
												role="presentation"
												href="booking"
											>
												Boooking
											</a>
											<a
												class="dropdown-item"
												role="presentation"
												href="booking_history"
											>
												Booking History
											</a>
										</div>
									</div>
								</li>
								<li class="nav-item" role="presentation">
									<a class="nav-link" href="about">
										About Us
									</a>
								</li>
								<li class="nav-item" role="presentation">
									<a class="nav-link" href="contact">
										Contact Us
									</a>
								</li>
								<li class="nav-item" role="presentation">
									<div class="nav-link dropdown">
										<a
											class="dropdown-toggle"
											data-toggle="dropdown"
											aria-expanded="false"
										>
											User
										</a>
										<div class="dropdown-menu" role="menu">
											<a
												class="dropdown-item"
												role="presentation"
												href="profile"
											>
												Profile
											</a>
											<a
												class="dropdown-item"
												role="presentation"
												onClick={this.handelLogout}
											>
												Logout
											</a>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</React.Fragment>
		);
	}
}

export default Navgation;
