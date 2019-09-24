import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Banner from '../../components/Banner'
import Box from '../../components/Box'
import Text from '../../components/Text'


const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
<Layout>
  <Helmet title={`Tags | ${title}`} />
  <Banner />
  <Box
    as="section"
    flexWrap='wrap'
    maxWidth='1200px'
    m="auto"
    pt={5}
  >
    <Text as="h1" fontSize="4" pt="4">Tags</Text>
    <Box as="ul" p="0">
      {group.map(tag => (
        <Box as="li" key={tag.fieldValue} py="1" style={{listStyle: "none"}}>
          <Text
            as={Link}
            fontSize={4}
            to={`/tags/${kebabCase(tag.fieldValue)}/`}
          >
            {tag.fieldValue} ({tag.totalCount})
          </Text>
        </Box>
      ))}
    </Box>
  </Box>
</Layout>
)

export default TagsPage

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
