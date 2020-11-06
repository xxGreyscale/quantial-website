import React from "react"
import { Container } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/pages-style/partners.css"
import Logos from "../components/logos"



const Partners = () => (
    <Layout>
            <SEO title="Partners" />

            <div className="partners carousel">
            <Container className="h-100 w-100">
                <div className="d-flex h-100 align-items-center">
                    <div className="d-block pb-3 carousel-content w-100">
                        <div className="row">
                            <div className="col">
                                <h1 className="my-0">
                                OUR <br /> PARTNERS
                                </h1>
                                <div className="subtitle my-3">
                                <p className="pt-3 description">
                                    Experts with passion and <br /> knowledge
                                    of the industry
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           
        </Container>

    </div>

    <section id="how_we_work" className="content">
      <Container>
        <div className="d-block w-100 mx-auto">
          <h2 className="divider">
              technology partners
          </h2>

          <div className="row w-100 ml-lg-n4 ml-md-0 ml-n2 mt-4 justify-content-center">
          <Logos />
          </div>
        </div>
      </Container>
    </section>
    
    </Layout>

)

export default Partners;