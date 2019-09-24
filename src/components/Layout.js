import React from 'react'
import { Helmet } from 'react-helmet'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import { color } from 'styled-system'
import Header from '../components/Header'
import theme from '../design-system/theme'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from "gatsby"

const GlobalStyle = createGlobalStyle`
  body {
    * {
      box-sizing: border-box;
    }
    margin: 0;
    line-height: 1;
    img {
      width: 100%;
    }
    h1, h2, h3, h4, h5, h6, h7, h8, p {
      font-size: 1em;
      margin-block-start: 0;
      margin-block-end: 0;
      margin-inline-start: 0;
      margin-inline-end: 0;
    }
    a {
      text-decoration: none;
      display: inline-block;
    }
  }
  body, button, input, textarea {
    font-family: BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Helvetica,Arial,sans-serif;
  }
  .Content {
    line-height: 1.7;
    p {
      font-size: 18px;
      margin-bottom: 32px;
      max-width: 600px;
    }
    h1 {
      font-size: 32px;
      margin-bottom: 24px;
    }

    h2 {
      font-size: 24px;
      margin-bottom: 24px;
    }

    h3 {
      font-size: 18px;
      margin-bottom: 24px;
    }
  }
`
const Wrapper = styled.div`
  min-height: 100vh;
  ${color}
`;
const TemplateWrapper = ({ children, isMain, ...rest }) => {
  const { title, description } = useSiteMetadata()

  return (
    <ThemeProvider theme={theme}>
    <Wrapper { ...rest }>
      <GlobalStyle/>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content={`${withPrefix("/")}img/og-image.jpg`} />
      </Helmet>
      <Header isMain={isMain}/>
      <div>{children}</div>
    </Wrapper>
    </ThemeProvider>
  )
}

export default TemplateWrapper
