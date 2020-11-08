import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import scrollTo from 'gatsby-plugin-smoothscroll';

import "../components/pages-style/home.css"
import { Link } from "gatsby"

import { Container } from "react-bootstrap"

import { FiChevronRight } from "react-icons/fi";
import { FiChevronsDown } from "react-icons/fi";


import Layout from "../components/layout"
import Logos from "../components/logos"
import SEO from "../components/seo"
import HumanResources from '../images/assets/humanresources.png'
import SocialCare from '../images/assets/socialcare.png'
import Alaf from '../images/client_logo/alaf.png'
import Shanta from '../images/client_logo/shantagold.png'
import Muhimbili from '../images/client_logo/muhimbili.png'
import Tanesco from '../images/client_logo/tanesco.png'
import Bayport from '../images/client_logo/bayport.png'


const IndexPage = () => {
  let scrollLeftDistance = 0;

  const smoothScrollLeft = (element, distance) => {
    scrollLeftDistance += distance;
    element.scroll({left: scrollLeftDistance, behavior: "smooth"});
    if(element.scrollLeft === element.getBoundingClientRect().right) {
      scrollLeftDistance = 0;
    }
  }

  const onSeeMore = () => {
    const banner = document.getElementById("client_logos");
    console.log(banner.scrollLeft)
    const bannerEndPixel = banner.getBoundingClientRect().right;
    smoothScrollLeft(banner, bannerEndPixel/2);
  }

  return (
    <Layout>
      <SEO title="Home" />
      <div
      className="home carousel">
       <Container className="h-100 w-100">
       <div className="d-flex h-100 align-items-center">
         <div className="d-block carousel-content">
         <h1 className="my-0">
            Experienced.
          </h1>
          <h1 className="m-0 light-blue">
          professional.
          </h1>
          <h1 className="m-0">
          Purpose-drived.
          </h1>
         <div className="subtitle my-2">
           <p className="pt-3">
             We bring <b>Proven, unique blend of business, quantitative and <br /> and technological skills</b> to the industry
           </p>
         </div>
         <div className="d-inline-block my-3 my-lg-0">
         <a href="/quantial-solutions/">
           <button id="our_services" type="button" className="col-12 col-md-auto col-lg-auto btn btn-lg btn-outline-light text-white">
           OUR SERVICES
          </button>
           </a>
           <a href="/contact/">
         <button type="button"  id="work_with_us" className="col-12 col-md-auto col-lg-auto btn btn-light btn-lg primary-color mx-md-3 mx-lg-3 my-3 my-md-0 my-lg-0">
           WORK WITH US
         </button>
           </a>
         </div>
         </div>
        </div>
  
        <div id="scroll_button" className="d-block mx-auto w-100">
          <div className="d-block" >
            <span className="d-block text-center scroll-label" aria-hidden="true" onClick={() => scrollTo('#about_us')}>
              SCROLL DOWN
            </span>
            <div className="d-block mx-auto">
              <div className="scroll-container mx-auto" aria-hidden="true" onClick={() => scrollTo('#about_us')}>
                <FiChevronsDown className="d-flex d-justify-content-center scroll-down text-center" />
              </div>
            </div>
          </div>
        </div>
       </Container>
  
      </div>
      <div className="sponsor-banner">
        <div className="w-100 h-100 mx-auto px-md-2 px-lg-5">
          <div className="row mx-0 w-100 h-100">
            <div className="col-12 col-md-4 col-lg-3 h-100 my-auto">
              <div className="w-100 my-5 my-md-0 my-lg-0 h-100 d-lg-flex ">
                <span className="my-auto title align-content-center">
                  FOCUS ON YOUR BUSINESS. LET US HANDLE YOUR IT
                </span>
              </div>
            </div>
  
            <div className="col-12 my-2 mb-5 my-md-0 my-lg-0 col-md-8 col-lg-9 ">
              <div id="client_logos" className="d-inline-flex w-md-75 w-lg-85 align-items-center sponsors-logo banner-overflow">
                <img src={Alaf} alt="alaf logo" className="col my-0 mr-2 ml-0 d-lg-inline"/>
                <img src={Shanta} alt="alaf logo" className="col my-0 mx-3 px-4 d-lg-inline"/>
                <img src={Muhimbili} alt="alaf logo" className="col my-0 mx-3 px-4 d-lg-inline"/>
                <img src={Tanesco} alt="alaf logo" className="col my-0 mx-3 px-4 d-lg-inline"/>
                <img src={Bayport} alt="alaf logo" className="col my-0 ml-3 px-4 d-lg-inline"/>
              </div>

              <div className="h-100 my-3 my-md-auto my-lg-auto text-center text-md-right text-lg-right d-inline-flex see-all">
              <div onClick={onSeeMore} className="h-100 d-flex ml-md-2 ml-lg-4 my-auto align-items-center sponsors-logo">
                  <FiChevronRight className="fi-icons ml-auto d-lg-inline-block" />
                  <span className="ml-n2 d--inline-block">
                  see all
                  </span>
            </div>
              </div>
            </div>
  
            {/* <div className="h-100 py-lg-0 my-auto col-12 col-md-1 col-lg-2 px-1 text-center text-md-right text-lg-right see-all">
           
            </div> */}
  
          </div>
        </div>
      </div>
  
      <section id="about_us" className="content">
        <Container>
          <div className="d-block w-100 w-md-100 w-lg-80 mx-auto">
              <h2 className="divider">
                About us
              </h2>
            <div className="row mx-lg-0">
              <div className="col-12 col-lg-4 pl-lg-0">
              <p className="my-3 pl-lg-0 pr-lg-0 para-2">
              Quantial is a fully Tanzanian IT solutions provider with the vision of helping businesses use technology to effectively grow, manage, and protect their day-today operations. <br /> <br />
              </p>
  
              <p className="my-3 pl-0 pr-lg-0 para-2">
              We recognize that IT is a critical element to the productivity and success of your business, that’s why our core mission is to make the complexities of IT simple and help businesses drive down costs.            </p>
              </div>
              <div className="col-12 col-lg-8">
               <div className="row mx-0">
               <div className="col-12 col-lg-5 px-2 pl-lg-0 pr-lg-3">
                  {/* image here */}
                  <img src={SocialCare} alt="assist and social care" className="mt-3 mb-2" />
                  <p className="my-3 pl-0 pr-0 para-2 w-100">
                  We assists in optimising resources by addressing the key technology risk markets.             
                  </p>
                </div>
  
                <div className="col-12 col-lg-7 px-2 pl-lg-3 pr-lg-0">
                  {/* image here */}
                  <img src={HumanResources} alt="pool of skilled personel" className="mt-3 mb-2" />
                  <p className="my-3 pl-lg-0 pr-lg-0 para-2 w-100">
                  Highly skilled professionals across all domains, who deliver solutions, that exceed our customer requirements.                </p>
                </div>
               </div>
  
               <p className="my-3 px-lg-0 para-2 w-100">
               Our innovative approaches paired with a deep understanding of all aspects of the business workflow, 
               helps reduce risk in the system and drive significant capital and operational benefits for organizations.
              </p>
              </div>
  
            </div>
          </div>
        </Container>
      </section>
      
      <section id="quantial_value" className="content">
        <div className="row mx-0 w-100 px-0 flex-column-reverse flex-lg-row">
          <div className="col-12 col-lg-8">
            <div className="d-flex justify-content-center align-items-center w-100 h-100">
              <div className="d-block my-5 my-lg-0 w-100">
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
          <div className="col-12 w-100 col-lg-4 p-lg-0 order-sm-1">
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
          <div className="col-12 w-100 col-lg-8 px-3 px-lg-5">
            <div className="d-flex align-items-center mt-3 w-100 h-100">
              <div className="d-block mx-lg-5 my-5 my-lg-0 mx-3 w-100">
                <h2 className="text-left divider">
                  our vision &amp; mission
                </h2>
                <p className="text-left my-3 para-1">
                  To be the most respected and successful 
                  technology partner for the service-driven and technology industry in East Africa we are aiming :
                </p>
  
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
            </div>
          </div>
        </div>
      </section>
      
      <section id="solution_overview" className="content">
        <Container>
          <div className="d-block w-100 w-md-100 w-lg-80 mx-auto">
              <h2 className="divider mb-3 mb-lg-0">
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
                        training and implementation, our security services bring you the best services to counter cyber attack and data breaches. <a
                            href="/quantial-solutions/#s-sol"
                            >read more…
                          </a>
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
                      necessary skills and address a range of issues related to cost, quality of service and risk. <a
                            href="/quantial-solutions/#it-sol"
                            >read more…
                          </a>
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
                        data, helping you avoid data leaks and minimise the risk of compromisation or loss. <a
                            href="/quantial-solutions/#db-sol"
                            >read more…
                          </a>
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
                        you. <a
                            href="/quantial-solutions/#ns-sol"
                            >read more…
                          </a>
  
                      </p>
                    </div>
                </div>
              </div>
  
          </div>
        </Container>
      </section>
      
      <section id="how_we_work" className="content">
        <Container>
          <div className="d-block w-100 mx-auto">
            <h2 className="divider">
                How we work
            </h2>
  
            <ol className="mt-5 row">
                  <li className="col-12 col-md-auto col-lg w-100 mb-3 my-lg-0">
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
                  <li className="col-12 col-md-auto col-lg w-100 my-3 my-lg-0">
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
  
                  <li className="col-12 col-md-auto col-lg w-100 my-3 my-lg-0">
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
  
      <section id="how_we_work" className="content">
        <Container>
          <div className="d-block w-100 w-md-100 w-lg-80 mx-auto">
            <h2 className="divider">
                technology partners
            </h2>
  
            <div className="row w-100 mt-4 justify-content-center">
            <Logos />
            </div>
          </div>
        </Container>
      </section>
      
    </Layout>
  )
}

export default IndexPage;