import React from "react"
import Header from "../components/header"
import { useStaticQuery, graphql } from "gatsby"
import "./view.css"

import { TransitionGroup, CSSTransition } from "react-transition-group"
import { useLocation } from "@reach/router"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const location = useLocation()
  const timeout = 300 // Adjust as needed for your transition duration

  return (
    <div className="layout">
      <main>
        <TransitionGroup>
          <CSSTransition
            key={location.pathname}
            timeout={timeout}
            classNames="fade" // Use a class name prefix for your CSS
            mountOnEnter={false}
            unmountOnExit={true}
          >
            <div style={{ position: "relative", width: "100%" }}>
              <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
              {children}
            </div>
          </CSSTransition>
        </TransitionGroup>
      </main>
    </div>
  )
}

export default Layout
