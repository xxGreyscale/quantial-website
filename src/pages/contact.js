import React, { useState } from "react"
import Layout from "../components/layout";
import { Container } from "react-bootstrap"
import SEO from "../components/seo"
import scrollTo from 'gatsby-plugin-smoothscroll';
import { FiChevronsDown } from "react-icons/fi";



const Contact = () => {

  // write our logic here
  const [contacts,setContacts] = useState(false);
  const changeContactsColor = () => {
    if(window.scrollY >= 60 * window.innerHeight/100) {
      setContacts(true);
    } else {
      setContacts(false);
    }
  }
  window.addEventListener('scroll', changeContactsColor)

  return (
    <Layout>
    <SEO title="Contact Us" />

<div
className="solutions carousel">
<Container className="h-100 w-100">
<div className="d-flex h-100 align-items-center">
  <div className="d-block w-100">
    <div className="row">
      <div className="col-12 col-lg">
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
      <div className="col-12 col-lg">
      <div className="d-block d-lg-flex w-100 justify-content-end">
        <div className="d-block quick-nav-container text-left text-lg-right mt-4 mt-md-3 mt-lg-0">
        <span className= {contacts ? 'text-black title font-weight-bold' : 'secondary quick-nav title font-weight-bold'}>
            CONTACTS
            </span>
            <ul className={contacts ? 'contacts scrolled' : 'mt-4 font-weight-normal' }>
              <li style={{ gridGap: '0rem' }} className="my-1">
              6th Floor, Tanzanite Park,<br /> Old Bagamoyo Road,<br />
                Dar es Salaam, TANZANIA

              </li>
              <li style={{ gridGap: '0rem' }} className="my-1">
                PHONE:<br />
                +255 785 083 324
              </li>
              <li style={{ gridGap: '0rem' }} className="my-1">
                EMAIL:<br />
                INFO@QUANTIAL.SOLUTIONS
              </li>
              <li style={{ gridGap: '0rem' }} className="my-1">
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
    <div id="scroll_button" className="d-block mx-auto w-100">
        <div className="d-block" >
          <span className="d-block text-center scroll-label" onClick={() => scrollTo('#about_us')}>
            WRITE US
          </span>
          <div className="d-block mx-auto">
            <div className="scroll-container mx-auto" onClick={() => scrollTo('#write_us')}>
              <FiChevronsDown className="d-flex d-justify-content-center scroll-down text-center" />
            </div>
          </div>
        </div>
      </div>
      
</Container>

</div>

<section className="content" id="write_us">
    <Container>
        <div className="w-100 w-lg-63 d-block">
            <h2 className="divider">
                    write us
            </h2>

            <p className="para-1">
                Write us and we will get back to as soon as possible. Or call by the contacts provided on the right.
            </p>

            <form method="post" action="#">

            <div class="form-group">
                <label for="nameInput">Name:</label>
                <input type="text" class="form-control rounded-sm" name="name" id="name" aria-describedby="nameHelp" placeholder="full name" />

              </div>

              <div class="form-group">
                <label for="exampleInputEmail1">Email:</label>
                <input type="email" class="form-control rounded-sm" name="email" id="email" aria-describedby="emailHelp" placeholder="email@email.com" />
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>

              </div>

              <div class="form-group">
                <label for="subjectInput">Subject:</label>
                <input type="text" class="form-control rounded-sm" name="subject" id="subject" placeholder="subject" aria-describedby="subjectHelp" />

              </div>

              <div class="form-group">
                <label for="message">Message:</label>
                <textarea class="form-control rounded-sm" id="messageTxtArea" placeholder="Tell us your thoughts…" rows="8"></textarea>
              </div>

              <div className="d-flex justify-content-end">
              <button className="btn btn-sm-lg" type="submit">Submit</button>

              </div>
            </form>
        </div>

        
    </Container>
</section>

</Layout>
  )
}

export default Contact;