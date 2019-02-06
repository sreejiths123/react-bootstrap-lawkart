import React, { Component,Form ,Button,Redirect} from 'react'
import { Navbar, Nav, NavItem,DropdownButton,MenuItem ,NavDropdown,Grid,Jumbotron} from 'react-bootstrap';
import { Link,withRouter} from 'react-router-dom';
import './css/style.css';
import './css/mdb.css';

 class Signup extends Component {
	
	constructor(props){
		super(props);
		
		this.state={
			fields:{
				name  :'',
				email :'',
				mobile:'',
				password:'',
				repassword:''
			},
			errors:{
					
			}
		};		
	
	 this.handleChange = this.handleChange.bind(this);
	 this.handleSubmit = this.handleSubmit.bind(this);
	 
	}
	
	handleChange(e) {
		  let fields = this.state.fields; 
		  fields[e.target.name] = e.target.value;
		  this.setState({
			fields
		  });

    }
	
	 handleSubmit(event) {
	
		event.preventDefault();
      if (this.validateForm()) {
          let fields = {};
          fields["username"] = "";
          fields["emailid"] = "";
          fields["mobileno"] = "";
          fields["password"] = "";
          this.setState({fields:fields});
          alert("Form submitted");
		     this.props.history.push("/");
		}
	  }
	  
	  
	validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      if (!fields["name"]) {
        formIsValid = false;
        errors["name"] = "*Please enter your username.";
      }

      if (typeof fields["name"] !== "undefined") {
        if (!fields["name"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["name"] = "*Please enter alphabet characters only.";
        }
      }

      if (!fields["email"]) {
        formIsValid = false;
        errors["email"] = "*Please enter your email-ID.";
      }

      if (typeof fields["email"] !== "undefined") {
        //regular expression for email validation
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(fields["email"])) {
          formIsValid = false;
          errors["email"] = "*Please enter valid email-ID.";
        }
      }

      if (!fields["mobile"]) {
        formIsValid = false;
        errors["mobile"] = "*Please enter your mobile no.";
      }

      if (typeof fields["mobile"] !== "undefined") {
        if (!fields["mobile"].match(/^[0-9]{10}$/)) {
          formIsValid = false;
          errors["mobile"] = "*Please enter valid mobile no.";
        }
      }

      if (!fields["password"]) {
        formIsValid = false;
        errors["password"] = "*Please enter your password.";
      }

      if (typeof fields["password"] !== "undefined") {
        if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
          formIsValid = false;
          errors["password"] = "*Please enter secure and strong password.";
        }
      }

      this.setState({
        errors: errors
      });
      return formIsValid;


    }  
	  
	render(){
		
		return(
		
			<form onSubmit={this.handleSubmit} method="post" > 
			
				<section className="mt-3">
				<div className="container">
				<div className="row justify-content-md-center">
					
					<div className="card login" id="register">
				
						
						<div className="header pt-3 peach-gradient">
				
							<div className=" justify-content-center">
								<h3 className="white-text mb-3 pt-3 font-bold">Sign Up</h3>
							</div>
				
							<div className="row mt-2 mb-3 d-flex justify-content-center">
								
								<a className="icons-sm fb-ic"><i className="fa fa-facebook white-text fa-lg"> </i></a>
								
								<a className="icons-sm tw-ic"><i className="fa fa-twitter white-text fa-lg"> </i></a>
								
								<a className="icons-sm gplus-ic"><i className="fa fa-google-plus white-text fa-lg"> </i></a>
							</div>
				
						</div>
					
				
						<div className="card-body mx-4 mt-4">
				
						
							<div >
							<label >Your Name</label>
								<input type="text" name="name" value={this.state.fields.name} onChange={this.handleChange}  className="form-control"/>
								<div className="errorMsg">{this.state.errors.name}</div>
								
							</div>
							<div>
								<label >Your email</label>
								<input type="text" name="email" value={this.state.fields.email} onChange={this.handleChange} className="form-control"/>
								<div className="errorMsg">{this.state.errors.email}</div>
								
							</div>
							<div >
								<label >Your Mobile</label>
								<input type="text" name="mobile" value={this.state.fields.mobile} onChange={this.handleChange} className="form-control"/>
								<div className="errorMsg">{this.state.errors.mobile}</div>
								
							</div>
				
							<div >
							<label >Your password</label>
								<input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} className="form-control"/>
								<div className="errorMsg">{this.state.errors.password}</div>
								
							</div>

							<div >
							<label >Re-enter password</label>
								<input type="password" name="repassword" value={this.state.fields.repassword} onChange={this.handleChange} className="form-control"/>
								<div className="errorMsg">{this.state.errors.repassword}</div>
								
							</div>
				
				
							
							<div className="row d-flex align-items-center mb-4">
				
								
								<div className="col-md-1 col-md-5 d-flex align-items-start">
									<div className="text-center">
										
											<input  type="submit" className="btn btn-grey btn-rounded z-depth-1a" value="Register"/>
										
									</div>
								</div>
							
				
								
								<div className="col-md-7">
									<p className=" grey-text d-flex justify-content-end mt-3">I have an account? <a href="#" className="dark-grey-text ml-1 font-bold"> Log in</a></p>
								</div>
								
				
							</div>
							
						</div>
				
					</div>
					
				</div>
			</div>
			
		</section>
		

	</form>
		);
	}
}
export default withRouter(Signup);