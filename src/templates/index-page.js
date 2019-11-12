import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import 'prismjs/themes/prism-tomorrow.css'
import Cabin from '../components/graphics/Cabin'
import Main from '../components/Main'
import ArchiveLinks from "../components/ArchiveLinks"
import Clouds from '../components/graphics/Clouds'
import Layout from '../components/Layout'

export const IndexPageTemplate = () => (
    <Main>
      <ArchiveLinks
        style={{
          zIndex: 999,
          width: "75%",
          position: 'fixed',
          bottom: '33vh',
          left: 0,
          right: 0,
          margin: "auto",
          minWidth: '400px',
        }}
      />
      <Cabin styleWrapper={{ position: "fixed", top: "100px", maxWidth: '800px', width: '100%', right: 0, left: 0, margin: 'auto' }} />
    </Main>
  )

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout isMain backgroundColor="sky.day">
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
