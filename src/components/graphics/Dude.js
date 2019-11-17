import React from 'react';
import { TimelineMax } from 'gsap/all';

class Dude extends React.Component {
  constructor(props) {
    super(props);
    this.arm = null;
    this.armR = null;
    this.armUR = null;
    this.head = null;

    this.LeftArmTL = null;
    this.RightArmTL2 = null;
    this.HeadTL = null;
  }
  componentDidMount() {
    this.LeftArmTL = new TimelineMax({repeat: -1})
    .to(this.arm, .3, { rotation: -5 })
    .yoyo(true);

    this.RightArmTL = new TimelineMax({repeat: -1})
    .set(this.armUR, { transformOrigin: "right"})
    .set(this.handR, { transformOrigin: 'center', rotation: -7, x: 2})

    .to(this.armR, 4, { x: 0 }, "rightArm1")
    .to(this.armUR, 4, { rotation: 0 }, "rightArm1")

    .to(this.armR, 1, { x: -25 }, "rightArm2")
    .to(this.armUR, 1, { rotation: 7 }, "rightArm2")
    .to(this.handR, 1, { y: 2 }, "rightArm2")

    .to(this.armR, 4, { x: -25 }, "rightArm3")
    .to(this.armUR, 4, { rotation: 7 }, "rightArm3")
    .to(this.handR, 4, { y: 2 }, "rightArm3")

    .to(this.armR, 2, { x: 4 }, "rightArm4")
    .to(this.armUR, 2, { rotation: -2 }, "rightArm4")
    .to(this.handR, 2, { y: -7 }, "rightArm4")
    .yoyo(true);

    this.HeadTL = new TimelineMax({repeat: -1})
    .set(this.head, { transformOrigin: "bottom"})
    .to(this.head, 3, { rotation: -15 })
    .to(this.head, 5, { rotation: 0 })
    .to(this.head, 5, { rotation: 0 })
    .to(this.head, 2, { rotation: 3 })
    .yoyo(true);
  }
  render() {
    return (
      <svg
        viewBox="0 0 1000 831.79"
        width={ this.props.width }
        y={ this.props.y }
        x={ this.props.x }
      >
        <rect height="31.6" style={{"fill":"#b77e34"}} width="1000" y="542.97"/>
        <path style={{"fill":"#c96728"}} d="M533,468.76H369.91c-8.53,0-15.51-7.74-15.51-17.2L318.28,203.68c0-9.46,7-17.2,15.51-17.2L533,188.15c8.53,0,15.51,7.74,15.51,17.2V451.56C548.53,461,541.55,468.76,533,468.76Z"/>
        <rect height="82.76" style={{"fill":"#6a84a3"}} width="193.98" rx="18.06" ry="18.06" x="337.86" y="460.21"/>
        <path ref={ arm => this.armUR = arm } style={{"fill":"#c96728"}} d="M621.74,408.1l-15.36,6.43c-9.22,3.86-19.47-.42-22.78-9.52L519.3,228.34c-3.31-9.1,1.52-19.7,10.74-23.56l15.36-6.43c9.22-3.86,19.47.42,22.78,9.52l64.3,176.67C635.8,393.63,631,404.24,621.74,408.1Z"/>
        <path style={{"fill":"#e2d46d"}} d="M365.6,282c-35.46,7.17-59.34,41.44-59.34,41.44-7.85,11.26-25.26,18.17-38.7,15.35,0,0-98.49-20.7-145.6,39.09-28.38,36-32.49,87.57-14.11,132.18h0c24.19,58.71,81.26,99.29,140.71,93.18,60.93-6.26,101.12-83,101.12-83,6.37-12.16,22.64-20.15,36.16-17.76,0,0,23.9,4.23,47.52-5.51,60.71-25,84.38-104.63,43.59-166.36C452.14,293,407.12,273.57,365.6,282Z"/>
        <polygon style={{"fill":"#895c2c"}} points="825.78 239.09 440.82 403.08 424.22 362.79 812.96 207.98 825.78 239.09"/>
        <circle style={{"fill":"#3f3d3b"}} cx="373.32" cy="405.84" r="37.78" transform="translate(-126.46 172.83) rotate(-22.39)"/>
        <polygon style={{"fill":"#b77e34"}} points="912.05 159.03 809.47 199.51 829.56 248.28 930.25 203.21 912.05 159.03"/>
        <g ref={ head => this.head = head }>
          <ellipse style={{"fill":"#eabc89"}} cx="470.19" cy="111.3" rx="94.89" ry="66.07" transform="translate(225.9 528.18) rotate(-72.95)"/>
          <path style={{"fill":"#895c2c"}} d="M392.51,66.69l20.84-7.53,9.25-32h25.94l21-11.3L499.54,0l-0.2,17.72,22.82,0.75-4.56,16.2,22.62,9.06L556.9,76.11l-18.34,28.25S535.93,98.08,527,92.79c-3-1.76-6.7,5.61-11.25,4.34-4.17-1.16-9.06-11-14.76-11.35-9.21-.51-20.54.37-34.46,3.5-6.42,1.45-19.28,22-19.28,22l-11.62-9.48s0.36-36.4-21.35-17.42c-1.89,1.41-11.28,45.92-15.57,41.94C393,121.09,392.51,66.69,392.51,66.69Z"/>
        </g>
        <rect height="13.13" style={{"fill":"#b77e34"}} width="836.91" x="79.57" y="690.11"/>
        <path style={{"fill":"#8aaad9"}} d="M289.11,776.41h0a34.38,34.38,0,0,0,40.57-24.83L392,515.17a34.38,34.38,0,0,0-25.92-42.36l-14.92-3.25a34.38,34.38,0,0,0-41.05,26.92L262.7,736.14A34.38,34.38,0,0,0,289.11,776.41Z"/>
        <path style={{"fill":"#8aaad9"}} d="M528.91,775h0a34.38,34.38,0,0,0,34.35-32.9l10.57-244.27a34.38,34.38,0,0,0-34.35-35.87H524.21a34.38,34.38,0,0,0-34.38,35l4.7,244.27A34.38,34.38,0,0,0,528.91,775Z"/>
        <path style={{"fill":"#3f3f3d"}} d="M266.59,779.5h15.8a35.74,35.74,0,0,1,35.74,35.74v0a16.55,16.55,0,0,1-16.55,16.55H247.41a16.55,16.55,0,0,1-16.55-16.55v0a35.74,35.74,0,0,1,35.74-35.74Z"/>
        <path style={{"fill":"#3f3f3d"}} d="M523.94,779.5h15.8a35.74,35.74,0,0,1,35.74,35.74v0a16.55,16.55,0,0,1-16.55,16.55H504.76a16.55,16.55,0,0,1-16.55-16.55v0a35.74,35.74,0,0,1,35.74-35.74Z"/>
        <path style={{"fill":"#c96728"}} d="M194.74,349.44L356,242.73c7.27-4.81,9.58-15.4,5.12-23.52l-10.48-19.12c-4.46-8.13-14.05-10.84-21.32-6L168.05,300.77c-7.27,4.81-9.58,15.4-5.12,23.52l10.48,19.12C177.87,351.54,187.47,354.26,194.74,349.44Z"/>
        <g ref={ arm => { this.arm = arm } }>
          <rect height="50.87" style={{"fill":"#c96728"}} width="190.82" rx="15.83" ry="15.83" transform="translate(214.87 -69.96) rotate(30)" x="142.58" y="340.53"/>
          <rect height="65.09" style={{"fill":"#eabc89"}} width="65.09" rx="18.06" ry="18.06" x="326.6" y="370.3"/>
        </g>
        <g ref={ arm => { this.armR = arm }}>
          <rect height="162.62" style={{"fill":"#c96728"}} width="53.24" rx="26.62" ry="26.62" transform="translate(421.68 -342.83) rotate(42.53)" x="624.64" y="288.99"/>
          <rect ref={ hand => { this.handR = hand }} height="65.09" style={{"fill":"#eabc89"}} width="65.09" rx="18.06" ry="18.06" transform="translate(312.99 -376.31) rotate(36.93)" x="687.5" y="248.02"/>
        </g>
        <rect height="231.08" style={{"fill":"#b77e34"}} width="21.44" x="68.85" y="574.57"/>
        <rect height="231.08" style={{"fill":"#b77e34"}} width="21.44" x="916.48" y="574.57"/>
      </svg>
    );
  }
}

export default Dude;
