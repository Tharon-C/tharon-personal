import React from 'react'
import banner from '../assets/banner.svg'
import styled from 'styled-components'
import Box from './Box';

const BannerWrapper = styled.div`
 position: absolute;
 top: 0;
 width: 100%;
 z-index: -1;
`;
const LandscapeStyle = styled.img`
  position: absolute;
  bottom: -6vw;
  width: 100%;
`

export default (props) => (
  <Box height="200px">
    <BannerWrapper>
      <Box bg="sky.day" height="200px" width="100%"/>
      <LandscapeStyle src={banner} />
    </BannerWrapper>
  </Box>
)
