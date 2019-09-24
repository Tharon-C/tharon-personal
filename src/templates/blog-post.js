import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Box from '../components/Box'
import Banner from '../components/Banner'
import Layout from '../components/Layout'
import Main from '../components/Main'
import Text from '../components/Text'
import TagList from '../components/TagList'
import Content, { HTMLContent } from '../components/Content'


export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  date,
  tags,
  title,
  helmet
}) => {
  const PostContent = contentComponent || Content

  return (
    <>
      <Banner />
      <Main className="section">
        {helmet || ''}
        <Box pt="5">
          <Text as="h1" fontSize={6} mb={2}>
            {title}
          </Text>
          <Text fontSize={4} mb={2}>{description}</Text>
          <Text fontSize={1} mb={2} color="grey6">{date}</Text>
          {tags && tags.length ? (
            <Box mb="4">
              <TagList tags={tags} />
            </Box>
          ) : null}
          <PostContent content={content} />
        </Box>
      </Main>
    </>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data
  const { date, title, description, tags, featuredimage } = post.frontmatter

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={description}
        date={date}
        featuredimage={featuredimage}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${title}`}</title>
            <meta
              name="description"
              content={`${description}`}
            />
          </Helmet>
        }
        tags={tags}
        title={title}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
