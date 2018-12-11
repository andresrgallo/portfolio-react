import React, { Component } from 'react';
export default class Portfolio extends Component {
	render() {
		return (
			<React.Fragment>
				<section id="portfolio">
					<div className="row">
						<div className="twelve columns collapsed">
							<h1>Check Out Some of My Works.</h1>
							{/* portfolio-wrapper */}
							<div
								id="portfolio-wrapper"
								className="bgrid-quarters s-bgrid-thirds cf"
							>
								<div className="columns portfolio-item">
									<div className="item-wrap">
										<a href="#modal-01" title>
											<img
												alt="course app"
												src="images/portfolio/course-app.png"
											/>
											<div className="overlay">
												<div className="portfolio-item-meta">
													<h5>Ruby Course Application</h5>
													<p>Ruby Coding Basics</p>
												</div>
											</div>
											<div className="link-icon">
												<i className="icon-plus" />
											</div>
										</a>
									</div>
								</div>{' '}
								{/* item end */}
								<div className="columns portfolio-item">
									<div className="item-wrap">
										<a href="#modal-02" title>
											<img
												alt="teach-me app"
												src="images/portfolio/teachme-app.png"
											/>
											<div className="overlay">
												<div className="portfolio-item-meta">
													<h5>Rails Teachme Web App</h5>
													<p>Ruby-on-Rails Devise Sendgrid Stripe Postgresql</p>
												</div>
											</div>
											<div className="link-icon">
												<i className="icon-plus" />
											</div>
										</a>
									</div>
								</div>{' '}
								{/* item end */}
								<div className="columns portfolio-item">
									<div className="item-wrap">
										<a href="#modal-03" title>
											<img
												alt="food forum app"
												src="images/portfolio/food-forum.png"
											/>
											<div className="overlay">
												<div className="portfolio-item-meta">
													<h5>MERN Food Forum Web App</h5>
													<p>Nodejs Express Mongodb React</p>
												</div>
											</div>
											<div className="link-icon">
												<i className="icon-plus" />
											</div>
										</a>
									</div>
								</div>{' '}
								{/* item end */}
								<div
									className="columns portfolio-item"
									style={{ marginLeft: '30%' }}
								>
									<div className="item-wrap">
										<a href="#modal-04" title>
											<img
												alt="Unique RealEstate app"
												src="images/portfolio/unique-re.png"
											/>
											<div className="overlay">
												<div className="portfolio-item-meta">
													<h5>Unique RealEstate App</h5>
													<p>Nodejs Express React</p>
												</div>
											</div>
											<div className="link-icon">
												<i className="icon-plus" />
											</div>
										</a>
									</div>
								</div>{' '}
								{/* item end */}
							</div>{' '}
							{/* portfolio-wrapper end */}
						</div>{' '}
						{/* twelve columns end */}
						{/* Modal Popup
	      --------------------------------------------------------------- */}
						<div id="modal-01" className="popup-modal mfp-hide">
							<img
								className="scale-with-grid m1"
								src="images/portfolio/modals/m-ruby.png"
								alt="ruby"
							/>
							<div className="description-box">
								<h4>Ruby Course App</h4>
								<p>
									Concept, built and designed a 'course cost' app, that enables
									students to estimate costs of undertaking one or more courses
									within a specific period of time. The app displays courses
									classified by skill sets with extra information regarding
									commencing and ending dates. It can be tailored to any
									education institution.
								</p>
							</div>
							<div className="link-box">
								<a
									href="https://github.com/andresrgallo/course-app"
									target="_blank"
									rel="noopener noreferrer"
								>
									Details
								</a>
								<a className="popup-modal-dismiss">Close</a>
							</div>
						</div>
						{/* modal-01 End */}
						<div id="modal-02" className="popup-modal mfp-hide">
							<img
								className="scale-with-grid m2"
								src="images/portfolio/modals/m-teachapp.jpeg"
								alt="teach-me app"
							/>
							<div className="description-box">
								<h4>Rails Teach-me App</h4>
								<p>
									Concept, built and designed an online Tutor/student app where
									upskill people can share their skills and get remunerated and
									students can learn about any skill they want to get or
									improve.
								</p>
							</div>
							<div className="link-box">
								<a
									href="https://github.com/andresrgallo/teach-me-app"
									target="_blank"
									style={{ paddingRight: 10 }}
									rel="noopener noreferrer"
								>
									Github
								</a>
								<a
									href="https://teachme-app.herokuapp.com/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Website
								</a>
								<a className="popup-modal-dismiss">Close</a>
							</div>
						</div>
						{/* modal-02 End */}
						<div id="modal-03" className="popup-modal mfp-hide">
							<img
								className="scale-with-grid m3"
								src="images/portfolio/modals/food-forum.png"
								alt="foodforum"
							/>
							<div className="description-box">
								<h4>MERN Food Forum Web App</h4>
								<p>
									Concept, built and designed a Web App for a fresh produce
									wholesaler operating out of Canberra, ACT. The goal for this
									project was to create a digital sales channel for Food Forum,
									so their customers are able to place orders online. The front
									end of the web app was built using REACT, while the backend
									was built with Node.js.
								</p>
							</div>
							<div className="link-box">
								<a
									href="https://foodforumco.netlify.com/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Website
								</a>
								<a className="popup-modal-dismiss">Close</a>
							</div>
						</div>
						{/* modal-03 End */}
						<div id="modal-04" className="popup-modal mfp-hide">
							<img
								className="scale-with-grid m3"
								src="images/portfolio/modals/unique-re.png"
								alt="foodforum"
							/>
							<div className="description-box">
								<h4>Unique Real Estate App</h4>
								<p>
									Application that generates a list of Tenants for a
									'non-existant' Real Estate Agency with a payments ledger for
									each Tenant. To generate the data, an API was built using
									Nodejs. With the use of vanilla javascript, random rent,
									frequency periods, rent amount and dates, are produced and
									accessed by the front end. The front end was built using REACT
									library. Front and back end were tested using Jest and enzyme
									libraries.
								</p>
							</div>
							<div className="link-box">
								<a
									href="https://github.com/andresrgallo/unique-app"
									target="_blank"
									style={{ paddingRight: 10 }}
									rel="noopener noreferrer"
								>
									Github
								</a>
								<a
									href="https://unique-realestate.netlify.com/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Website
								</a>
								<a className="popup-modal-dismiss">Close</a>
							</div>
						</div>
						{/* modal-04 End */}
					</div>{' '}
					{/* row End */}
				</section>
			</React.Fragment>
		);
	}
}
