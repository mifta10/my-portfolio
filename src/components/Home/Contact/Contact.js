import React, { useEffect } from 'react';
import './Contact.css';
import emailjs from "emailjs-com";
import Aos from 'aos'
import 'aos/dist/aos.css'

const Contact = () => {

	function sendEmail(e) {
		e.preventDefault();

		emailjs.sendForm('service_0a3mh69', 'template_s5fokhc', e.target, 'user_RaTM1axNdPQPmcyXUjs1l')
			.then((result) => {
				console.log(result.text);
			}, (error) => {
				console.log(error.text);
			});
		alert('Your Message Successfully Send')
		e.target.reset()
	}

	useEffect(() => {
		Aos.init({ duration: 2000 })
	}, [])

	return (
		<section id="contact" class="section_padding">
			<div class="container" data-aos="zoom-in">
				<div class="col-md-12 col-sm-12-col-xs-12">
					<div class="section_heading text-center">
						<strong>Touch</strong>
						<h2>Get In Touch</h2>
						<p>
							Do You Have Any Queries About Me?
							Fell Free to Contact With Me.I'm Always There to Response You
						</p>
						<div class="sm_border"></div>
					</div>
				</div>

				<div class="row">
					<div class="col-md-7 col-sm-12">
						<form id="contact-form" method="post" onSubmit={sendEmail} enctype="multipart/form-data">
							<div class="row">
								<div class="input_padding text-center">
									<div class="form-group col-sm-12">
										<input type="text" name="name" class="form-control" id="first-name" placeholder="Name *" required="required" />
									</div>
									<div class="form-group col-sm-6">
										<input type="email" name="email" class="form-control" id="email" placeholder="Email *" required="required" />
									</div>
									<div class="form-group col-sm-6">
										<input type="text" name="subject" class="form-control" id="subject" placeholder="Subject *" required="required" />
									</div>
									<div class="form-group col-sm-12 mab-none">
										<textarea rows="8" name="message" class="form-control" id="description" placeholder="Your Message Here ..." required="required"></textarea>
									</div>
									<div class="form-group mb0 col-sm-12">
										<div class="actions">
											<button type="submit" value="Send message" name="submit" id="submitButton" class="btn btn-lg main_btn btn_shadow" title="Submit Your Message!">Send Message</button>
										</div>
									</div>
								</div>
							</div>
						</form>
					</div>

					<div class="col-md-5 col-sm-12">
						<div class="contact_widget_area">
							<div class="contact_info">
								<i class="fa fa-home"></i>
								<div class="contact_info_text">
									<h5>Home</h5>
									<p>Doshghor,Bishwanath, Sylhet-3100<br></br>Bangladesh
									</p>
								</div>
							</div>

							<div class="contact_info">
								<i class="fa fa-phone"></i>
								<div class="contact_info_text">
									<h5>Phone</h5>
									<p>+8801757110249</p>
									<p>+8801705237256</p>
								</div>
							</div>

							<div class="contact_info">
								<i class="fa fa-envelope"></i>
								<div class="contact_info_text">
									<h5>Email</h5>
									<p>miftauddinkhan01@gmail.com</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

	);
};
export default Contact;