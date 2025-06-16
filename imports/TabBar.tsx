import svgPaths from "./svg-h34nqqm2so";

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
  // TabBar is now handled by App.tsx, so this component returns null
  return null;
}