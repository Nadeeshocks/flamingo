import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = () => (
	<footer>
		<Container fluid>
			<div className="divider">
					<div className="line"></div>
				<div>
					<Link to="/" className="flamingo-logo">
						<img src="/public/assets/images/flamingo.png" />
					</Link>
				</div>
					<div className="line"></div>
			</div>
			<div className="mt-5" />
			<Row>
				<Col sm="4">
					<div className="contacts">
						<p className="text-uc-10"> HAVE QUESTIONS? </p>
						<p className="text-uc-14"> FAQ </p>
						<p className="halp text-c-14 mb-1"> help@shopflamingo.com </p>
						<p className="phone text-c-14 mb-1"> 1-888-205-9655</p>
						<p className="press text-c-14 mb-1"> press@shopflamingo.com </p>
					</div>
				</Col>
				<Col sm="4">
					<div className="social-media mb-3">
						<i className="fab fa-facebook-f fa-lg fa-fw"></i>
						<i className="fab fa-instagram fa-lg fa-fw"></i>
					</div>
					<p style={{fontSize : '12px'}}>Flamingo and Flamingo design are trademarks and/or
							registered trademarks of Harry's, Inc. or its affiliates.
					</p>
				</Col>
				<Col sm="4">
					<p className= "text-c-14 mt-4">Careers</p>
					<p className= "text-c-14">Privacy Policy</p>
					<p className= "text-c-14">Terms of service</p>
				</Col>
			</Row>
		</Container>
	</footer>
);

export default Footer;