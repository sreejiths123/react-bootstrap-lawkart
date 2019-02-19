import React, {Component} from 'react';
import './Home.css';
import './css/style.css';

class Footer extends Component{
	
	
	constructor(props){
		super(props);
		
		this.state ={
			
			
		}
		
	}
	
	
	render(){
		
		return (
				
<footer>
    <div className="container">
        <div className="row">
            <div className="col-md-4">
                <h2>We Have 3000+ happy customers</h2>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam</p>
                <button className="btn btn-green">Try Now</button>
            </div>
            <div className="col-md-8"></div>
        </div>
    </div>
</footer>
		);
	}
}
export default Footer;