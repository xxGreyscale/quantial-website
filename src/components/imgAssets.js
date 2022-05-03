import React from 'react'
import {useStaticQuery, graphql } from 'gatsby'


const imgAssets = () => {
const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fluid(maxWidth: 200, maxHeight: 200) {
        ...GatsbyImageSharpFluid
      }
    }
  }`

const query = graphql`
  query {
    image1: file(relativePath: { eq: "images/assets/human-resources.png" }) {
      ...squareImage
    }
    image2: file(relativePath: { eq: "images/image2.jpg" }) {
      ...squareImage
    }
    image3: file(relativePath: { eq: "images/image3.jpg" }) {
      ...squareImage
    }
  }`
}

export default imgAssets;
