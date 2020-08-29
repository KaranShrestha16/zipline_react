import React, { Component } from 'react';
import Navgation from '../Component/Navgation';
import Footer from '../Component/Footer';
import ZiplineTypes from '../Component/ZiplineTypes';

export class ZiplineType extends Component {
	render() {
		return (
			<div>
				<Navgation />
				<ZiplineTypes />
				<Footer />
			</div>
		);
	}
}

export default ZiplineType;
