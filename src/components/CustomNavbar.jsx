import React, { Component } from 'react'
import { Navbar, Nav, NavItem,DropdownButton,MenuItem ,NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css'

export default class CustomNavbar extends Component {
  render() {
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
          </Nav>

        </Navbar.Collapse>
      </Navbar>
    )
  }
}
