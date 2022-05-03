import React from 'react'
import {GatsbyImage} from 'gatsby-plugin-image'
import {useStaticQuery, graphql } from 'gatsby'


const Logos = () => {
    const data = useStaticQuery(graphql `
        query MyQuery {
        allFile(filter: {extension: {regex: "/(png)/"}, relativeDirectory: {eq: "logos"}}) {
            edges {
            node {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
            }
        }
        }
    `);

    if (!data?.allFile) {
        return <div>Picture not found</div>
    }
    
    return  data?.allFile.edges.map(({node}, i) => (

        <div className="col-6 col-md-4 col-lg-3 d-flex mt-4 mt-lg-4 mb-5 mb-lg-5" key={i}>
            <GatsbyImage objectFit="contain"
            imgStyle={{ objectFit: 'contain'}}
            key={i}
            objectPosition="50% 50%" image={node.childImageSharp.gatsbyImageData}/>
        </div>
      )) 

}

export default Logos;
