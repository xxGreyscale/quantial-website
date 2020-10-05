import { Link } from "gatsby"
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import "./header.css"
import PropTypes from "prop-types"
import React from "react"
import { Container } from "react-bootstrap"

const Header = ({ siteTitle }) => (
  <header
  >
    <Navbar className="py-4" bg="transparent" expand="lg" fixed="top">
    <Container>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" activeKey="/home">
        <Nav.Item>
          <Nav.Link as='li'>
          <Link to="/">{siteTitle}</Link>      
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" as='li'>
          <Link to="/page-2/">About</Link>
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" as='li'>
          <Link to="/">Partners</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" as='li'>
          <Link to="/">Contacts</Link>
          </Nav.Link>
        </Nav.Item>
      </Nav>
      </Navbar.Collapse>
    </Container>
</Navbar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
