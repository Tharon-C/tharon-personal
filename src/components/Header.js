import React from 'react'
import github from '../img/github-icon.svg'
import Logo from '../components/graphics/Logo'
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
  padding: 16px;
  display: flex;
  justify-content: space-between;
`;

const Header = () => (
  <Nav style={{padding: 16}}>
    <Identety>
      <Logo size={'100px'} />
      <div>
        <h1 style={{ marginBottom: 0, fontSize: '42px' }}>
          Tharon Carlson
        </h1>
        {
          <p style={{ marginBottom: 0, fontSize: '24px' }}>
            Front End Developer / UI Designer
          </p>
        }
      </div>
    </Identety>
    <a
      className="navbar-item"
      href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="icon">
        <img src={github} alt="Github" />
      </span>
    </a>
  </Nav>
)

export default Header
