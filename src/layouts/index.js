/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Footer from '../components/footer'
import { StaticQuery, graphql } from "gatsby"
import Header from '../components/header'

import Transition from '../components/transition'
import "./layout.css"

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }`}
    render={data => (
      <>
        {/* <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
          }}
        > */}
        <Transition location = {location}>
          {children}
        </Transition>
        {/* </div>
        <Footer /> */}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
