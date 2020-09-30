import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "gatsby"
import "../components/pages-style/home.css"
import { Container } from "react-bootstrap"


import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
    className="home carousel">
     <Container className="h-100 w-100">
     <div className="d-flex h-100 align-items-center">
       <div className="d-block">
       <h1 className="my-1">
          Experienced.
        </h1>
        <h1 className="my-1 light-blue">
        professional.
        </h1>
        <h1 className="my-1">
        Purpose-drived.
        </h1>
       <div className="subtitle my-3">
         <p className="pt-3">
           We bring <b>Proven, unique blend of business, quantitative and <br /> and technological skills</b> to the industry
         </p>
       </div>
       <div className="d-inline-block my-2">
       <button type="button" class="btn btn-lg btn-outline-light text-white">
         OUR SERVICES
       </button>

       <button type="button"  id="work_with_us" class="btn btn-light btn-lg primary-color mx-3">
         WORK WITH US
       </button>
       </div>
       </div>
      </div>
     </Container>

    </div>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
