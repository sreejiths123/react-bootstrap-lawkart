import React, {Component} from 'react';
import './Home.css';
import './css/style.css';

class Statistics extends Component{
	
	
	constructor(props){
		super(props);
		
		this.state ={
			
			
		}
		
	}
	
	
	render(){
		
		return (
				<section className="home-footer-strip">
					<div className="container">
							<div className="row">
								<div className="col-md-4">
									<div className="counter-label"> <span className="counter" data-count="635">635</span> Questions</div>
								</div>
								<div className="col-md-4">
									<div className="counter-label"> <span className="counter" data-count="600">600</span> Answers</div>
								</div>
								<div className="col-md-4">
								   <div className="counter-label"> <span className="counter" data-count="150">150</span> Articles</div>
								</div>
							</div>
						</div>
			</section>
		);
	}
}
export default Statistics;