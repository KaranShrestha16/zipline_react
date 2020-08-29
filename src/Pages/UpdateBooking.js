import React, { Component } from 'react';
import Navgation from '../Component/Navgation';
import Footer from '../Component/Footer';
import Axios from 'axios';
import { url } from '../Url';

export class UpdateBooking extends Component {
	constructor(props) {
		super(props);
		this.state = {
			booking_id: this.props.match.params.id,
			date: '',
			tourist: '',
			zipline_type: '',
			total_people: 0,
			total_amount: 0,
			user_id: localStorage.getItem('userID'),
		};
	}

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleChangeTourist = (event) => {
		if (event.target.value === 'Local') {
			this.setState({ [event.target.name]: event.target.value });
			if (this.state.zipline_type === 'Classic') {
				this.setState({ total_amount: this.state.total_people * 2500 });
			} else if (this.state.zipline_type === 'Superman') {
				this.setState({ total_amount: this.state.total_people * 3500 });
			} else if (this.state.zipline_type === 'Couple') {
				this.setState({ total_amount: this.state.total_people * 4500 });
			}
		} else if (event.target.value === 'SAARC') {
			this.setState({ [event.target.name]: event.target.value });
			if (this.state.zipline_type === 'Classic') {
				this.setState({ total_amount: this.state.total_people * 3000 });
			} else if (this.state.zipline_type === 'Superman') {
				this.setState({ total_amount: this.state.total_people * 4000 });
			} else if (this.state.zipline_type === 'Couple') {
				this.setState({ total_amount: this.state.total_people * 5000 });
			}
		} else if (event.target.value === 'Foreigner') {
			this.setState({ [event.target.name]: event.target.value });
			if (this.state.zipline_type === 'Classic') {
				this.setState({ total_amount: this.state.total_people * 3500 });
			} else if (this.state.zipline_type === 'Superman') {
				this.setState({ total_amount: this.state.total_people * 4500 });
			} else if (this.state.zipline_type === 'Couple') {
				this.setState({ total_amount: this.state.total_people * 5000 });
			}
		}
	};

	handleChangeTotal = (event) => {
		this.setState({ [event.target.name]: event.target.value });
		if (this.state.tourist === 'Local') {
			if (this.state.zipline_type === 'Classic') {
				this.setState({ total_amount: event.target.value * 2500 });
			} else if (this.state.zipline_type === 'Superman') {
				this.setState({ total_amount: event.target.value * 3500 });
			} else if (this.state.zipline_type === 'Couple') {
				this.setState({ total_amount: event.target.value * 4500 });
			}
		} else if (this.state.tourist === 'SAARC') {
			if (this.state.zipline_type === 'Classic') {
				this.setState({ total_amount: event.target.value * 3000 });
			} else if (this.state.zipline_type === 'Superman') {
				this.setState({ total_amount: event.target.value * 4000 });
			} else if (this.state.zipline_type === 'Couple') {
				this.setState({ total_amount: event.target.value * 5000 });
			}
		} else if (this.state.tourist === 'Foreigner') {
			if (this.state.zipline_type === 'Classic') {
				this.setState({ total_amount: event.target.value * 3500 });
			} else if (this.state.zipline_type === 'Superman') {
				this.setState({ total_amount: event.target.value * 4500 });
			} else if (this.state.zipline_type === 'Couple') {
				this.setState({ total_amount: event.target.value * 5000 });
			}
		}
	};

	handleChangeZipline = (event) => {
		if (event.target.value === 'Classic') {
			this.setState({ [event.target.name]: event.target.value });
			if (this.state.tourist === 'Local') {
				this.setState({ total_amount: this.state.total_people * 2500 });
			} else if (this.state.tourist === 'SAARC') {
				this.setState({ total_amount: this.state.total_people * 3000 });
			} else if (this.state.tourist === 'Foreigner') {
				this.setState({ total_amount: this.state.total_people * 3500 });
			}
		} else if (event.target.value === 'Superman') {
			this.setState({ [event.target.name]: event.target.value });
			if (this.state.tourist === 'Local') {
				this.setState({ total_amount: this.state.total_people * 3500 });
			} else if (this.state.tourist === 'SAARC') {
				this.setState({ total_amount: this.state.total_people * 4000 });
			} else if (this.state.tourist === 'Foreigner') {
				this.setState({ total_amount: this.state.total_people * 4500 });
			}
		} else if (event.target.value === 'Couple') {
			this.setState({ [event.target.name]: event.target.value });
			if (this.state.tourist === 'Local') {
				this.setState({ total_amount: this.state.total_people * 4500 });
			} else if (this.state.tourist === 'SAARC') {
				this.setState({ total_amount: this.state.total_people * 5000 });
			} else if (this.state.tourist === 'Foreigner') {
				this.setState({ total_amount: this.state.total_people * 6000 });
			}
		}
	};

	handleSubmit = (event) => {
		event.preventDefault();
		Axios.patch(url + 'booking/' + this.state.booking_id, this.state, {
			headers: {
				authorization: localStorage.getItem('accessToken'),
			},
		})
			.then((response) => {
				console.log(response);

				if (response.data.status === true) {
					alert(response.data.message);
					window.location.href = '/booking_history';
				} else if (response.data.status === false) {
					alert(response.data.message);
				}
			})
			.catch(function (error) {
				console.log(error);
				alert(error);
			});
	};

	componentDidMount() {
		console.log(localStorage.getItem('userID'));
		Axios.get(url + 'booking/viewBooking/' + this.state.booking_id, {
			headers: {
				authorization: localStorage.getItem('accessToken'),
			},
		})
			.then((response) => {
				this.setState({
					booking_id: response.data.booking_id,
					date: response.data.date,
					total_amount: response.data.total_amount,
					total_people: response.data.total_people,
					tourist: response.data.tourist,
					zipline_type: response.data.zipline_type,
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
				<main class="page contact-us-page">
					<section class="clean-block clean-form dark">
						<div class="container">
							<div class="block-heading">
								<h2 class="text-info">Booking </h2>
							</div>
							<form onSubmit={this.handleSubmit}>
								<div class="form-group">
									<label>Booking Date</label>
									<input
										class="form-control"
										name="date"
										value={this.state.date}
										onChange={this.handleChange}
										type="date"
										required="true"
									/>
								</div>
								<div class="form-group">
									<label>Tourist</label>
									<select
										name="tourist"
										required="true"
										value={this.state.tourist}
										onChange={this.handleChangeTourist}
										class="form-control"
									>
										<option></option>
										<option>Local</option>
										<option>SAARC</option>
										<option>Foreigner</option>
									</select>
								</div>
								<div class="form-group">
									<label>Zipline Type</label>
									<select
										name="zipline_type"
										required="true"
										value={this.state.zipline_type}
										onChange={this.handleChangeZipline}
										class="form-control"
									>
										<option></option>
										<option>Classic</option>
										<option>Superman</option>
										<option>Couple</option>
									</select>
								</div>

								<div class="form-group">
									<label> Total People </label>
									<input
										class="form-control"
										name="total_people"
										value={this.state.total_people}
										onChange={this.handleChangeTotal}
										type="number"
									/>
								</div>
								<div class="form-group">
									<label> Total Amount</label>
									<input
										class="form-control"
										name="total_amount"
										value={this.state.total_amount}
										onChange={this.handleChange}
										disabled
										type="number"
									/>
								</div>

								<div class="form-group">
									<button class="btn btn-primary btn-block" type="submit">
										Update
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

export default UpdateBooking;
