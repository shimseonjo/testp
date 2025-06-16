import svgPaths from "./svg-nmxfitn96p";

function HomeButton() {
  return (
    <div
      className="absolute h-[38.5px] left-[22px] top-1 w-10"
      data-name="HomeButton"
    >
      <div className="absolute bottom-[-13.766%] left-[-10%] right-[-10%] top-[-7.013%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 48 47"
        >
          <g id="Frame 1707485609">
            <g filter="url(#filter0_d_66_177)" id="Ellipse 44">
              <ellipse
                cx="24"
                cy="22.25"
                fill="var(--fill-0, #2260FF)"
                rx="20"
                ry="19.25"
              />
            </g>
            <path
              d={svgPaths.p160b9b00}
              fill="var(--fill-0, white)"
              id="Vector"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="46.5"
              id="filter0_d_66_177"
              width="48"
              x="0"
              y="0.3"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="1.3" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_66_177"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_66_177"
                mode="normal"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default function TabBar() {
  return (
    <div className="relative rounded-3xl size-full" data-name="TabBar">
      <div className="absolute bg-[#ffffff] h-12 left-0 rounded-3xl top-0 w-[298px]" />
      <div
        className="absolute h-[21.86px] left-[103px] top-[12.059px] w-6"
        data-name="Vector"
      >
        <div className="absolute bottom-[-3.893%] left-[-3.542%] right-[-3.542%] top-[-3.888%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 26 24"
          >
            <path
              d={svgPaths.p8a7a700}
              id="Vector"
              stroke="var(--stroke-0, black)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.7"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute h-[21.86px] left-[180px] top-3 w-[19px]"
        data-name="Vector"
      >
        <div className="absolute bottom-[-3.888%] left-[-4.474%] right-[-4.474%] top-[-3.889%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 21 24"
          >
            <g id="Vector">
              <path
                d={svgPaths.p2f106300}
                stroke="var(--stroke-0, black)"
                strokeLinecap="round"
                strokeWidth="1.7"
              />
              <path
                d={svgPaths.p1a455f00}
                stroke="var(--stroke-0, black)"
                strokeLinecap="round"
                strokeWidth="1.7"
              />
            </g>
          </svg>
        </div>
      </div>
      <div
        className="absolute h-[21.86px] left-[252px] top-[12.059px] w-[18px]"
        data-name="Vector"
      >
        <div className="absolute bottom-[-3.788%] left-[-4.722%] right-[-4.722%] top-[-3.888%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 20 24"
          >
            <path
              d={svgPaths.p301c0180}
              fill="var(--stroke-0, black)"
              id="Vector"
            />
          </svg>
        </div>
      </div>
      <HomeButton />
    </div>
  );
}