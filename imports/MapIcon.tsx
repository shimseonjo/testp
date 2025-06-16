import svgPaths from "./svg-71giifag4q";

export default function MapIcon() {
  return (
    <div className="relative size-full" data-name="Map icon">
      <div className="absolute h-[38px] left-[9px] top-[7px] w-[42px]">
        <div className="absolute bottom-[-18.421%] left-[-9.643px] right-[-16.667%] top-[-10.526%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 52 49"
          >
            <g filter="url(#filter0_d_13_222)" id="Icon">
              <g id="Ellipse 1">
                <ellipse
                  cx="24"
                  cy="32.5"
                  fill="var(--fill-0, #2260FF)"
                  fillOpacity="0.25"
                  rx="21"
                  ry="9.5"
                />
                <ellipse
                  cx="24"
                  cy="32.5"
                  fill="var(--fill-1, #ECECEC)"
                  fillOpacity="0.2"
                  rx="21"
                  ry="9.5"
                />
              </g>
              <path
                clipRule="evenodd"
                d={svgPaths.p302af180}
                fill="var(--fill-0, #2260FF)"
                fillRule="evenodd"
                id="Shape"
                stroke="var(--stroke-0, #2260FF)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <path
                clipRule="evenodd"
                d={svgPaths.p25a83140}
                fill="var(--fill-0, white)"
                fillRule="evenodd"
                id="Oval"
                stroke="var(--stroke-0, white)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </g>
            <defs>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="49"
                id="filter0_d_13_222"
                width="52"
                x="0"
                y="0"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dx="2" dy="2" />
                <feGaussianBlur stdDeviation="2.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  in2="BackgroundImageFix"
                  mode="normal"
                  result="effect1_dropShadow_13_222"
                />
                <feBlend
                  in="SourceGraphic"
                  in2="effect1_dropShadow_13_222"
                  mode="normal"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}