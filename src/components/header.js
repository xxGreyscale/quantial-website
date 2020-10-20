import { Link } from "gatsby"
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import "./header.css"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { Container } from "react-bootstrap"
import BrandLogo from "../images/assets/quantial-white-sm.png";



const Header = ({ siteTitle }) => {

  const [navbar,setNavbar] = useState(false);
  const changeBackground = () => {
    if(window.scrollY >= 90) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }
  
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', changeBackground)
  }

  return (<header
  >
    <Navbar className={navbar ? 'navbar nav-scrolled' : 'navbar'} expand="lg" fixed="top">
    <Container>
      <Navbar.Brand href="/">
        <img src={BrandLogo} alt="quantial white logo" height="60" className="m-0" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto" activeKey="/home">
        <Nav.Item>
          <Nav.Link as='li'>
          <Link activeClassName="active" to="/quantial-solutions/">Solutions</Link>      
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" as='li'>
          <Link activeClassName="active" to="/about/">About</Link>
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" as='li'>
          <Link activeClassName="active" to="/partners/">Partners</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" as='li'>
          <Link activeClassName="active" to="/contact/">Contact Us</Link>
          </Nav.Link>
        </Nav.Item>
      </Nav>
      </Navbar.Collapse>
    </Container>
</Navbar>
  </header>)
}



Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
