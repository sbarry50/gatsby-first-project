import React from "react"
import { graphql } from "gatsby";
import Layout from '../components/layout'
const Post = ({data}) => (
    <Layout>
        <h1>{data.file.childMarkdownRemark.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{__html:data.file.childMarkdownRemark.html}} />
    </Layout>
)

export const query = graphql`
query($relativePath:String){
    file(relativePath: {eq: $relativePath}) {
      childMarkdownRemark {
        html
        frontmatter {
          title
        }
      }
    }
  }
`

export default Post