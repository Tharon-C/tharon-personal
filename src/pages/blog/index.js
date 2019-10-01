import React from 'react'
import Banner from '../../components/Banner'
import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default props => (
  <Layout {...props}>
    <Banner />
    <BlogRoll />
  </Layout>
)
