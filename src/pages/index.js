import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi turd. How are you doing?</h1>
    <p>{data.site.siteMetadata.description}</p>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ul>
        {data.allFile.edges.map(({node}) => (
            <li key={node.name}>
                <Link to={node.name} >{node.childMarkdownRemark.frontmatter.title}</Link>
            </li>
        ))
        }
    </ul>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
export const query = graphql`
{
    site {
      siteMetadata {
        title
        description
      }
    }
    allFile(filter: {extension: {eq: "md"}}) {
        edges {
          node {
            relativePath
            name
            childMarkdownRemark {
              frontmatter {
                title
              }
            }
          }
        }
      }
  }
`
