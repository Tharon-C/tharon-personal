import React from 'react'
import Banner from '../../components/Banner'
import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout {...this.props}>
        <Banner />
        <BlogRoll />
      </Layout>
    )
  }
}
