import React, {Component} from 'react';
import './Home.css';
import './css/style.css';

class FrequentlyAsked extends Component{
	
	
	constructor(props){
		super(props);
		
		this.state ={
			
			
		}
		
	}
	
	
	render(){
		
		return (
				<section className="home-questions">
		<div className="container">
			<div className="row">
			<div className="col-md-5">
				<div className="freequently-asking">
				<h1>Freequently Asking</h1>
				<p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system</p>
				</div>
			</div>
			<div className="col-md-7">
				<div className="home-questions-hover-box">
					<div className="question-arrow up"></div>
					<div className="question-box">

						<div className="question">
							<div className="question-text">
								<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores? </p>
							</div>
							<div className="question-right">
								<div className="preview-button">
									<button className="btn btn-blue">Preview Answer</button>
								</div>
								<div className="rating">
									<span className="fa fa-star" data-rating="1"></span>
									<span className="fa fa-star" data-rating="1"></span>
									<span className="fa fa-star" data-rating="1"></span>
									<span className="fa fa-star-o" data-rating="1"></span>
									<span className="fa fa-star-o" data-rating="1"></span>
								</div>
							</div>
						</div>

						<div className="question">
							<div className="question-text">
								<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores? </p>
							</div>
							<div className="question-right">
								<div className="preview-button">
									<button className="btn btn-blue">Preview Answer</button>
								</div>
								<div className="rating">
									<span className="fa fa-star" data-rating="1"></span>
									<span className="fa fa-star" data-rating="1"></span>
									<span className="fa fa-star" data-rating="1"></span>
									<span className="fa fa-star-o" data-rating="1"></span>
									<span className="fa fa-star-o" data-rating="1"></span>
								</div>
							</div>
						</div>

						<div className="question">
							<div className="question-text">
								<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores? </p>
							</div>
							<div className="question-right">
								<div className="preview-button">
									<button className="btn btn-blue">Preview Answer</button>
								</div>
								<div className="rating">
									<span className="fa fa-star" data-rating="1"></span>
									<span className="fa fa-star" data-rating="1"></span>
									<span className="fa fa-star" data-rating="1"></span>
									<span className="fa fa-star-o" data-rating="1"></span>
									<span className="fa fa-star-o" data-rating="1"></span>
								</div>
							</div>
						</div>

						<div className="question">
							<div className="question-text">
								<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores? </p>
							</div>
							<div className="question-right">
								<div className="preview-button">
									<button className="btn btn-blue">Preview Answer</button>
								</div>
								<div className="rating">
									<span className="fa fa-star" data-rating="1"></span>
									<span className="fa fa-star" data-rating="1"></span>
									<span className="fa fa-star" data-rating="1"></span>
									<span className="fa fa-star-o" data-rating="1"></span>
									<span className="fa fa-star-o" data-rating="1"></span>
								</div>
							</div>
						</div>

					</div>
					<div className="question-arrow down"> </div>
				</div>
			</div>
			</div>
		</div>
	</section>
	
		);
	}
}
export default FrequentlyAsked;