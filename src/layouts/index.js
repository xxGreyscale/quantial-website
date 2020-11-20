import React from "react";
import Header from "../components/header"
import { useStaticQuery, graphql } from "gatsby"
import "./view.css"


import { TransitionProvider, TransitionViews } from "gatsby-plugin-transitions";

const Layout = ({ location, children }) => {
    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <TransitionProvider
            location={location}
            mode="immediate"
            enter={{
                opacity: 0,
                // transform: "translate3d(0,20vh,0) scale3d(1, 1, 1) rotate(0deg)",
                config: {
                mass: 1,
                tension: 210,
                friction: 20,
                clamp: true
                },
                onRest: () => {
                console.log("Hello, World!");
                }
            }}
            usual={{
                opacity: 1,
                // transform: "translate3d(0vh,0vh,0) scale3d(1, 1, 1) rotate(0deg)"
            }}
            leave={{
                opacity: 0,
                // transform: "translate3d(0vh,0vh,0) scale3d(2, 1, 1) rotate(0deg)",
                config: {
                duration: 100
                }
            }}>
      {/* <TransitionViews> */}
        {children}
      {/* </TransitionViews> */}
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

    </TransitionProvider>
  );
};

export default Layout;