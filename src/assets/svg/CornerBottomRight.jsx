/* eslint-disable react/prop-types */

import { Box } from "@mui/material";

const CornerBottomRight = ({ style, grad1, grad2 }) => {
  return (
    <Box sx={style}>
      <svg
        width="300"
        height="300"
        data-name="corner-bottom-right"
        xmlns="http://www.w3.org/2000/svg"
        style={{ pointerEvents: "none" }}
        data-inlinesvg=".inlineSvgFile-6"
      >
        <defs>
          <linearGradient
            id="corner-bottom-right"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0" stopColor={grad1} className="gradient-tran"></stop>
            <stop
              offset=".5"
              stopColor={grad2}
              className="gradient-tran"
            ></stop>
            <stop offset="1" stopColor={grad1} className="gradient-tran"></stop>
          </linearGradient>
        </defs>
        <path
          fill="url('#corner-bottom-right')"
          d="M292 300H0l20-20h255a5 5 0 0 0 5-5V20l20-20v292a8 8 0 0 1-8 8Z"
        ></path>
      </svg>
    </Box>
  );
};

export default CornerBottomRight;
