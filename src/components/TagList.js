import React from 'react'
import styled from 'styled-components'
import { kebabCase } from 'lodash'
import { Link } from 'gatsby'
import Box from './Box'

const TagList = styled.ul`
  padding: 0;
`;
const Tag = styled(Link)`
  list-style: none;
  background-color: rgba(0,0,0,.05);
  border-radius: 999px;
  padding: 4px 16px;
  color: black;
  &:visited {
    color: black;
  }
  &:active {
    color: black;
  }
`

export default  ({tags}) => (
  <TagList as="ul">
  {tags.map(tag => (
    <Box
      style={{listStyle: "none"}}
      display="inline-block"
      mr={1}
      mb={1}
      key={tag + `tag`}
    >
      <Tag to={`/tags/${kebabCase(tag)}/`}>{tag}</Tag>
    </Box>
  ))}
  </TagList>
)
