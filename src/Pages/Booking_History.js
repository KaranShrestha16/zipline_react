import React, { Component } from 'react';
import Navgation from '../Component/Navgation';
import Footer from '../Component/Footer';
import ReactBootstrapTable from '../Component/ReactBootstrapTable';

import Axios from 'axios';
import { url } from '../Url';

export class Booking_History extends Component {
	constructor() {
		super();
		this.state = {
			bookingData: [],
			id: localStorage.getItem('userID'),
		};
	}

	componentDidMount() {
		console.log(localStorage.getItem('userID'));
		Axios.get(url + 'booking/getBookingById/' + this.state.id, {
			headers: {
				authorization: localStorage.getItem('accessToken'),
			},
		})
			.then((response) => {
				this.setState({ bookingData: response.data });
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
					<div class="container">
						<div class="row"></div>
						<div class="intro">
							<h1 class="text-center">Booking History </h1>
							<ReactBootstrapTable data={this.state.bookingData} />
						</div>
					</div>
				</main>
				<Footer />
			</>
		);
	}
}

export default Booking_History;
