import React from 'react'
import banner from '../assets/banner.svg'
import styled from 'styled-components'

const BannerStyle = styled.img`
  position: absolute;
  top: 0;
  z-index: -1;
`

export default (props) => <BannerStyle {...props} src={banner} />
