import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import { Container } from "react-bootstrap"
import Seo from "../components/seo"
import "../components/pages-style/contacts.css"
import scrollTo from "gatsby-plugin-smoothscroll"
import { FiChevronsDown } from "react-icons/fi"
import axios from "axios"

const Contact = () => {
  // write our logic here
  const [contacts, setContacts] = useState(false)
  const [dNone, setNoDisplay] = useState(false)
  const [contactMessage, setContactMessage] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  })
  const sendEmailAPI =
    "https://qyxpx21ks2.execute-api.eu-west-1.amazonaws.com/prod/contact-us"
  const [loading, setLoading] = useState(false)
  const [isSuccessful, setIsSuccessful] = useState(false)

  const submitForm = ev => {
    ev.preventDefault()
    setLoading(true)
    setIsSuccessful(false)
    // const data = new FormData(form);
    const data = {
      ...contactMessage,
      sender: "onesmo@quantial.solutions",
      recievers: ["onesmo@quantial.solutions, salim.nassor.sn@gmail.com"],
      header: "Contact form from Quantial Solutions website",
    }
    setContactMessage(data)

    axios
      .post(sendEmailAPI, data)
      .then(res => {
        console.log(res)
        console.log(res.data)
        setIsSuccessful(true)
        setLoading(false)
      })
      .catch(error => {
        setLoading(false)
        console.log(error)
      })
  }

  const dontDisplay = () => {
    if (window.scrollY >= (120 * window.innerHeight) / 100) {
      setNoDisplay(true)
    } else {
      setNoDisplay(false)
    }
  }

  const changeContactsColor = () => {
    if (window.scrollY >= (60 * window.innerHeight) / 100) {
      setContacts(true)
    } else {
      setContacts(false)
    }
  }
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeContactsColor)
    window.addEventListener("scroll", dontDisplay)
  }

  useEffect(() => {
    console.log("effect")
  }, [dNone, contacts])

  useEffect(() => {
    return () => {
      // ComponentWillUnmount in Class Component
      console.log("clean up")
    }
  }, [])

  return (
    <Layout>
      <Seo title="Contact Us" />

      <div className="contacts carousel">
        <Container className="h-100 w-100">
          <div className="d-flex h-100 align-items-center">
            <div className="d-block pb-3 carousel-content w-100">
              <div className="row mt-5 mt-md-0 mt-lg-0">
                <div className="col-12 col-lg">
                  <h1 className="my-0">Get</h1>
                  <h1 className="m-0">In Touch</h1>
                  <div className="subtitle my-3">
                    <p className="pt-3 description">We are your solution.</p>
                  </div>
                </div>
                <div className="col-12 col-lg">
                  <div className="d-block d-lg-flex w-100 justify-content-end">
                    <div className="d-block quick-nav-container text-left text-lg-right mt-4 mt-md-3 mt-lg-0">
                      <span
                        className={
                          dNone
                            ? "d-none"
                            : contacts
                            ? "contacts scrolled font-weight-bold"
                            : "secondary quick-nav title font-weight-bold"
                        }
                      >
                        CONTACTS
                      </span>
                      <ul
                        className={
                          dNone
                            ? "d-lg-none"
                            : contacts
                            ? "mt-2 contacts scrolled"
                            : "mt-2 font-weight-normal"
                        }
                      >
                        <li
                          style={{ gridGap: "0rem" }}
                          className="my-1 d-inline-block"
                        >
                          6th Floor, Tanzanite Park,
                          <br /> Old Bagamoyo Road,
                          <br />
                          Dar es Salaam, TANZANIA
                        </li>
                        <li
                          style={{ gridGap: "0rem" }}
                          className="my-1 d-inline-block"
                        >
                          PHONE:
                          <br />
                          +255 785 083 324
                        </li>
                        <li
                          style={{ gridGap: "0rem" }}
                          className="my-1 d-inline-block"
                        >
                          EMAIL:
                          <br />
                          info@quantial.solutions
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="scroll_button" className="d-block w-100">
            <div className="d-block">
              <span
                className="d-block text-center text-md-center text-lg-center scroll-label"
                aria-hidden="true"
                onClick={() => scrollTo("#about_us")}
              >
                WRITE US
              </span>
              <div className="d-block">
                <div
                  className="scroll-container mx-auto mx-md-auto mx-lg-auto"
                  aria-hidden="true"
                  onClick={() => scrollTo("#write_us")}
                >
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
            <h2 className="divider">write us</h2>

            <p className="para-1">
              Write us and we will get back to as soon as possible. Or call by
              the contacts provided on the right.
            </p>

            <form>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  onChange={event => {
                    setIsSuccessful(false)
                    setContactMessage({
                      ...contactMessage,
                      email: event.target.value,
                    })
                  }}
                  className="form-control rounded-sm"
                  name="name"
                  id="name"
                  aria-describedby="nameHelp"
                  placeholder="full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  onChange={event => {
                    setIsSuccessful(false)
                    setContactMessage({
                      ...contactMessage,
                      email: event.target.value,
                    })
                  }}
                  className="form-control rounded-sm"
                  name="email"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="email@email.com"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject:</label>
                <input
                  type="text"
                  onChange={event => {
                    setIsSuccessful(false)
                    setContactMessage({
                      ...contactMessage,
                      email: event.target.value,
                    })
                  }}
                  className="form-control rounded-sm"
                  name="subject"
                  id="subject"
                  placeholder="subject"
                  aria-describedby="subjectHelp"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  className="form-control rounded-sm"
                  onChange={event => {
                    setIsSuccessful(false)
                    setContactMessage({
                      ...contactMessage,
                      email: event.target.value,
                    })
                  }}
                  id="message"
                  placeholder="How may we help you?"
                  rows="8"
                  name="message"
                ></textarea>
              </div>

              <div className="d-flex justify-content-end">
                <button
                  className={
                    isSuccessful
                      ? "btn btn-sm-lg btn-success"
                      : "btn btn-sm-lg .quantial-btn"
                  }
                  onClick={submitForm}
                  type="submit"
                >
                  {loading && !isSuccessful && (
                    <span>
                      <span
                        className="spinner-border spinner-border-sm me-3"
                        role="status"
                      ></span>
                      Submitting...
                    </span>
                  )}

                  {!loading && !isSuccessful && <span>Submit</span>}

                  {isSuccessful && (
                    <span>
                      <span className="me-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          class="bi bi-check"
                          viewBox="0 0 16 16"
                        >
                          <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                        </svg>
                      </span>
                      Submitted
                    </span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </Container>
      </section>
    </Layout>
  )
}

export default Contact
