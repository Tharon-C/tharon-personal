import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Banner from '../../components/Banner'
import Box from '../../components/Box'
import Text from '../../components/Text'
import Main from '../../components/Main'
import Flex from '../../components/Flex'


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
  <Main>
    <Text as="h1" fontSize="4">Tags</Text>
    <Box as="ul" p="0">
      {group.map(tag => (
        <Box
          as="li"
          maxWidth="250px"
          key={tag.fieldValue}
          style={{listStyle: "none"}}
        >
          <Flex
            as={Link}
            py="1"
            justifyContent="space-between"
            to={`/tags/${kebabCase(tag.fieldValue)}/`}
          >
          <Text
            color="black"
            fontSize={4}
          >
            {tag.fieldValue}
            </Text>
            <Box
              display="inline-block"
              borderRadius={999}
              color="white"
              ml={1}
              p=" 4px 8px"
              bg="secondary"
            >
              <Text fontSize={2}>
                {tag.totalCount}
              </Text>
            </Box>
          </Flex>
        </Box>
      ))}
    </Box>
  </Main>
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
