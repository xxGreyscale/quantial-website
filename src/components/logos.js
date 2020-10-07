import React from 'react'
import Img from 'gatsby-image'
import {useStaticQuery, graphql } from 'gatsby'


const Logos = () => {
    const data = useStaticQuery(graphql `
        query MyQuery {
        allFile(filter: {extension: {regex: "/(png)/"}, relativeDirectory: {eq: "logos"}}) {
            edges {
            node {
                childImageSharp {
                fixed (width: 200, quality: 100) {
                    ...GatsbyImageSharpFixed
                }
                }
            }
            }
        }
        }
    `);

    if (!data?.allFile) {
        return <div>Picture not found</div>
    }
    console.log(data);
    
    return  data?.allFile.edges.map(({node}) => (
        <div className="col-3 d-flex mt-4 mb-5">
            <Img objectFit="contain"
            imgStyle={{ objectFit: 'contain'}}
            objectPosition="50% 50%" fixed={node.childImageSharp.fixed} />
        </div>
      )) 

}

export default Logos;
