import React from "react"
import "./footer.css"
import { Container } from "react-bootstrap"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const Footer = () => {
  return (
    <footer
      style={{
        marginTop: `2rem`,
      }}
    >
      <Container className="h-100 py-5">
        <div className="d-flex h-100 align-items-center py-5">
          <div className="d-block py-5">
            <h4 className="underline text-white m-0">
              Quantial technology solutions
            </h4>

            <p className="description text-white m-0">
              Innovative, Professional IT <br />
              Solutions for every business
            </p>
          </div>
        </div>
      </Container>
      <div className="d-flex justify-contents-end bg-light py-3 ">
        <div className="container-lg w-100">
          <Row
            direction="horizontal"
            gap={2}
            className="py-2 font-weight-bold w-100"
            style={{ fontSize: "0.725rem" }}
          >
            <Col xs={12} lg={6} className="px-lg-0">
              © {new Date().getFullYear()}, Quantial Technology solutions. All
              Rights Reserved.
            </Col>
            <Col
              xs={12}
              lg={6}
              className="ms-lg-auto py-2 px-lg-0 d-lg-flex justify-content-end"
            >
              Designed and developed by{" "}
              <a href="https://madebysalinastic.xyz">madebysalinastic.xyz</a>
            </Col>
          </Row>
        </div>
      </div>
    </footer>
  )
}

export default Footer
