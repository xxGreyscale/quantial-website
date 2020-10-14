import Layout from "../components/layout";
import React from "react"
import { Container } from "react-bootstrap"
import SEO from "../components/seo"


const contact = () => (
    <Layout>
            <SEO title="Contact Us" />

<div
    className="solutions carousel">
     <Container className="h-100 w-100">
     <div className="d-flex h-100 align-items-center">
       <div className="d-block w-100">
         <div className="row">
           <div className="col">
              <h1 className="my-0">
                Get
              </h1>
              <h1 className="m-0">
              In Touch
              </h1>
            <div className="subtitle my-3">
              <p className="pt-3 description">
                We are your solution.
              </p>
            </div>
           </div>
           <div className="col">
           <div className="d-flex w-100 justify-content-end">
            <div className="d-block quick-nav-container text-lg-right">
            <span className="secondary quick-nav title font-weight-bold">
                CONTACTS
                </span>
                <ul className="mt-4 font-weight-normal">
                  <li className="my-1">
                  6th Floor, Tanzanite Park,<br /> Old Bagamoyo Road,<br />
                    Dar es Salaam, TANZANIA

                  </li>
                  <li className="my-1">
                    PHONE:<br />
                    +255 785 083 324
                  </li>
                  <li className="my-1">
                    EMAIL:<br />
                    INFO@QUANTIAL.SOLUTIONS
                  </li>
                  <li className="my-1">
                    WEBSITE:<br />
                    WWW.QUANTIAL.SOLUTIONS
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

    <section className="content">
        <Container>
            <div className="w-50 d-block">
                <h2 className="divider">
                        write us
                </h2>

                <p className="para-1">
                    Write us and we will get back to as soon as possible. Or call by the contacts provided on the right.
                </p>
            </div>
        </Container>
    </section>

    </Layout>
)

export default contact;