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
               <Container className="w-100">
                   <div className="row font-weight-bold w-100" style={{fontSize: '0.725rem'}}>
                   <div className="col">
                    © {new Date().getFullYear()}, Quantial Technology solutions.  All Rights Reserved.
                   </div>
                   <div className="col ml-auto text-right p-0">
                       <p className="d-inline mx-4">
                           Privacy Policy
                       </p>
                       <p className="d-inline ml-4">
                           Terms of Service
                       </p>
                   </div>
                   </div>

               </Container>
           </div>
          </footer>

    )
}

export default Footer
