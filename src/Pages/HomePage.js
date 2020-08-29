import React, { Component } from 'react';
import Navigation from '../Component/Navgation';
import Footer from '../Component/Footer';
import ZiplineType from '../Component/ZiplineTypes';
import { Redirect } from 'react-router-dom';
export class HomePage extends Component {
	render() {
		if (!localStorage.getItem('accessToken')) {
			return <Redirect to="/login" />;
		} else if (localStorage.getItem('accessToken')) {
			return (
				<>
					<Navigation />

					<main class="page landing-page">
						<section
							class="clean-block clean-hero"
							style={{
								backgroundImage:
									'url(/assets/img/tech/image4.jpg?h=0adc0de9a17a7caea6b8641f5d6ae02c)',
								color: 'rgba(162, 162, 162, 0.50)',
							}}
						>
							<div class="text"></div>
						</section>

						<ZiplineType />

						<section class="clean-block slider dark">
							<div class="container">
								<div
									class="carousel slide"
									data-ride="carousel"
									id="carousel-1"
								>
									<div class="carousel-inner" role="listbox">
										<div class="carousel-item active">
											<image
												class="w-100 d-block"
												src="/assets/img/scenery/super.jpg?h=323a7e5d8e12e9b60d93996156594f41"
												alt="Slide Image"
											/>
										</div>
										<div class="carousel-item">
											<image
												class="w-100 d-block"
												src="/assets/img/scenery/image1.jpg?h=ae7b4d25adfdfa1581297908235a949d"
												alt="Slide Image"
											/>
										</div>
										<div class="carousel-item">
											<image
												class="w-100 d-block"
												src="/assets/img/scenery/image3.png?h=26f762ae21fd9cce95e86763ac6154ca"
												alt="Slide Image"
											/>
										</div>
									</div>
									<div>
										<a
											class="carousel-control-prev"
											href="#carousel-1"
											role="button"
											data-slide="prev"
										>
											<span class="carousel-control-prev-icon"></span>
											<span class="sr-only">Previous</span>
										</a>

										<a
											class="carousel-control-next"
											href="#carousel-1"
											role="button"
											data-slide="next"
										>
											<span class="carousel-control-next-icon"></span>
											<span class="sr-only">Next</span>
										</a>
									</div>
									<ol class="carousel-indicators">
										<li
											data-target="#carousel-1"
											data-slide-to="0"
											class="active"
										></li>
										<li data-target="#carousel-1" data-slide-to="1"></li>
										<li data-target="#carousel-1" data-slide-to="2"></li>
									</ol>
								</div>
							</div>
						</section>
					</main>

					<Footer />
				</>
			);
		}
	}
}

export default HomePage;
