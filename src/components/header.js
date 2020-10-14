import { Link } from "gatsby"
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import "./header.css"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { Container } from "react-bootstrap"


function NavbarColor () {
  
}


const Header = ({ siteTitle }) => {

  const [navbar,setNavbar] = useState(false);
  const changeBackground = () => {
    console.log(window.scrolly)
    if(window.scrollY >= 90) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }
  
  window.addEventListener('scroll', changeBackground)


  return (<header
  >
    <Navbar className={navbar ? 'navbar active' : 'navbar'} expand="lg" fixed="top">
    <Container>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" activeKey="/home">
        <Nav.Item>
          <Nav.Link as='li'>
          <Link to="/quantial-solutions/">{siteTitle}</Link>      
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" as='li'>
          <Link to="/about/">About</Link>
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" as='li'>
          <Link to="/partners/">Partners</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" as='li'>
          <Link to="/contact/">Contacts</Link>
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
