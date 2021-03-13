import React from "react"
import './footer.css'
import { Container } from "react-bootstrap"


const Footer = () => {


    return (

            <footer style={{
            marginTop: `2rem`
          }}>
              <Container className="h-100 py-5">
              <div className="d-flex h-100 align-items-center py-5">
                  <div className="d-block py-5">
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
           <div className="d-flex justify-contents-end bg-light py-3 ">
               <div className="container-lg w-100">
                   <div className="row font-weight-bold w-100" style={{fontSize: '0.725rem'}}>
                   <div className="col-12 col-md col-lg">
                    © {new Date().getFullYear()}, Quantial Technology solutions.  All Rights Reserved. 
                   
                   </div>
                   <div className="col-12 col-md col-lg ml-lg-auto text-right pr-lg-0">
                        Designed and developed by <a href="mailto:madebysalinastic@gmail.com">madebysalinastic@gmail.com</a> 
                   </div>
                   </div>

               </div>
           </div>
          </footer>

    )
}

export default Footer
