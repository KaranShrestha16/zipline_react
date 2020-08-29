import React, { Component } from 'react';
import Navigation from '../Component/Navgation';
import Footer from '../Component/Footer';
export class About extends Component {
	render() {
		return (
			<>
				<Navigation />
				<main class="page">
					<div class="article-clean">
						<div class="container">
							<div class="row">
								<div class="col-lg-10 col-xl-8 offset-lg-1 offset-xl-2">
									<div class="intro">
										<h1 class="text-center">About Us</h1>
										<img
											class="img-fluid"
											src="assets/img/scenery/image1.jpg"
										/>
									</div>
									<div class="text">
										<p>
											Why do we have to fit some extra travel days to our busy
											schedule just to feel the thrill of adventure activities?
											Can we as Zip-line Experts create a high-adrenaline, safe
											and breathtaking aerial adventure just an hour away from
											Kathmandu? Keeping the stunning landscape in the mind as
											we zoom along, Worldwide Adventure has begun its campaign,
											“Adventure in Nepal” by introducing “Dhulikhel Zipline”.
											Dhulikhel, located at only 30 kms distance from Kathmandu,
											is a place of ancient culture, kaleidoscopic natural
											riches and a transit spot to several touristic hubs.
										</p>
										<p>
											Imagine, the sense of freedom you get from soaring high
											above the ground as you zip along the Himalayan range at
											an 180o panoramic view of mountains including Mt.
											Annapurna, Mt. Ganesh Himal, Mt. Langtang, Mt.
											Phuribichyachu, Mt. Gaurishankar, Mt. Lhotse, among
											others?
											<br />
										</p>
										<p>
											Foreign tourists whose first arrival point is Kathmandu,
											the zipline station would just be an hour ride away! For
											internal tourists, anyone can visit the site, have the
											thrilling experience, relax, get lost in the nature and
											get back home in just couple of hours. Close to Araniko
											highway, the Zip-line station is linked road to road with
											no extra mile to travel. Easy access that favors your
											cramped schedule!
										</p>
										<h2>
											<strong>WANT TO GET YOUR ADRENALINE PUMPING?</strong>
										</h2>
										<p>
											Worldwide Adventure introduces the first ever “Superman
											Zipline” in Nepal. Now, everyone can fly in the sky, over
											the hills and become their own superman. We also bring
											“Love is in the air” into life before you. With the
											introduction of Couple Zipline, why have the amazing
											experience alone? Let cupid hit love in the air, while you
											share the thrill together.
										</p>
										<figure>
											<img
												class="img-fluid"
												src="assets/img/scenery/super.jpg"
											/>
										</figure>
										<h2>
											<strong>ALL THE MORE REASON TO ZIP WITH US—</strong>
										</h2>
										<p>
											For the classic zipline lovers, amidst the new zipline
											types, we still have the classic zipline to keep the
											original experience aliveKeeping the spirit of “Adventure
											in Nature” alive, Worldwide Adventure is introducing the
											biggest Treehouse in Nepal! Yes, a tree house where you
											get to sit back, relax and spend quality time in nature
											with your loved ones!An organic farm in the site itself,
											your call for fresh food is but a clasp away!
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</main>
				<Footer />
			</>
		);
	}
}

export default About;
