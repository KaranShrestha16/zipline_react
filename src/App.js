import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/HomePage';
import ZiplineType from './Pages/ZiplineType';
import Registration from './Pages/Registration';
import NotFound from './Pages/NotFound';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Booking from './Pages/Booking';
import Booking_History from './Pages/Booking_History';
import UpdateBooking from './Pages/UpdateBooking';
import Profile from './Pages/Profile';

export class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Router>
					<Switch>
						<Route exact path="/ziplineType" component={ZiplineType} />
						<Route exact path="/home" component={Home} />
						<Route exact path="/about" component={About} />
						<Route exact path="/contact" component={Contact} />
						<Route exact path="/booking" component={Booking} />
						<Route exact path="/profile" component={Profile} />
						<Route exact path="/updateBooking/:id" component={UpdateBooking} />
						<Route exact path="/booking_history" component={Booking_History} />
						<Route exact path="/register" component={Registration} />
						<Route exact path="/" component={Login} />

						<Route component={NotFound} />
					</Switch>
				</Router>
			</React.Fragment>
		);
	}
}

export default App;
