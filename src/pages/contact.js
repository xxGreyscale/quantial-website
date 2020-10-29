import React, { useState } from "react"
import Layout from "../components/layout";
import { Container } from "react-bootstrap"
import SEO from "../components/seo"
import "../components/pages-style/contacts.css"
import scrollTo from 'gatsby-plugin-smoothscroll';
import { FiChevronsDown } from "react-icons/fi";


const submitForm = (ev) => {
  ev.preventDefault();
  const form = ev.target;
  const data = new FormData(form);
  const xhr = new XMLHttpRequest();
  xhr.open(form.method, form.action);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = () => {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      form.reset();
      this.setState({ status: "SUCCESS" });
    } else {
      this.setState({ status: "ERROR" });
    }
  };
  xhr.send(data);
}

const Contact = () => {

  // write our logic here
  const [contacts,setContacts] = useState(false);
  const [dNone,setNoDisplay] = useState(false);

  const dontDisplay = () => {
    if(window.scrollY >= 120 * window.innerHeight/100) {
      setNoDisplay(true);
    } else {
      setNoDisplay(false);
    }
  }

  const changeContactsColor = () => {
    if(window.scrollY >= 60 * window.innerHeight/100) {
      setContacts(true);
    } else {
      setContacts(false);
    }
  }
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', changeContactsColor)
    window.addEventListener('scroll', dontDisplay)

  }
  return (
    <Layout>
    <SEO title="Contact Us" />

<div
className="contacts carousel">
<Container className="h-100 w-100">
<div className="d-flex h-100 align-items-center">
  <div className="d-block pb-3 carousel-content w-100">
    <div className="row mt-5 mt-md-0 mt-lg-0">
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
        <span 
        className= 
        {dNone ? 'd-none': contacts ? 'contacts scrolled font-weight-bold' : 'secondary quick-nav title font-weight-bold'}>
            CONTACTS
            </span>
            <ul className={dNone ? 'd-lg-none': contacts ? 'mt-2 contacts scrolled' : 'mt-2 font-weight-normal' }>
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

            </ul>
        </div>

  </div>
      </div>
    </div>
  </div>
  </div>
    <div id="scroll_button" className="d-block w-100">
        <div className="d-block" >
          <span className="d-block text-center text-md-center text-lg-center scroll-label" aria-hidden="true" onClick={() => scrollTo('#about_us')}>
            WRITE US
          </span>
          <div className="d-block">
            <div className="scroll-container mx-auto mx-md-auto mx-lg-auto" aria-hidden="true" onClick={() => scrollTo('#write_us')}>
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

            <form  
              method="post" 
              onSubmit={submitForm.bind}
              action="https://formspree.io/p/1527181724469952462/f/contact">

            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" className="form-control rounded-sm" name="name" id="name" aria-describedby="nameHelp" placeholder="full name" />

              </div>

              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" className="form-control rounded-sm" name="email" id="email" aria-describedby="emailHelp" placeholder="email@email.com" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>

              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject:</label>
                <input type="text" className="form-control rounded-sm" name="subject" id="subject" placeholder="subject" aria-describedby="subjectHelp" />

              </div>

              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea className="form-control rounded-sm" id="message" placeholder="How may we help you?" rows="8" name="message"></textarea>
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