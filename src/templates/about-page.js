import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Banner from '../components/Banner'
import Layout from '../components/Layout'
import Main from '../components/Main'
import Text from '../components/Text'
import Content, { HTMLContent } from '../components/Content'


export const AboutPageTemplate = ({
  content,
  contentComponent,
  title,
  helmet
}) => {
  const PostContent = contentComponent || Content

  return (
    <>
      <Banner />
      <Main>
        {helmet || ''}
          <Text as="h1" fontSize={[5, 5, 6]} mb={2}>
            {title}
          </Text>
          <PostContent content={content} />
      </Main>
    </>
  )
}

AboutPageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const About = ({ data }) => {
  const { markdownRemark: post } = data
  const { title, featuredimage } = post.frontmatter

  return (
    <Layout>
      <AboutPageTemplate
        content={post.html}
        contentComponent={HTMLContent}
        featuredimage={featuredimage}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${title}`}</title>
            <meta
              name="description"
              content="About me"
            />
          </Helmet>
        }
        title={title}
      />
    </Layout>
  )
}

About.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default About

export const aboutPageQuery = graphql`
query AboutPage($id: String!) {
  markdownRemark(id: { eq: $id }) {
    html
    frontmatter {
      title
    }
  }
}
`
