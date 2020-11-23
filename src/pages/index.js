import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"
export default ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
    allStrapiBlogs: { nodes: blogs },
  } = data

  return (
    <Layout>
      <SEO title="Home" description="Ujjwal Singh"></SEO>
      <Hero></Hero>
      {/* <Services></Services> */}
      <Jobs></Jobs>
      <Projects
        projects={projects}
        title="featured projects"
        showLink
      ></Projects>
      <Blogs blogs={blogs} title="latest blog" showLink></Blogs>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects(filter: { featured: { eq: true } }) {
      nodes {
        github
        id
        description
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }

    allStrapiBlogs(sort: { fields: date, order: DESC }, limit: 3) {
      nodes {
        title
        content
        slug
        category
        date(formatString: "MMMM Do, YYYY")
        desc
        id
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
