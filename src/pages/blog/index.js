import React from 'react'
import Text from '../../components/Text'
import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
          <Text
            as="h1"
            fontSize={5}
            textAlign="center"
            my={3}
          >
            Latest Stories
          </Text>
        <section>
          <BlogRoll />
        </section>
      </Layout>
    )
  }
}
