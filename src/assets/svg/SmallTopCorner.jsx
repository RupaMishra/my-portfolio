/* eslint-disable react/prop-types */

const SmallTopCorner = ({ style, grad1, grad2 }) => {
  return (
    <div style={style}>
      <svg
        width="100"
        height="90"
        xmlns="http://www.w3.org/2000/svg"
        clipRule="evenodd"
        fillRule="evenodd"
        imageRendering="optimizeQuality"
        textRendering="geometricPrecision"
        shapeRendering="geometricPrecision"
        style={{ pointerEvents: "none" }}
      >
        <g>
          <defs>
            <linearGradient
              id="small-top-left"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0"
                stopColor={grad1}
                className="gradient-tran"
              ></stop>
              <stop
                offset=".4"
                stopColor={grad2}
                className="gradient-tran"
              ></stop>
              <stop
                offset="1"
                stopColor={grad1}
                className="gradient-tran"
              ></stop>
            </linearGradient>
          </defs>

          {/* <line
            stroke="null"
            fill="url('#grad1')"
            id="svg_2"
            y2="97.95908"
            x2="7.95928"
            y1="4.08174"
            x1="5.10214"
          /> */}
          {/* <path
            fill="url('#grad1')"
            id="svg_3"
            d="m6.32663,47.75511l1.02029,-4.4899"
            fillRule="nonzero"
          /> */}
          {/* <path
            id="svg_1"
            d="m0.45036,-0.05749l100.37063,0l0,2.76427l-100.37063,0l0,-2.76427z"
            fill="url('#grad1')"
            fillRule="nonzero"
          /> */}
          {/* <path
            fill="url('#grad1')"
            id="svg_1"
            d="m0.006,0.50495l2.89269,0l0,101.8878l-2.89269,0l0,-101.8878z"
            fillRule="nonzero"
          /> */}

          <path
            fill="url('#small-top-left')"
            stroke="null"
            id="svg_1"
            d="m80.12967,-0.4386a2.4412,2.14267 0 0 1 2.44766,2.16109c-0.00969,1.19462 -1.12534,2.16817 -2.48641,2.16959l-75.23817,0.00709l-0.00646,66.03579c-0.00161,1.19462 -1.11081,2.17384 -2.47188,2.18235a2.4412,2.14267 0 0 1 -2.46219,-2.14833l0.00646,-68.21813c0.00969,-1.20738 1.12534,-2.18093 2.48641,-2.18235l77.72459,-0.00709z"
            fillRule="nonzero"
          />
        </g>
      </svg>
    </div>
  );
};

export default SmallTopCorner;
