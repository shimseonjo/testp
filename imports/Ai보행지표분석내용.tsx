import svgPaths from "./svg-ditv6d4crp";

function Group1707485409() {
  return (
    <div className="relative shrink-0 size-5">
      <div className="absolute bottom-[-5%] left-[-5%] right-[-5%] top-[-5%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 22 22"
        >
          <g id="Group 1707485409">
            <path
              d={svgPaths.p3e880d00}
              id="Vector"
              stroke="var(--stroke-0, black)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d={svgPaths.p17517260}
              id="Vector_2"
              stroke="var(--stroke-0, black)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame1707485635() {
  return (
    <div className="relative shrink-0 w-[162px]">
      <div className="box-border content-stretch flex flex-row gap-[13px] items-center justify-start p-0 relative w-[162px]">
        <Group1707485409 />
        <div className="font-['Mulish:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#000000] text-[18px] text-left text-nowrap">
          <p className="block leading-[normal] whitespace-pre">보폭 시간</p>
        </div>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="relative shrink-0" data-name="보폭 시간 토글">
      <div className="box-border content-stretch flex flex-row gap-5 items-center justify-start p-0 relative">
        <Frame1707485635 />
        <div
          className="font-['Noto_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#000000] text-[18px] text-left w-[54px]"
          style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
        >
          <p className="block leading-[normal]">1.12초</p>
        </div>
        <div
          className="h-[25.5px] relative shrink-0 w-[26px]"
          data-name="보폭 시간 상태"
        >
          <div className="absolute bottom-[-23.529%] left-[-7.692%] right-[-23.077%] top-[-7.843%]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 34 34"
            >
              <g filter="url(#filter0_d_77_114)" id="ë³´í­ ìê° ìí">
                <ellipse
                  cx="15"
                  cy="14.75"
                  fill="var(--fill-0, #0BE62C)"
                  rx="13"
                  ry="12.75"
                />
              </g>
              <defs>
                <filter
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                  height="33.5"
                  id="filter0_d_77_114"
                  width="34"
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
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    in2="BackgroundImageFix"
                    mode="normal"
                    result="effect1_dropShadow_77_114"
                  />
                  <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow_77_114"
                    mode="normal"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div
      className="[grid-area:1_/_1] ml-0 mt-0 relative w-[295px]"
      data-name="보폭시간 분석 내용"
    >
      <div className="box-border content-stretch flex flex-col font-['Mulish:Medium',_sans-serif] font-medium gap-1.5 items-start justify-start leading-[0] p-0 relative text-left w-[295px]">
        <div className="relative shrink-0 text-[#353535] text-[14.5px] tracking-[-0.58px] w-full">
          <p className="block leading-[normal]">
            한쪽 발이 땅에 닿은 후, 같은 발이 다시 닿을 때까지 걸리는
            시간입니다. 걸음 템포를 확인할 수 있어요.
          </p>
        </div>
        <div className="relative shrink-0 text-[#000000] text-[16px] w-full">
          <p className="font-['Mulish:SemiBold',_sans-serif] font-semibold leading-[normal]">
            <span>{`분석 결과 `}</span>정상입니다!
          </p>
        </div>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
      data-name="보폭시간 분석 내용"
    >
      <Component1 />
    </div>
  );
}

function Component3() {
  return (
    <div
      className="relative rounded-2xl shrink-0 w-full"
      data-name="보폭시간 파트"
    >
      <div className="absolute border border-[#979797] border-solid inset-0 pointer-events-none rounded-2xl" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[11px] items-start justify-start p-[15px] relative w-full">
          <Component />
          <Component2 />
        </div>
      </div>
    </div>
  );
}

function Group1707485410() {
  return (
    <div className="relative shrink-0 size-5">
      <div className="absolute bottom-[-5%] left-[-5%] right-[-5%] top-[-5%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 22 22"
        >
          <g id="Group 1707485409">
            <path
              d={svgPaths.p3e880d00}
              id="Vector"
              stroke="var(--stroke-0, black)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d={svgPaths.p17517260}
              id="Vector_2"
              stroke="var(--stroke-0, black)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame1707485636() {
  return (
    <div className="relative shrink-0 w-[162px]">
      <div className="box-border content-stretch flex flex-row gap-[13px] items-center justify-start p-0 relative w-[162px]">
        <Group1707485410 />
        <div className="font-['Mulish:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#000000] text-[18px] text-left text-nowrap">
          <p className="block leading-[normal] whitespace-pre">
            양발 지지 비율
          </p>
        </div>
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div className="relative shrink-0" data-name="양발 지지 비율 토글">
      <div className="box-border content-stretch flex flex-row gap-5 items-center justify-start p-0 relative">
        <Frame1707485636 />
        <div
          className="font-['Noto_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#000000] text-[18px] text-left w-[54px]"
          style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
        >
          <p className="block leading-[normal]">28.4%</p>
        </div>
        <div
          className="h-[25.5px] relative shrink-0 w-[26px]"
          data-name="양발 지지 비율 상태"
        >
          <div className="absolute bottom-[-23.529%] left-[-7.692%] right-[-23.077%] top-[-7.843%]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 34 34"
            >
              <g filter="url(#filter0_d_77_127)" id="ìë° ì§ì§ ë¹ì¨ ìí">
                <ellipse
                  cx="15"
                  cy="14.75"
                  fill="var(--fill-0, #F51A1A)"
                  rx="13"
                  ry="12.75"
                />
              </g>
              <defs>
                <filter
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                  height="33.5"
                  id="filter0_d_77_127"
                  width="34"
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
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    in2="BackgroundImageFix"
                    mode="normal"
                    result="effect1_dropShadow_77_127"
                  />
                  <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow_77_127"
                    mode="normal"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component5() {
  return (
    <div
      className="[grid-area:1_/_1] ml-0 mt-0 relative w-[295px]"
      data-name="양발 지지 비율 분석 내용"
    >
      <div className="box-border content-stretch flex flex-col gap-1.5 items-start justify-start leading-[0] p-0 relative text-left w-[295px]">
        <div className="font-['Mulish:Medium',_sans-serif] font-medium relative shrink-0 text-[#353535] text-[14.5px] tracking-[-0.58px] w-full">
          <p className="block leading-[normal]">
            두 발이 동시에 땅에 닿아 있는 시간의 비율이에요. 보행 균형이
            불안할수록 높아집니다.
          </p>
        </div>
        <div className="font-['Mulish:SemiBold',_sans-serif] font-semibold relative shrink-0 text-[#000000] text-[16px] w-full">
          <p className="block leading-[normal]">분석 결과 위험입니다!</p>
        </div>
      </div>
    </div>
  );
}

function Group1707485408() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Component5 />
    </div>
  );
}

function Component6() {
  return (
    <div
      className="relative rounded-2xl shrink-0 w-full"
      data-name="양발 지지 비율 파트"
    >
      <div className="absolute border border-[#979797] border-solid inset-0 pointer-events-none rounded-2xl" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[11px] items-start justify-start p-[15px] relative w-full">
          <Component4 />
          <Group1707485408 />
        </div>
      </div>
    </div>
  );
}

function Group1707485411() {
  return (
    <div className="relative shrink-0 size-5">
      <div className="absolute bottom-[-5%] left-[-5%] right-[-5%] top-[-5%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 22 22"
        >
          <g id="Group 1707485409">
            <path
              d={svgPaths.p3e880d00}
              id="Vector"
              stroke="var(--stroke-0, black)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d={svgPaths.p17517260}
              id="Vector_2"
              stroke="var(--stroke-0, black)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame1707485637() {
  return (
    <div className="relative shrink-0 w-[162px]">
      <div className="box-border content-stretch flex flex-row gap-[13px] items-center justify-start p-0 relative w-[162px]">
        <Group1707485411 />
        <div className="font-['Mulish:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#000000] text-[18px] text-left text-nowrap">
          <p className="block leading-[normal] whitespace-pre">
            양발 보폭 차이
          </p>
        </div>
      </div>
    </div>
  );
}

function Component7() {
  return (
    <div className="relative shrink-0" data-name="양발 보폭 파이 토글">
      <div className="box-border content-stretch flex flex-row gap-5 items-center justify-start p-0 relative">
        <Frame1707485637 />
        <div
          className="font-['Noto_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#000000] text-[18px] text-left w-[54px]"
          style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
        >
          <p className="block leading-[normal]">0.06m</p>
        </div>
        <div
          className="h-[25.5px] relative shrink-0 w-[26px]"
          data-name="양발 차이 상태"
        >
          <div className="absolute bottom-[-23.529%] left-[-7.692%] right-[-23.077%] top-[-7.843%]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 34 34"
            >
              <g filter="url(#filter0_d_77_114)" id="ë³´í­ ìê° ìí">
                <ellipse
                  cx="15"
                  cy="14.75"
                  fill="var(--fill-0, #0BE62C)"
                  rx="13"
                  ry="12.75"
                />
              </g>
              <defs>
                <filter
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                  height="33.5"
                  id="filter0_d_77_114"
                  width="34"
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
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    in2="BackgroundImageFix"
                    mode="normal"
                    result="effect1_dropShadow_77_114"
                  />
                  <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow_77_114"
                    mode="normal"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component8() {
  return (
    <div
      className="[grid-area:1_/_1] ml-0 mt-0 relative w-[295px]"
      data-name="양발 보폭 차이 분석 내용"
    >
      <div className="box-border content-stretch flex flex-col font-['Mulish:Medium',_sans-serif] font-medium gap-1.5 items-start justify-start leading-[0] p-0 relative text-left w-[295px]">
        <div className="relative shrink-0 text-[#353535] text-[14.5px] tracking-[-0.58px] w-full">
          <p className="block leading-[normal]">
            왼발과 오른발의 걸음 길이가 얼마나 다른지를 보여줍니다. 좌우 균형
            상태를 파악할 수 있어요.
          </p>
        </div>
        <div className="relative shrink-0 text-[#000000] text-[16px] w-full">
          <p className="font-['Mulish:SemiBold',_sans-serif] font-semibold leading-[normal]">
            <span>{`분석 결과 `}</span>정상입니다!
          </p>
        </div>
      </div>
    </div>
  );
}

function Group1707485412() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Component8 />
    </div>
  );
}

function Component9() {
  return (
    <div
      className="relative rounded-2xl shrink-0 w-full"
      data-name="양발 보폭 차이 파트"
    >
      <div className="absolute border border-[#979797] border-solid inset-0 pointer-events-none rounded-2xl" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[11px] items-start justify-start p-[15px] relative w-full">
          <Component7 />
          <Group1707485412 />
        </div>
      </div>
    </div>
  );
}

function Group1707485413() {
  return (
    <div className="relative shrink-0 size-5">
      <div className="absolute bottom-[-5%] left-[-5%] right-[-5%] top-[-5%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 22 22"
        >
          <g id="Group 1707485409">
            <path
              d={svgPaths.p3e880d00}
              id="Vector"
              stroke="var(--stroke-0, black)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d={svgPaths.p17517260}
              id="Vector_2"
              stroke="var(--stroke-0, black)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame1707485638() {
  return (
    <div className="relative shrink-0 w-[162px]">
      <div className="box-border content-stretch flex flex-row gap-[13px] items-center justify-start p-0 relative w-[162px]">
        <Group1707485413 />
        <div className="font-['Mulish:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#000000] text-[18px] text-left text-nowrap">
          <p className="block leading-[normal] whitespace-pre">
            평균 보행 속도
          </p>
        </div>
      </div>
    </div>
  );
}

function Component10() {
  return (
    <div className="relative shrink-0" data-name="평균 보행 속도 토글">
      <div className="box-border content-stretch flex flex-row gap-5 items-center justify-start p-0 relative">
        <Frame1707485638 />
        <div
          className="font-['Noto_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#000000] text-[18px] text-left tracking-[-1.26px] w-[54px]"
          style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
        >
          <p className="adjustLetterSpacing block leading-[normal]">0.9m/s</p>
        </div>
        <div
          className="h-[25.5px] relative shrink-0 w-[26px]"
          data-name="평균 보행 속도 상태"
        >
          <div className="absolute bottom-[-23.529%] left-[-7.692%] right-[-23.077%] top-[-7.843%]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 34 34"
            >
              <g filter="url(#filter0_d_77_133)" id="íê·  ë³´í ìë ìí">
                <ellipse
                  cx="15"
                  cy="14.75"
                  fill="var(--fill-0, #FFC800)"
                  rx="13"
                  ry="12.75"
                />
              </g>
              <defs>
                <filter
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                  height="33.5"
                  id="filter0_d_77_133"
                  width="34"
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
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    in2="BackgroundImageFix"
                    mode="normal"
                    result="effect1_dropShadow_77_133"
                  />
                  <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow_77_133"
                    mode="normal"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component11() {
  return (
    <div
      className="[grid-area:1_/_1] ml-0 mt-0 relative w-[295px]"
      data-name="평균 보행 속도 분석 내용"
    >
      <div className="box-border content-stretch flex flex-col gap-1.5 items-start justify-start leading-[0] p-0 relative text-left w-[295px]">
        <div className="font-['Mulish:Medium',_sans-serif] font-medium relative shrink-0 text-[#353535] text-[14.5px] tracking-[-0.58px] w-full">
          <p className="block leading-[normal]">
            단위 시간 동안 이동한 거리를 나타내는 지표입니다. 전체 활동성과 운동
            능력을 확인할 수 있어요.
          </p>
        </div>
        <div className="font-['Mulish:SemiBold',_sans-serif] font-semibold relative shrink-0 text-[#000000] text-[16px] w-full">
          <p className="block leading-[normal]">분석 결과 주의입니다!</p>
        </div>
      </div>
    </div>
  );
}

function Group1707485414() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Component11 />
    </div>
  );
}

function Component12() {
  return (
    <div
      className="relative rounded-2xl shrink-0 w-full"
      data-name="평균 보행 속도 파트"
    >
      <div className="absolute border border-[#979797] border-solid inset-0 pointer-events-none rounded-2xl" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[11px] items-start justify-start p-[15px] relative w-full">
          <Component10 />
          <Group1707485414 />
        </div>
      </div>
    </div>
  );
}

export default function Ai() {
  return (
    <div className="relative size-full" data-name="AI 보행 지표 분석 내용">
      <div className="box-border content-stretch flex flex-col gap-[9px] items-start justify-start p-0 relative size-full">
        <Component3 />
        <Component6 />
        <Component9 />
        <Component12 />
      </div>
    </div>
  );
}