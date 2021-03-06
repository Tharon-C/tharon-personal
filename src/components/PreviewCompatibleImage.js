import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space, layout } from 'styled-system'
import ImgNoStyles from 'gatsby-image'

const Img = styled(ImgNoStyles)`
  ${space}
  ${layout}
`
const PreviewCompatibleImage = ({ imageInfo, ...rest }) => {
  const { alt = '', childImageSharp, image } = imageInfo

  if (!!image && !!image.childImageSharp) {
    return (
      <Img { ...rest } fluid={image.childImageSharp.fluid} alt={alt} />
    )
  }

  if (!!childImageSharp) {
    return <Img { ...rest } fluid={childImageSharp.fluid} alt={alt} />
  }

  if (!!image && typeof image === 'string')
    return <img src={image} alt={alt} />

  return null
}

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
}

export default PreviewCompatibleImage
