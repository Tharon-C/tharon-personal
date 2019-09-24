import React from 'react'
import github from '../img/github-icon.svg'
import Logo from '../components/graphics/Logo'
import Flex from '../components/Flex'
import Text from '../components/Text'
import Link from 'gatsby-link'
import styled from 'styled-components'

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
  display: flex;
  padding: 0 63px;
  justify-content: space-between;
`;
const NavLink = styled(Link)`
  padding: 16px;
  height: 50px;
  color: black;
  &:hover {
    background: rgba(0,0,0,.05);
  }
`;

const GitHubLink = styled.a`
  text-decoration: none;
  width: 24px;
  margin: 24px;
`;

const Header = ({isMain}) => (
  <Nav px="5">
    <Identety>
      <Logo size={ isMain ? '100px' : '75px' } />
      <div>
        <Text as="h1" fontSize={ isMain ? 6 : 5 }>
          Tharon Carlson
        </Text>
        {
          <Text as="p" fontSize={ isMain ? 3 : 2 }>
            Front End Developer / UI Designer
          </Text>
        }
      </div>
    </Identety>
    <Flex alignItems='center' py="3">
      <NavLink to='./blog'>
        Articles
      </NavLink>
      <NavLink to='./about'>
        About
      </NavLink>
      <GitHubLink
        href="https://github.com/tharon-c/tharon-personal"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={github} alt="Github" />
      </GitHubLink>
    </Flex>
  </Nav>
)

export default Header
