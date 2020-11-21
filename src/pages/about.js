import React from "react"
import { Container } from "react-bootstrap"
import "../components/pages-style/about.css"
import uniqueBoat from "../images/unique-boats.jpg"
import SEO from "../components/seo"
import "../layouts/layout.css"




const About = () => (
    <div>
            <SEO title="About us" />
        <div className="about carousel">
            <Container className="h-100 w-100">
            <div className="d-flex h-100 align-items-center">
                <div className="d-block pb-3 w-100 carousel-content">
                    <div className="row">
                        <div className="col">
                            <h1 className="my-0">
                                ABOUT Quantial
                            </h1>
                            <h1 className="m-0">
                                Technology solutions
                            </h1>
                            <div className="subtitle my-3">
                            <p className="pt-3 description">
                                Get to know more about<br />
                                Quantial technology solutions.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </Container>

    </div>

    <section id="about_us" className="content">
      <Container>
        <div className="d-block w-100 w-lg-80 mx-auto">
            <h2 className="divider">
              About us
            </h2>

            <p className="para-1">
                Quantial is a fully Tanzanian IT solutions provider with the vision of helping businesses use technology 
                to effectively grow, manage, and protect their day-today operations. <br />
                We recognize that IT is a critical element to the productivity and success of your business, that’s why 
                our core mission is to make the complexities of IT simple and help businesses drive down costs.
            </p>

            <p className="para-1">
                At Quantial Solutions, we provide you world-class and highly satisfactory services across various 
                verticals like IT consulting, business technology, and software development. <br />
                We have highly skilled professionals across all domains, who deliver global standard solutions, 
                that exceed our customer requirements.
            </p>

            <p className="para-1">
                Quantial assists in optimising resources by addressing the key technology risk markets. <br /><br />
                Our innovative approaches paired with a deep understanding of all aspects of the business workflow, 
                helps reduce risk in the system and drive significant capital and operational benefits for organizations.
            </p>

        </div>

        <section className="content">
            <h3 className="text-center">
            “To be the most respected and successful technology partner for service-driven and technology industry in East Africa”
            </h3>
            <h4 className="text-black text-center">
                our vision
            </h4>
        </section>

        <section id="quantial_values" className="content">
            <div className="">
                <div className="row">
                    <div className="col-12 col-md-12 col-lg-5">
                        <img src={uniqueBoat} alt="unique and leading boat" className="w-100 shadow-sm"/>
                    </div>
                    <div className="col-12 col-md-12 col-lg-7">
                        <div className="h-100 d-flex align-items-center">
                            <h2>
                                The quintal vision brings a proven, unique blend of business, 
                                quantitative and technological skills to the industry.
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="content">
            <div className="d-block w-100 w-lg-80 mx-auto">
                <h2 className="divider">
                    Our mission
                </h2>
                <ol className="mt-4">
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
        </section>
      </Container>
    </section>
    

    </div>
)

export default About