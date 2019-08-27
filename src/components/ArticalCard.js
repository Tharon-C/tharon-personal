import React from 'react'
import { Link } from 'gatsby'
import Button from './Button'
import styled from 'styled-components'
import { layout, space } from 'styled-system'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import Text, { P } from './Text'

const Card = styled.div`
  ${layout}
  ${space}
`

const ArticalCard = ({post, ...rest}) => (
  <Card { ...rest } p={2} as="article">
    <header>
      {post.frontmatter.featuredimage ? (
        <PreviewCompatibleImage
          mb={3}
          mx={-2}
          imageInfo={{
            image: post.frontmatter.featuredimage,
            alt: `featured image thumbnail for post ${
              post.title
            }`,
          }}
        />
      ) : null}
        <Link
          to={post.fields.slug}
        >
          <Text fontSize={5} mb={1}>
            {post.frontmatter.title}
          </Text>
        </Link>
        <Text fontSize={3} mb={3}>
          {post.frontmatter.date}
        </Text>
    </header>
    <P mb={3}>
      {post.excerpt}
    </P>
    <Button to={post.fields.slug}>
      Keep Reading →
    </Button>
  </Card>
)

export default ArticalCard
