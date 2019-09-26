import React from 'react'
import github from '../img/github-icon.svg'
import Logo from '../components/graphics/Logo'
import Flex from '../components/Flex'
import Text from '../components/Text'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { space, layout } from 'styled-system'
import css from '@styled-system/css'

const Identety = styled(Link)`
  display: flex;
  align-items: center;
  line-height: 1.2;
  color: black;
  &:visted {
    color: black;
  }
`
const Nav = styled.nav`
  width: 100%;
  ${space}
`;
const NavLink = styled(Link)`
  ${layout}
  display: inline-block;
  padding: 16px;
  height: 50px;
  color: black;
  &:hover {
    background: rgba(0,0,0,.05);
  }
`;
const NavLinkList = styled(Flex)`
  width: 100%;
  ${layout}
`;

const GitHubLink = styled.a(css({
  textDecoration: 'none',
  width: '24px',
  margin: [2 , 2, 3],
}))

const Header = ({isMain}) => (
  <Nav px={[1, 1, 3]} py={[0, 2]}>
    <Flex justifyContent="space-between">
    <Identety>
      <Logo mr={2} size={['50px', '50px', (isMain ? '100px' : '75px')]} />
      <div>
        <Text as="h1" fontSize={[ 3, 3, (isMain ? 6 : 5)] }>
          Tharon Carlson
        </Text>
        {
          <Text as="p" fontSize={[1, 1, (isMain ? 3 : 2) ]}>
            Front End Developer / UI Designer
          </Text>
        }
      </div>
    </Identety>
    <Flex alignItems='center'>
      <NavLinkList display={['none', 'block']}>
        <NavLink to='./blog'>
          Articles
        </NavLink>
        <NavLink to='./about'>
          About
        </NavLink>
      </NavLinkList>
      <div>
        <GitHubLink
          href="https://github.com/tharon-c/tharon-personal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="Github" />
        </GitHubLink>
      </div>
    </Flex>
    </Flex>
    <NavLinkList width="200px" mx="auto" mt="2" justifyContent="space-evenly" display={['flex', 'none']}>
      <NavLink to='./blog'>
        Articles
      </NavLink>
      <NavLink to='./about'>
        About
      </NavLink>
    </NavLinkList>
  </Nav>
)

export default Header
