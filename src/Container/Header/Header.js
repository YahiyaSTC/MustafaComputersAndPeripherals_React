import React, { useEffect, useState } from "react";
import {
  Navbar,
  Container,
  NavDropdown,
  Nav
} from "react-bootstrap";
import {NavLink} from 'react-router-dom'
import Logo from '../../assets/Images/logo.png'
import "bootstrap/dist/css/bootstrap.min.css";
import './Header.css'

function Header() {

  const [state , setState] = useState('transparent')

  const  listenScrollEvent = (e) => {
     if (window.scrollY > 400) {
      setState({backgroundColor: '#03bde6 !important'})
    } else {
      setState({backgroundColor:'transparent'})
    }
  }

  useEffect(() => {window.addEventListener('scroll',listenScrollEvent)},[])
  return (
    <header className="header">
      <Navbar expand="lg" fixed='top' className={state} >
        <Container >
          <Navbar.Brand ><img src={Logo}  /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 d-flex justify-content-end w-100"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink to="#WhyUs">Why Us</NavLink>
              <NavLink to="#Products">Products</NavLink>             
              <NavLink to="#Contacts">Contacts</NavLink>             
            </Nav>
           
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
