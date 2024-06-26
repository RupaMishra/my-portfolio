/* eslint-disable react/prop-types */

import { Box } from "@mui/material";

const CornerTopLeft = ({ style, grad1, grad2 }) => {
  return (
    <Box sx={style}>
      <svg
        width="300"
        height="300"
        data-name="corner-top-left"
        xmlns="http://www.w3.org/2000/svg"
        style={{ pointerEvents: "none" }}
        data-inlinesvg=".inlineSvgFile-2"
      >
        <defs>
          <linearGradient
            id="corner-top-left"
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
          fill="url('#corner-top-left')"
          d="M8 0h292l-20 20H25a5 5 0 0 0-5 5v255L0 300V8a8 8 0 0 1 8-8Z"
        ></path>
      </svg>
    </Box>
  );
};

export default CornerTopLeft;
