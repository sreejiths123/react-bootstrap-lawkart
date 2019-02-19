import React, {Component} from 'react';
import {  Image } from 'react-bootstrap';

import './Home.css';
import './css/style.css';

class Benefits extends Component{
	
	
	constructor(props){
		super(props);
		
		this.state ={
			
			
		}
		
	}
	
	
	render(){
		
		return (
				<section className="home-benefits">
    <div className="container">
        <div className="section-heading">
            <h1>We are focusing on your benefits</h1>
            <p>if you want extra benefits please take our pramium sceme</p>
        </div>
        <div className="row">
            <div className="benefits col-md-4">
                <div className="benefits-icon">
					<Image src="assets/benefits/time.png" />
                </div>
                <div className="benefits-title">
                    <h2>Save Time</h2>
                </div>
                <div className="benefits-description">
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam </p>
                </div>
            </div>
            <div className="benefits col-md-4">
                <div className="benefits-icon">
					<Image src="assets/benefits/money.png" />                
                </div>
                <div className="benefits-title">
                    <h2>Save Money</h2>
                </div>
                <div className="benefits-description">
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam </p>
                </div>
            </div>
            <div className="benefits col-md-4">
                <div className="benefits-icon">
					<Image src="assets/benefits/mind.png" />                    
                </div>
                <div className="benefits-title">
                    <h2>Peace Mind</h2>
                </div>
                <div className="benefits-description">
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam </p>
                </div>
            </div>
        </div>
    </div>
</section>
	
		);
	}
}
export default Benefits;