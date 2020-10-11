import React from "react"
import { Link } from "gatsby"
import "../components/pages-style/solutions.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from "react-bootstrap"


const SecondPage = () => (
  <Layout>
        <div
    className="solutions carousel">
     <Container className="h-100 w-100">
     <div className="d-flex h-100 align-items-center">
       <div className="d-block w-100">
         <div className="row">
           <div className="col">
              <h1 className="my-0">
                our
              </h1>
              <h1 className="m-0">
              solutions
              </h1>
            <div className="subtitle my-3">
              <p className="pt-3 description">
              Focus on your business. <br />
              Let us handle your IT.
              </p>
            </div>
           </div>
           <div className="col">
           <div className="d-flex w-100 justify-content-end">
            <div className="d-block quick-nav-container text-lg-right">
            <span className="secondary quick-nav title font-weight-normal">
                  Quick Nav:
                </span>
                <ul className="quick-nav mt-4">
                  <li className="quick-nav item">
                    security solutions
                  </li>
                  <li className="quick-nav item">
                    managed it solutions
                  </li>
                  <li className="quick-nav item">
                    network solutions
                  </li>
                  <li className="quick-nav item">
                    data backup &amp; recovery
                  </li>

                </ul>
            </div>

      </div>
           </div>
         </div>
       </div>
      </div>
           
     </Container>

    </div>
  
        <section id="s-sol" className="content">
          <Container>
          <h2 className="divider mb-4">
            security solutions
          </h2>
          </Container>
          <div className="solution-content">
          <div className="s-sol-bg w-100">

          </div>
          </div>
          <Container>
            <p className="w-65">
            At Quantial, we have experience in providing implementation , support, managed, and fully outsourced security services to organisations.
            We have deep and longstanding relationships with leaders in security technology and can offer a truly multi-vendor solution. Our expertise 
            extends to securing the data centre, corporate network, and communications environments. 
            We also provide security awareness training to ensure employee awareness compliance.
            </p>
          </Container>
        </section>
  </Layout>
)

export default SecondPage
