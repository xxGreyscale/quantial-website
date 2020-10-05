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
       <h1 className="my-0">
          Experienced.
        </h1>
        <h1 className="m-0 light-blue">
        professional.
        </h1>
        <h1 className="m-0">
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
    <div className="sponsor-banner">
    </div>

    <section id="about_us" className="content">
      <Container>
        <div className="d-block w-100 mx-auto">
            <h2 className="divider">
              About us
            </h2>
          <div className="row mx-0">
            <div className="col-12 col-lg-4 pl-lg-0">
            <p className="my-3 pl-0 pr-0 para-2">
            Quantial is a fully Tanzanian IT solutions provider with the vision of helping businesses use technology to effectively grow, manage, and protect their day-today operations. <br /> <br />
            </p>

            <p className="my-3 pl-0 pr-0 para-2">
            We recognize that IT is a critical element to the productivity and success of your business, that’s why our core mission is to make the complexities of IT simple and help businesses drive down costs.            </p>
            </div>
            <div className="col-12 col-lg-8">
             <div className="row mx-0">
             <div className="col-12 col-lg-5 pl-0 pr-0">
                {/* image here */}
                <p className="my-3 pl-0 pr-0 para-2 w-100">
                We assists in optimising resources by addressing the key technology risk markets.             
                </p>
              </div>

              <div className="col-12 col-lg-7 pl-3 pr-0">
                {/* image here */}
                <p className="my-3 pl-0 pr-0 para-2 w-100">
                Highly skilled professionals across all domains, who deliver solutions, that exceed our customer requirements.                </p>
              </div>
             </div>

             <p className="my-3 px-0 para-2 w-100">
             Our innovative approaches paired with a deep understanding of all aspects of the business workflow, 
             helps reduce risk in the system and drive significant capital and operational benefits for organizations.
            </p>
            </div>

          </div>
        </div>
      </Container>
    </section>
    
    <section id="quantial_value" className="content">
      <div className="row mx-0 w-100 px-0">
        <div className="col-12 col-lg-8">
          <div className="d-flex justify-content-center align-items-center w-100 h-100">
            <div className="d-block w-100">
              <h3 className="text-center mx-auto">
              “Quantial boasts unmatched technology<br /> skills, as well as 
              market-leading expertise<br /> and experience that creates a powerful <br />combination.” 
              </h3>
              <p className="font-weight-bold text-center my-3">
                  Quantial technology solutions values
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 w-100 col-lg-4 p-lg-0">
          <div className="unique-value-img w-100">
          {/* background image */}
          </div>
        </div>
      </div>
    </section>

    <section id="vision_n_aim" className="content">
      <div className="row mx-0 w-100 px-0">
        <div className="col-12 col-lg-4 p-lg-0">
          <div className="vision-img w-100">
          {/* background image */}
          </div>
        </div>
        <div className="col-12 w-100 col-lg-8 px-5">
          <div className="d-flex align-items-center mt-3 w-100 h-100">
            <div className="d-block mx-5 w-100">
              <h2 className="text-left divider">
                our vision &amp; mission
              </h2>
              <p className="text-left my-3 para-1">
                To be the most respected and successful 
                technology partner for the service-driven and technology industry in East Africa we are aiming :
              </p>

              <ol className="mt-4 w-75">
                <li>
                  To promote new uses of information technology
                </li>
                <li>
                  To service organizations and enable solutions that allow people and things to communicate efficiently
                </li>
                <li>
                  To embrace a culture that supports our team members, so they can provide exceptional service to our clients
                </li>
                <li>
                  To become trusted technology advisors by promoting and facilitating effective 
                  intergration of technology through consulting, planning, training and support
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section id="solution_overview" className="content">
      <Container>
        <div className="d-block w-100 mx-auto">
            <h2 className="divider">
              our solution overview
            </h2>

            <div className="row mt-4">
              <div className="col-12 col-md-6 col-lg-6">
                <div className="w-100 sol-overview-bg">
                  <div className="s-sol-bg h-100 w-100">

                  </div>
                </div>

                <div className="d-block pt-4">
                    <h4 className="text-center">
                      Security solutions
                    </h4>

                    <p className="para-1">
                      From assessment, support and IT consulting to process improvement, 
                      training and implementation, our security services bring you the best services to counter cyber attack and data breaches.
                    </p>
                  </div>

              </div>

              <div className="col-12 col-md-6 col-lg-6">
              <div className="w-100 sol-overview-bg">
                  <div className="it-sol-bg h-100 w-100">

                  </div>
                </div>

                <div className="d-block pt-4">
                    <h4 className="text-center">
                      Managed it solution
                    </h4>

                    <p className="para-1">
                    An efficient way to stay up to date on technology, have access to 
                    necessary skills and address a range of issues related to cost, quality of service and risk.
                    </p>
                  </div>

              </div>

              <div className="col-12 col-md-6 col-lg-6 mt-4">
                
              <div className="w-100 sol-overview-bg">
                  <div className="dp-sol-bg h-100 w-100"></div>
              </div>

                <div className="d-block pt-4">
                    <h4 className="text-center">
                      Data protection
                    </h4>

                    <p className="para-1">
                      We help you establish a holistic view of your sensitive
                      data, helping you avoid data leaks and minimise the risk of compromisation or loss
                    </p>
                  </div>
              </div>

              <div className="col-12 col-md-6 col-lg-6 mt-4">
                <div className="w-100 sol-overview-bg">
                    <div className="ns-sol-bg h-100 w-100"></div>
                </div>

                <div className="d-block pt-4">
                    <h4 className="text-center">
                      Network solutions
                    </h4>

                    <p className="para-1">
                      We optimise your connectivity in a way that matches your budget and makes the most business sense for
                      you. Read more…
                    </p>
                  </div>
              </div>
            </div>

        </div>
      </Container>
    </section>
    
    <section id="how_we_work" className="content pt-0">
      <Container>
        <div className="d-block w-100 mx-auto">
          <h2 className="divider">
              How we work
          </h2>

          <ol className="mt-5 row">
                <li className="col">
                  <div className="w-100">
                    <h4 className="text-black">
                    IMPLEMENT &amp; SUPPORT
                    </h4>
                    <p className="para-2 w-100">
                    Our engineers will deploy a solution that is just right for your business. We provide complete project management 
                    and implementation 
                    services. We offer flexible, cost-effective and risk managed outsourced IT services.
                    </p>
                  </div>
                </li>
                <li className="col">
                <div className="w-100">
                    <h4 className="text-black">
                      evaluate
                    </h4>
                    <p className="para-2 w-100">
                    Our IT architects and engineers assess and evaluate the strengths and weaknesses of 
                    your IT and communications infrastructure. They use this information to better understand your requirements.
                    </p>
                  </div>
                </li>

                <li className="col">
                  <div className="w-100">
                   <h4 className="text-black">
                    design &amp; develop
                    </h4>
                    <p className="para-2 w-100">
                    Our team members will recommend an IT strategy that meets your 
                    business needs, using industry best practice principles and design architecture.
                    </p>
                  </div>
                </li>
              </ol>
        </div>
      </Container>
    </section>
    
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
