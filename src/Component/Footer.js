import React, { Component } from 'react';

export class Footer extends Component {
	render() {
		return (
			<React.Fragment>
				<footer class="page-footer dark">
					<div class="container">
						<div class="row">
							<div class="col-sm-3 col-lg-4">
								<h5>About us</h5>
								<ul>
									<li>
										<a href="#">Company Information</a>
									</li>
									<li>
										<a href="#">Contact us</a>
									</li>
									<li>
										<a href="#">Reviews</a>
									</li>
								</ul>
							</div>
							<div class="col-sm-3 col-lg-4">
								<h5>Support</h5>
								<ul>
									<li>
										<a href="#">FAQ</a>
									</li>
									<li>
										<a href="#">Help desk</a>
									</li>
									<li>
										<a href="#">Forums</a>
									</li>
								</ul>
							</div>
							<div class="col-sm-3 col-lg-4">
								<h5>Legal</h5>
								<ul>
									<li>
										<a href="#">Terms of Service</a>
									</li>
									<li>
										<a href="#">Terms of Use</a>
									</li>
									<li>
										<a href="#">Privacy Policy</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="footer-copyright">
						<p>© 2020&nbsp;&nbsp;Dhulikhel Zipline&nbsp;</p>
					</div>
				</footer>
			</React.Fragment>
		);
	}
}

export default Footer;
