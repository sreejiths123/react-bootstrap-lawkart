import React, {Component} from 'react';
import './Home.css';
import './css/style.css';
import { Carousel,Image } from 'react-bootstrap';


class Testimonials extends Component{
	
	
	constructor(props){
		super(props);
		
		this.state ={
			
			
		}
		
	}
	
	
	render(){
		
		return (
				<section className="home-testimonials">
    <div className="container">
        <div className="section-heading">
            <h1>People Said</h1>
            <p>if you want extra benefits please take our pramium sceme</p>
        </div>
        <div className="row">
         
           
        
<div className="col-md-12">

<Carousel interval="1000" className="carousel slide carousel-fade">
 <Carousel.Item>
  
	<div className="carousel-item active">
                <div className="col-md-6 margin-center">
                    <div className="testimonial-box">
                        <div className="testimonial-text">
                            <p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam</p>
                        </div>
                        <div className="testimonial-footer">
                            <div className="testimonial-icon">
                                <Image src="assets/testimonial/01.jpg" alt=""/>
                            </div>
                            <div className="testimonial-name">
                                <h3>Jone Mine</h3>
                                <span>HC Advisers</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
	
 </Carousel.Item>
 
 <Carousel.Item>
  
	<div className="carousel-item active">
                <div className="col-md-6 margin-center">
                    <div className="testimonial-box">
                        <div className="testimonial-text">
                            <p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam</p>
                        </div>
                        <div className="testimonial-footer">
                            <div className="testimonial-icon">
                                  <Image src="assets/testimonial/01.jpg" alt=""/>
                            </div>
                            <div className="testimonial-name">
                                <h3>Jone Mine</h3>
                                <span>HC Advisers</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
	
 </Carousel.Item>
  <Carousel.Item>
  
	<div className="carousel-item active">
                <div className="col-md-6 margin-center">
                    <div className="testimonial-box">
                        <div className="testimonial-text">
                            <p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam</p>
                        </div>
                        <div className="testimonial-footer">
                            <div className="testimonial-icon">
                                  <Image src="assets/testimonial/01.jpg" alt=""/>
                            </div>
                            <div className="testimonial-name">
                                <h3>Jone Mine</h3>
                                <span>HC Advisers</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
	
 </Carousel.Item>
</Carousel>
       
</div>

        </div>
    </div>
</section>
		);
	}
}
export default Testimonials;