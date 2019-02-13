import React, { Component } from 'react'
import { Navbar, Nav, NavItem,DropdownButton,MenuItem ,NavDropdown} from 'react-bootstrap';
import { Link ,withRouter} from 'react-router-dom';
import './CustomNavbar.css'
import auth0Client from './Auth';

function CustomNavbar(props) {
	
	
  const signOut = () => {
    auth0Client.signOut();
    props.history.replace('/');
  };

 
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">LawOffice</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
              Home
            </NavItem>
            <NavItem eventKey={2} componentClass={Link} href="/about" to="/about">
              About
            </NavItem>
            <NavItem eventKey={3} componentClass={Link} href="/news" to="/news">
              News
            </NavItem>
			 <NavItem eventKey={4} componentClass={Link} href="/" to="/">
               <NavDropdown id="nav_legal_service" title="Legal Service">
				  <NavItem href="/books">Books</NavItem>
				  <NavItem href="/podcasts">Podcasts</NavItem>
				  <NavItem href="/">Tech I Like</NavItem>
				  <NavItem componentClass={Link} href="/about" to="/about">About me</NavItem>
				  <NavItem href="/addBlog">Add a Blog</NavItem>
			</NavDropdown>
			<Navbar.Toggle />
            </NavItem>
			<NavItem eventKey={5} >
				{
					!auth0Client.isAuthenticated() &&
					<button className="btn btn-dark" onClick={auth0Client.signIn}>Sign In</button>
				  }
				  {
					auth0Client.isAuthenticated() &&
					<div>
					  <label className="mr-2 text-white">{auth0Client.getProfile().name}</label>
					  <button className="btn btn-dark" onClick={() => {signOut()}}>Sign Out</button>
					  <NavItem eventKey={6} componentClass={Link} href="/admin" to="/admin">
					    <button className="btn btn-dark" >Admin</button>
					  </NavItem>	
					</div>
				  }
			</NavItem>
          </Nav>

        </Navbar.Collapse>
      </Navbar>
    )
  
}
export default withRouter(CustomNavbar);