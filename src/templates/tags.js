import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import { BlogRollList } from '../components/BlogRoll'
import Banner from '../components/Banner'
import Box from '../components/Box'
import Text from '../components/Text'

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const tag = this.props.pageContext.tag
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? '' : 's'
    } tagged with “${tag}”`

    return (
      <Layout>
        <Helmet title={`${tag} | ${title}`} />
        <Banner />
        <Box
          as="section"
          flexWrap='wrap'
          maxWidth='1200px'
          m="auto"
        >
          <Text
            as="h1"
            display="block"
            pt={3}
            mb={2}
            fontSize={3}
          >
            {tagHeader}
          </Text>
          <Text color="black" as={Link} to="/tags/">Browse all tags</Text>
          <BlogRollList posts={posts} />

        </Box>
      </Layout>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            featuredpost
          }
        }
      }
    }
  }
`
