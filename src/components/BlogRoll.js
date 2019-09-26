import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import Box from './Box'
import ArticalCard from './ArticalCard'
import Flex from './Flex'

export const BlogRollList = ({ posts }) => {

  return (
    <Flex
      flexWrap='wrap'
      maxWidth='1200px'
      m="auto"
    >
      {posts &&
        posts.map(({ node: post }) => (
          <Box
            key={post.id}
            p={[1, 1, 2]}
            mt={[1, 1, 2]}
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

BlogRollList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}
// graphql`
//   query TagsQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(limit: 1000) {
//       group(field: frontmatter___tags) {
//         fieldValue
//         totalCount
//       }
//     }
//   }
// `

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
    render={(data, count) => <BlogRollList posts={data.allMarkdownRemark.edges} count={count} />}
  />
)
