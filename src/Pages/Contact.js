import React, { Component } from 'react';
import Navgation from '../Component/Navgation';
import Footer from '../Component/Footer';

export class Contact extends Component {
	render() {
		return (
			<>
				<Navgation />
				<main class="page contact-us-page">
					<section class="clean-block clean-form dark">
						<div class="container">
							<div class="block-heading">
								<h2 class="text-info">Contact Us</h2>
							</div>
							<form>
								<div class="form-group">
									<label>Name</label>
									<input class="form-control" type="text" />
								</div>
								<div class="form-group">
									<label>Subject</label>
									<input class="form-control" type="text" />
								</div>
								<div class="form-group">
									<label>Email</label>
									<input class="form-control" type="email" />
								</div>
								<div class="form-group">
									<label>Message</label>
									<textarea class="form-control"></textarea>
								</div>
								<div class="form-group">
									<button class="btn btn-primary btn-block" type="submit">
										Send
									</button>
								</div>
							</form>
						</div>
					</section>
				</main>
				<Footer />
			</>
		);
	}
}

export default Contact;
