import React from 'react'
import styled from 'styled-components'
import css from '@styled-system/css'
import themeGet from '@styled-system/theme-get'
import color from 'color'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Banner from '../../components/Banner'
import Box from '../../components/Box'
import Text from '../../components/Text'
import Main from '../../components/Main'

const TagLink = styled(Box)`
${css({
  display: 'flex',
  justifyContent: 'space-between',
  py: 1,
  px: 2
})}
&:hover {
  background-color: ${props =>
    color(themeGet('colors.tertiary')(props))
    .lighten(.3)
    .hex()
  }
}`

const Pill = styled(Box)(css({
  display: "inline-block",
  borderRadius: 999,
  color: "white",
  ml: 1,
  p: " 4px 8px",
  bg: "secondary",
  fontSize: 2
}))

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
          <TagLink
            as={Link}
            to={`/tags/${kebabCase(tag.fieldValue)}/`}
          >
          <Text
            color="black"
            fontSize={4}
          >
            {tag.fieldValue}
            </Text>
            <Pill>
              {tag.totalCount}
            </Pill>
          </TagLink>
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
