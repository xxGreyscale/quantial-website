import React, { useState, useEffect } from "react"
import "../components/pages-style/solutions.css"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Container } from "react-bootstrap"
import scrollTo from 'gatsby-plugin-smoothscroll';



const Solutions = () => {

  // const useScrollTo = id => {
  //   useLayoutEffect(() => {
  //     if (id) {
  //       const el = document.getElementById(id)
  //       const top = window.scrollY + el.getBoundingClientRect().top
  //       window.scrollTo({ top, behavior: "smooth" })
  //     }
  //   }, [id])
  // }


  
  // window.setTimeout(
  //   useScrollTo(targetFragment),
  //   100
  // )

  const solutionCarousel = React.useRef(false);
  // write our logic here
  const [quickNav,setQuickNav] = useState(false);
  const [dNone,setNoDisplay] = useState(false);

  const dontDisplay = () => {
    if(window.scrollY >= 800 * window.innerHeight/100) {
      setNoDisplay(true);
    } else {
      setNoDisplay(false);
    }
  }

  const changeQuickNavColor = () => {
    if(window.scrollY >= 60 * window.innerHeight/100) {
      setQuickNav(true);
    } else {
      setQuickNav(false);
    }
  }

  const scrollToContent = () => {
    if (typeof window !== 'undefined') {
      const hashtag = window.location.hash
      if (hashtag) {
        const currentURL = window.location.href
        const newURL = currentURL.split("#")[0]
        const id = currentURL.split("#")[1]
        if (id) {
          const el = document.getElementById(id)
          if(el) {
            const top =  window.scrollY + el.getBoundingClientRect().top
            scrollTo('#' + id);
            window.scrollTo({ top, behavior: "smooth" })
          }
        }
        window.history.replaceState("", "Lunch", newURL)
      }
    }
  }


  if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', scrollToContent)
    window.addEventListener('scroll', changeQuickNavColor)
    window.addEventListener('scroll', dontDisplay)
  }

  // if(document.onready()) {
  //   const solnPage = document.getElementById("quantial_solutions_view");
  //   console.log(solnPage)
  // }

  useEffect(
    () => {
    },
    [dNone, quickNav]
  );

  useEffect(() => {
    if(solutionCarousel.current) {
      setQuickNav(false);
      setNoDisplay(false);
    }
    return () => { // ComponentWillUnmount in Class Component
      setQuickNav(false);
      setNoDisplay(false);
      solutionCarousel.current = false;
    }
  }, []);


  return (
    <Layout >
          <Seo title="Our Solutions" />
  
          <div onLoad={scrollToContent()} id="quantial_solutions" ref={solutionCarousel}
      className="solutions carousel">
       <Container className="h-100 w-100">
       <div className="d-flex h-100 align-items-center">
         <div className="d-block w-100 pb-3 carousel-content">
           <div className="row">
             <div className="col-12 col-lg">
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
             <div className="col-12 col-lg">
             <div className="d-block d-lg-flex w-100 justify-content-end">
              <div className="d-block quick-nav-container text-left text-lg-right">
              <span className={dNone ? 'd-none': quickNav ? "secondary quick-nav title scrolled font-weight-normal": "secondary quick-nav title font-weight-normal"}>
                    Quick Nav:
                  </span>
                  <ul className="quick-nav mt-3">
                    <li aria-hidden="true" onClick={() => scrollTo('#s-sol')}
                        className={dNone ? 'd-none': quickNav ? 'quick-nav item scrolled': 'quick-nav item'}>
                      security solutions
                    </li>
                    <li aria-hidden="true" onClick={() => scrollTo('#it-sol')} className={dNone ? 'd-none': quickNav ? 'quick-nav item scrolled': 'quick-nav item'}>
                      managed it solutions
                    </li>
                    <li  aria-hidden="true" onClick={() => scrollTo('#ns-sol')} className={dNone ? 'd-none': quickNav ? 'quick-nav item scrolled': 'quick-nav item'}>
                      network solutions
                    </li>
                    <li aria-hidden="true" onClick={() => scrollTo('#db-sol')} className={dNone ? 'd-none': quickNav ? 'quick-nav item scrolled': 'quick-nav item'}>
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
            <div className="s-sol-bg sol-bg w-100">
              <Container className="h-100">
                <div className="d-flex h-100 align-items-center w-100 justify-content-end">
                  <div className="d-block w-100 w-lg-80">
                   <div className="d-flex my-3">
                    <p className="d-inline text-white mb-0 mx-1">
                        <span className="stat-no">
                        92%
                        </span>
                      </p>
  
                      <p className="d-inline-flex my-auto text-white ml-3">
                      of cyber attack breaches are caused by emails opened by staff.
                      </p>
                   </div>
  
                   <div className="d-flex my-3">
                    <p className="d-inline text-white mb-0 mx-1">
                        <span className="stat-no">
                          $3.68m
                        </span>
                      </p>
  
                      <p className="d-inline-flex my-auto text-white ml-3">
                        the global average loss companies face due to data breach.
                      </p>
                   </div>
  
                   <div className="d-flex my-3">
                    <p className="d-inline text-white mb-0 mx-1">
                        <span className="stat-no">
                          64%
                        </span>
                      </p>
  
                      <p className="d-inline-flex my-auto text-white ml-3">
                        of the customers unlikely to do business with companies that have sensitive data breach.
                      </p>
                   </div>
  
                  </div>
                </div>
              </Container>
            </div>
            </div>
            <Container>
              <div className="w-100 w-lg-63">
                <p className="para-1">
                      
                  At Quantial, we have experience in providing implementation , support, managed, and fully outsourced security services to organisations.
                  We have deep and longstanding relationships with leaders in security technology and can offer a truly multi-vendor solution. Our expertise 
                  extends to securing the data centre, corporate network, and communications environments. 
                  We also provide security awareness training to ensure employee awareness compliance.
                </p>
  
                <h6 className="primary-color font-weight-bold mt-4">
                  Solutions we offer include:
                </h6>
  
                <ol className="my-3">
                  <li>
                    Penetration Testing and Vulnerability Assessment
                  </li>
                  <li>
                    Audit, Risk and Compliance Management.
                  </li>
                  <li>
                    Antivirus/Antimalware Solutions
                  </li>
                  <li>
                    Network Security
                  </li>
                  <li>
                    Data Encryption and Data Loss Prevention
                  </li>
                  <li>
                    Management Security Services ( Security Operation Centre, Security Incident Event Management)
                  </li>
                  <li>
                    Cyber Security Awareness Training
                  </li>
                </ol>
              </div>
            </Container>
          </section>
  
  
          <section id="it-sol" className="content">
            <Container>
            <h2 className="divider mb-4">
                MANAGED IT SOLUTIONS
            </h2>
  
            <p className="para-1 w-100 w-lg-63">
              The current surge of rapid technological advance has left many organisations overwhelmed on 
              various fronts in terms of dealing with their IT infrastructure in an efficient, productive and secure manner.
            </p>
            </Container>
            <div className="solution-content">
            <div className="it-sol-bg sol-bg w-100">
              <Container className="h-100">
                <div className="d-flex h-100 align-items-center w-100 justify-content-end">
                  <div className="d-block w-100 w-lg-80">
                   <div className="d-flex my-3">
                    <p className="d-inline text-white mb-0 mx-1">
                        <span className="stat-no">
                        25%
                        </span>
                      </p>
  
                      <p className="d-inline-flex my-auto text-white ml-3">
                        average reduction in IT expenditures when using managed services.
                      </p>
                   </div>
  
                   <div className="d-flex my-3">
                    <p className="d-inline text-white mb-0 mx-1">
                        <span className="stat-no">
                          67%
                        </span>
                      </p>
  
                      <p className="d-inline-flex my-auto text-white ml-3">
                        companies use managed services to simplify network and IT operations.
                      </p>
                   </div>
  
                  </div>
                </div>
              </Container>
            </div>
            </div>
            <Container>
              <div className="w-100 w-lg-63">
                <p className="para-1">      
                We combine years of experience as well as standardised global delivery platform aligned to ITIL processes and best practices, 
                to deliver managed services to our clients. We do this by enhancing your IT and business functions through improved agility and scalability. 
                Our investment in people, automated tools that are vendor agnostic, processes and analytics driven reporting, ensures globally consistent service level delivery, mitigates risk and ensures smooth operations that meet your business demands a lower costs. 
                By doing this we enable our clients focus on their core business.
                </p>
  
                <ol className="mt-lg-5 row">
                  <li className="col-12 col-md col-lg mt-3 mt-md-3 mt-lg-0 px-2">
                    <div className="w-100">
                      <h4>MANAGED NETWORK<br /> SOLUTIONS</h4>
                    <p className="para-3 ml-n5 pl-2 pr-1">
                        Assessment of the impact of new technologies and services for LAN, WAN, and WiFi networks. 
                        End-to-End LAN, WAN, and WiFi network management - from the data center to network endpoints. 
                        We support your expansion to new sites, bandwidth upgrades &amp; equipment management.
                      </p>
                    </div>
                    
                  </li>
                  <li className="col-12 col-md col-lg mt-3 mt-md-3 mt-lg-0 px-2">
                  <div className="w-100">
                      <h4>managed Security<br /> solutions</h4>
                    <p className="para-3 ml-n5 pl-2 pr-1">
                    Continuous protection and preparation of your environment for effective response to cyber threats. 
                    We work at many levels to provide protection to our clients and develop new security measures for the business.
                      </p>
                    </div>
  
                  </li>
                  <li className="col-12 col-md col-lg mt-3 mt-md-3 mt-lg-0 px-2">
                  <div className="w-100">
                      <h4> desktop support<br /> solutions</h4>
                    <p className="para-3 ml-n5 pl-2 pr-1">
                    We work to create a stable and consistent computing environment for your staff. 
                    Our computer support personnel focus on improving process, 
                    preventing problems from arising, increasing remote resolutions and offer advanced warranty reporting and support.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
            </Container>
          </section>
  
  
          <section id="ns-sol" className="content">
            <Container>
            <h2 className="divider mb-4">
                network solutions
            </h2>
            </Container>
            <div className="solution-content">
            <div className="ns-sol-bg sol-bg w-100">
              <Container className="h-100">
                <div className="d-flex h-100 align-items-center w-100 justify-content-end">
                  <div className="d-block w-100 w-lg-80">
                   <div className="d-flex my-3">
                     <p className="ns-sol headline">
                      27 collective years of<br />
                      Experience in the Industry 
                     </p>
                   </div>
  
                  </div>
                </div>
              </Container>
            </div>
            </div>
            <Container>
              <div className="w-100 w-lg-63">
                <p className="para-1">   
                Our consulting teams can share their strategic, architectural, operational, and implementation expertise. 
                Our support services ensure peak network performance and higher availability, while optimising your costs. 
                Many of our clients turn to us to operate the entire network environment on their behalf, 
                through a managed services or an IT outsourcing arrangement. If you’re exploring software-defined networking, 
                we can assist you to build both the software and management layers, and re-architect your network to become more programmable and cost-effective. 
                We also give you the option of moving certain of your assets onto our cloud platform, 
                essentially enabling you to have your network delivered ‘as-a-service’.
                </p>
  
                <div className="bloq-text mb-4">
                  Over two decades of experience and strengths in routing and switching, wireless and mobility, data centre networking, and performance optimisation. 
                </div>
  
                <p className="para-1">
                  Nothing can bring your business to a halt quicker than a poorly designed network. When your company is small you may be able
                  to get away with not designing your network with speed and redundancy in mind but as you begin to grow the lack of planning 
                  can become crippling. Your ability to gain access to your data and communicate quickly and efficiently is completely dependent
                    on the network it rides on. At Quantial Solutions, we follow industry best practices customizing 
                    a design that works best for you now and in the future.
                </p>
  
                <h6 className="primary-color font-weight-bold mt-4">
                  SOLUTIONS INCLUDE:
                </h6>
  
                <p className="para-1">
                Network and Services infrastructure Design &amp; Implementation - Our solution architects specialise in Network Design and implementation. The goal of every network design is to deliver the right mix of these attributes:
                </p>
  
                <ol className="my-">
                  <li>
                    Penetration Testing and Vulnerability Assessment
                  </li>
                  <li>
                    Audit, Risk and Compliance Management.
                  </li>
                  <li>
                    Antivirus/Antimalware Solutions
                  </li>
                  <li>
                    Network Security
                  </li>
                </ol>
  
                <p className="para-1 mt-3 mt-md-3 mt-lg-0">
                  <b>Collaboration Solutions</b> - personalized experiences for the modern workforce. 
                  Improve employee productivity and engagement while improving customer experiences. 
                </p>
  
                <p className="para-1 mt-3 mt-md-3 mt-lg-0">
                  <b>Network and Application Monitoring</b> - proactive and continuous fault and performance evaluation of all 
                networking components i.e. routers, switches, servers, to optimise and maintain their availability at all times.
                </p>
  
                <p className="para-1 mt-3 mt-md-3 mt-lg-0">
                  <b>Network Assessment </b> - to keep up with compliance/regulations or identifying areas of improvement.
                </p>
  
                <p className="para-1 mt-3 mt-md-3 mt-lg-0">
                  <b>Structured Cabling Solutions</b> - simplifying the planning, design, and construction of complex networks 
                  by providing an organised, standardised approach to enhancing network infrastructure with category and 
                  fiber cabling.
                </p>
              </div>
            </Container>
          </section>
  
  
          <section id="db-sol" className="content">
            <Container>
            <h2 className="divider mb-4">
              DATA BACK UP &amp; RECOVERY
            </h2>
  
            <p className="para-1 w-100 w-lg-63">
              Data is the foundation of all successful enterprises. Data is what drives real-time insights and 
              decisions that in turn allow for agile operations and keep enterprises one step ahead of the competition. 
            </p>
            </Container>
            <div className="solution-content">
            <div className="db-sol-bg sol-bg w-100">
              <Container className="h-100">
                <div className="d-flex h-100 align-items-center w-100 justify-content-end">
                  <div className="d-block w-100 w-lg-80">
                   <div className="d-flex my-3">
                    <p className="d-inline text-white mb-0 mx-1">
                        <span className="stat-no">
                          $4.4m
                        </span>
                      </p>
  
                      <p className="d-inline-flex my-auto text-white mx-3">
                        Data records are stolen or every hour
                      </p>
                   </div>
  
                   <div className="d-flex my-3">
                    <p className="d-inline text-white mb-0 mx-1">
                        <span className="stat-no">
                          $5,000 
                        </span>
                          <small>/minute</small>
                      </p>
  
                      <p className="d-inline-flex my-auto text-white ml-3">
                        Global cost of data centre downtime
                      </p>
                   </div>
  
                  </div>
                </div>
              </Container>
            </div>
            </div>
            <Container>
              <div className="w-100 w-lg-63">
                <p className="para-1">      
                  As enterprises adopt digital transformation, and the Internet of Things continues to grow by leaps and bounds, 
                  a huge amount of data from the likes of emails, analytical data, transactional data etc, is generated.<br /> 
                  Since data lies in the heart of the organisation’s operations, it needs to be protected by all means necessary 
                  to make sure that important information can be accessed at all times.  Hence, Quantial solutions will assist 
                  you with:
                </p>
  
                <ol className="mt-lg-5 row">
                  <li className="col-12 col-md col-lg mt-3 mt-md-3 mt-lg-0 px-2">
                    <div className="w-100">
                        <h4 className="text-black">DATA MANAGEMENT</h4>
                      <p className="para-3 ml-n5 pl-2 pr-1">
                        Automation of the movement of critical data to online and offline storage as well as offering a 
                        comprehensive strategy/solution for valuing, cataloging and protecting information assets from 
                        application and user errors, malware and virus attacks, machine failure or facility outages and disruptions.
                      </p>
                    </div>
  
                  </li>
                  <li className="col-12 col-md col-lg mt-3 mt-md-3 mt-lg-0 px-2">
                    <div className="w-100">
                        <h4 className="text-black"> DATA AVAILABILITY</h4>
                      <p className="para-3 ml-n5 pl-2 pr-1">
                        Ensures business continuity by making sure users have the data they need to conduct business even 
                        if the data is damaged or lost. <br /> <br />
  
                        We provide services for replication and redundancy, and data restoration.
                      </p>
                    </div>
                  </li>
  
                  <div className="col-12 col-md col-lg mt-3 mt-md-3 mt-lg-0 px-2">
                    <div className="w-100">
                      <h3>
                        Data is a precious
                        thing &amp; will last longer than the systems themselves.
                      </h3>
                    </div>
                    
                  </div>
                </ol>
              </div>
            </Container>
          </section>
  
  
    
    
    </Layout>
  )
  
}
export default Solutions
