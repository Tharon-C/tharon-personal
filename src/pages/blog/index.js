import React from 'react'
import Banner from '../../components/Banner'
import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import Box from '../../components/Box'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout {...this.props}>
        <Banner />
        <Box mt={5} >
          <BlogRoll />
        </Box>
      </Layout>
    )
  }
}
