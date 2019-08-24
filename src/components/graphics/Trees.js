import React from 'react';

export default (props) => (
  <svg
      y={ props.y }
      x={ props.x }
      width={ props.width }
      viewBox="0 0 100 185"
  >

          <ellipse
              style={{
                  transformOrigin: "bottom",
                  fill:"#aee28f",
                  stroke:"#7ea977",
                  strokeMiterlimit:"10",
                  strokeWidth:"2px"
              }}
              cx="30"
              cy="73"
              rx="20.58"
              ry="69.23"
          />
      <line
          style={{
              fill:"none",
              stroke:"#ce4a00",
              strokeMiterlimit:"10",
              strokeWidth:"2px"}}
          x1="30"
          x2="30"
          y1="185"
          y2="72"
      />
  </svg>
);
