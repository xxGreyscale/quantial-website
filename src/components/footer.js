import React from "react"
import './footer.css'
import { Container } from "react-bootstrap"


const Footer = () => {


    return (

            <footer style={{
            marginTop: `2rem`
          }}>
              <Container className="h-100">
              <div className="d-flex h-100 align-items-center">
                  <div className="d-block">
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
           <div className="bg-light py-3">
               <div className="container-lg w-100">
                   <div className="row font-weight-bold w-100" style={{fontSize: '0.725rem'}}>
                   <div className="col-12 col-md col-lg">
                    © {new Date().getFullYear()}, Quantial Technology solutions.  All Rights Reserved.
                   </div>
                   {/* <div className="col-12 col-md col-lg ml-lg-auto text-lg-right p-lg-0 mt-2 mt-md-0 mt-lg-0">
                       <p className="d-inline mx-lg-4">
                           Privacy Policy
                       </p>
                       <p className="d-inline ml-4">
                           Terms of Service
                       </p>
                   </div> */}
                   </div>

               </div>
           </div>
          </footer>

    )
}

export default Footer
