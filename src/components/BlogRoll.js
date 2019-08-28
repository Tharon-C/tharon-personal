import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import { space, layout } from 'styled-system'
import ArticalCard from './ArticalCard'
import Flex from './Flex'

const Box = styled.div`
  ${space}
  ${layout}
`
const BlogRoll = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <Flex
      flex
      center
      flexWrap='wrap'
      width='980px'
      m="auto"
    >
      {posts &&
        posts.map(({ node: post }) => (
          <Box
            key={post.id}
            p={2}
            width={[1, 1, 1/2]}
          >
            <ArticalCard
              mb={4}
              post={post}
            />
          </Box>
        ))}
    </Flex>
  )
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
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
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
