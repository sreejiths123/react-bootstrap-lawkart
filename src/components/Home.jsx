import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';
import './css/style.css';

export default class Home extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h2>Welcome to LawOffice</h2>
          <p>We will solve all your leagal problems
instently, get answer faster</p>
          <Link to="/about">
            <Button bsStyle="primary">Learn More</Button>
          </Link>
        </Jumbotron>
		 <Jumbotron className="show-grid text-center">
         
          <h2>SignUp and ask questions, For free</h2>
		   <h4>if you want extra benefits please take our pramium sceme</h4>
          <Link to="/signup">
            <Button bsStyle="primary">Get Started</Button>
          </Link>
        </Jumbotron>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person-1.jpg" circle className="profile-pic"/>
            <h3>Frank</h3>
            <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person-2.jpg" circle className="profile-pic"/>
            <h3>Vanessa</h3>
            <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person-3.jpg" circle className="profile-pic"/>
            <h3>Riff</h3>
            <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
          </Col>
        </Row>
		
		<section class="home-services">
    <div class="container">
        <div class="section-heading">
            <h1>We are covering all leagal areas</h1>
            <p>if you want extra benefits please take our pramium sceme</p>
        </div>
        <div class="row">
            <div class="col-md-3 services-box">
                <a href="">
                <div class="services-icon">
                    <img src="assets/services/Leagal-service.png" alt=""/>
                </div>
                <div class="services-name">
                    <h2>Leagal Service</h2>
                </div>
                </a>
            </div>
            <div class="col-md-3 services-box">
                <a href="">
                <div class="services-icon">
                    <img src="assets/services/Civil-courts.png" alt=""/>
                </div>
                <div class="services-name">
                    <h2>Civil Court</h2>
                </div>
                </a>
            </div>
            <div class="col-md-3 services-box">
                <a href="">
                <div class="services-icon">
                    <img src="assets/services/Criminal-coart.png" alt=""/>
                </div>
                <div class="services-name">
                    <h2>Criminal Court</h2>
                </div>
                </a>
            </div>
            <div class="col-md-3 services-box">
                <a href="">
                <div class="services-icon">
                    <img src="assets/services/Banking-tribunal.png" alt=""/>
                </div>
                <div class="services-name">
                    <h2>Banking Tribunals</h2>
                </div>
                </a>
            </div>
            <div class="col-md-3 services-box">
                <a href="">
                <div class="services-icon">
                    <img src="assets/services/Motor-vehicle.png" alt=""/>
                </div>
                <div class="services-name">
                    <h2>Motor Vehicle Tribunals</h2>
                </div>
                </a>
            </div>
            <div class="col-md-3 services-box">
                <a href="">
                <div class="services-icon">
                    <img src="assets/services/Company-tribunals.png" alt=""/>
                </div>
                <div class="services-name">
                    <h2>Company Tribunals</h2>
                </div>
                </a>
            </div>
            <div class="col-md-3 services-box">
                <a href="">
                <div class="services-icon">
                    <img src="assets/services/Income-tax.png" alt=""/>
                </div>
                <div class="services-name">
                    <h2>Income Tax Tribunals</h2>
                </div>
                </a>
            </div>
            <div class="col-md-3 services-box">
                <a href="">
                <div class="services-icon">
                    <img src="assets/services/Green-tribunals.png" alt=""/>
                </div>
                <div class="services-name">
                    <h2>Green Tribunals</h2>
                </div>
                </a>
            </div>
        </div>
    </div>
</section>
      </Grid>
    )
  }
}
