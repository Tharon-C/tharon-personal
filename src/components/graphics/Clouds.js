import React, { Component } from 'react';
import { TimelineMax, Power0 } from "gsap";
import clouds from '../../assets/Clouds.svg';

const style = {
  clouds: {
    overflow: 'hidden',
    width: '800px',
  },
  overlay: {
    background: "linear-gradient(to right, rgba(209,242,254,1) 0%,rgba(209,242,254,0) 25%,rgba(209,242,254,0) 85%,rgba(209,242,254,1) 100%",
    position: 'absolute',
    hight: '100%',
    width: '100%',
    top: 0,
    bottom: 0
  }
}

class Clouds extends Component {
  constructor(props){
    super(props);
    // reference to the DOM node
    this.clouds = null;
    this.wrapper = null;
    // reference to the animation
    this.tween = null;
  }
  componentDidMount() {
    const width = this.wrapper.offsetWidth;
    this.tween = new TimelineMax({repeat: -1})
    .fromTo(
      this.clouds, 50,
      { x: - width, ease: Power0.easeNone },
      { x: 0, ease: Power0.easeNone })
    .play();
  }
  render() {
    return (
      <div ref={wrapper => this.wrapper = wrapper} style={{ ...style.clouds, ...this.props.style }}>
        <img style={{ width: '200%'}} ref={clouds => this.clouds = clouds} src={clouds} />
        <div style={style.overlay} />
      </div>
    )
  }
}

export default Clouds
