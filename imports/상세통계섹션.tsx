import svgPaths from "./svg-g7ogl1mp3z";

function Component() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
      data-name="질병 예측 분석 타이틀"
    >
      <div className="[grid-area:1_/_1] flex flex-col font-['League_Spartan:Bold',_sans-serif] font-bold justify-center ml-[67.5px] mt-[8.5px] relative text-[#00278c] text-[18px] text-center text-nowrap translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[normal] whitespace-pre">질병 예측 분석</p>
      </div>
      <div
        className="[grid-area:1_/_1] h-px ml-0 mt-0 relative w-[325px]"
        data-name="Divider"
      >
        <div className="absolute bottom-1/2 left-0 right-0 top-0">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 325 1"
          >
            <path
              clipRule="evenodd"
              d="M0 0H325V0.5H0V0Z"
              fill="var(--fill-0, #C7C8CA)"
              fillRule="evenodd"
              id="Divider"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="relative shrink-0 w-[73.433px]" data-name="파킨슨병 타이틀">
      <div className="box-border content-stretch flex flex-col gap-px items-center justify-start leading-[0] not-italic p-0 relative text-[#2e2e30] text-left w-[73.433px]">
        <div className="font-['Inter:Bold',_sans-serif] font-bold h-[21.676px] relative shrink-0 text-[16px] w-full">
          <p className="block leading-[normal]">파킨슨병</p>
        </div>
        <div className="font-['Inter:Medium',_sans-serif] font-medium h-[17px] relative shrink-0 text-[12px] w-full">
          <p className="block leading-[normal]">관찰 유지</p>
        </div>
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div
      className="h-[18.1px] relative shrink-0 w-[56.35px]"
      data-name="파킨슨병 그래프"
    >
      <div className="absolute bottom-0 left-[-0.887%] right-[-0.887%] top-[-2.762%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 58 20"
        >
          <g id="íí¨ì¨ë³ ê·¸ëí">
            <path
              d={svgPaths.p348b3400}
              fill="url(#paint0_linear_95_262)"
              id="Vector 4"
            />
            <path
              d={svgPaths.p1a5cd280}
              id="Vector 5"
              stroke="var(--stroke-0, #5DB48A)"
              strokeLinecap="round"
            />
          </g>
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_95_262"
              x1="26.9455"
              x2="26.5401"
              y1="-1.16975"
              y2="19.1002"
            >
              <stop stopColor="#49A677" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function ArrowUp() {
  return (
    <div className="relative shrink-0 size-6" data-name="arrow-up">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g clipPath="url(#clip0_95_258)" id="arrow-up">
          <path
            d="M12 0V19"
            id="Vector"
            stroke="var(--stroke-0, #0BE62C)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="M19 12L12 19L5 12"
            id="Vector_2"
            stroke="var(--stroke-0, #0BE62C)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
        <defs>
          <clipPath id="clip0_95_258">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component4() {
  return (
    <div className="relative shrink-0 w-[290px]" data-name="파킨슨병 내용">
      <div className="box-border content-stretch flex flex-row gap-[26px] items-center justify-start p-0 relative w-[290px]">
        <Component1 />
        <Component3 />
        <div className="font-['Inter:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#2e2e30] text-[14px] text-left w-[51px]">
          <p className="block leading-[normal]">-0.55%</p>
        </div>
        <ArrowUp />
      </div>
    </div>
  );
}

function Component5() {
  return (
    <div className="relative shrink-0 w-full" data-name="파킨슨병 파트">
      <div className="absolute border-[0px_0px_1px] border-[rgba(151,151,151,0.5)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end relative size-full">
        <div className="box-border content-stretch flex flex-row gap-12 items-center justify-end p-[10px] relative w-full">
          <Component4 />
        </div>
      </div>
    </div>
  );
}

function Frame1707485668() {
  return (
    <div className="absolute h-[39.676px] leading-[0] left-0 not-italic text-[#2e2e30] text-left top-0 w-[73.433px]">
      <div className="absolute font-['Inter:Bold',_sans-serif] font-bold h-[21.676px] left-0 text-[16px] top-0 w-[73.433px]">
        <p className="block leading-[normal]">뇌졸중</p>
      </div>
      <div className="absolute font-['Inter:Medium',_sans-serif] font-medium h-[17px] left-0 text-[12px] top-[22.676px] w-[73.433px]">
        <p className="block leading-[normal]">주의 필요</p>
      </div>
    </div>
  );
}

function Component6() {
  return (
    <div
      className="h-[41px] relative shrink-0 w-[73px]"
      data-name="뇌졸중 타이틀"
    >
      <Frame1707485668 />
    </div>
  );
}

function Group8() {
  return (
    <div className="h-[20.59px] relative shrink-0 w-[56.35px]">
      <div className="absolute bottom-0 left-[-0.887%] right-[-0.887%] top-[-2.43%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 58 22"
        >
          <g id="Group 8">
            <path
              d={svgPaths.p34adcb00}
              fill="url(#paint0_linear_105_47)"
              id="Vector 4"
            />
            <path
              d={svgPaths.p135eda80}
              id="Vector 5"
              stroke="var(--stroke-0, #EB7487)"
              strokeLinecap="round"
            />
          </g>
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_105_47"
              x1="26.9455"
              x2="26.5401"
              y1="1.32043"
              y2="21.5903"
            >
              <stop stopColor="#EB94A2" />
              <stop offset="1" stopColor="#EB94A2" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function ArrowDown() {
  return (
    <div className="relative size-6" data-name="arrow-down">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g clipPath="url(#clip0_95_266)" id="arrow-down">
          <path
            d="M12 0V19"
            id="Vector"
            stroke="var(--stroke-0, #F51A1A)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="M19 12L12 19L5 12"
            id="Vector_2"
            stroke="var(--stroke-0, #F51A1A)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
        <defs>
          <clipPath id="clip0_95_266">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component7() {
  return (
    <div className="relative shrink-0 w-[290px]" data-name="뇌졸중 내용">
      <div className="box-border content-stretch flex flex-row gap-[26px] items-center justify-start p-0 relative w-[290px]">
        <Component6 />
        <Group8 />
        <div className="font-['Inter:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#2e2e30] text-[14px] text-center w-[51px]">
          <p className="block leading-[normal]">6.00%</p>
        </div>
        <div className="flex items-center justify-center relative shrink-0">
          <div className="flex-none scale-y-[-100%]">
            <ArrowDown />
          </div>
        </div>
      </div>
    </div>
  );
}

function Component8() {
  return (
    <div className="relative shrink-0 w-full" data-name="노졸중 파트">
      <div className="absolute border-[0px_0px_1px] border-[rgba(151,151,151,0.5)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end relative size-full">
        <div className="box-border content-stretch flex flex-row gap-12 items-center justify-end p-[10px] relative w-full">
          <Component7 />
        </div>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div
      className="relative shrink-0 w-[310px]"
      data-name="질병 예측 분석 2가지"
    >
      <div className="box-border content-stretch flex flex-col gap-1.5 items-start justify-start p-0 relative w-[310px]">
        <Component5 />
        <Component8 />
      </div>
    </div>
  );
}

function Component9() {
  return (
    <div className="relative shrink-0 w-full" data-name="질병 예측 분석 파트">
      <div className="box-border content-stretch flex flex-col gap-[7px] items-center justify-start p-0 relative w-full">
        <Component />
        <Component2 />
      </div>
    </div>
  );
}

function Group1707485411() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] flex flex-col font-['League_Spartan:Bold',_sans-serif] font-bold justify-center ml-[67px] mt-[8.5px] relative text-[#00278c] text-[18px] text-center text-nowrap translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[normal] whitespace-pre">
          상세 분석 리포트
        </p>
      </div>
      <div
        className="[grid-area:1_/_1] h-px ml-0 mt-0 relative w-[325px]"
        data-name="Divider"
      >
        <div className="absolute bottom-1/2 left-0 right-0 top-0">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 325 1"
          >
            <path
              clipRule="evenodd"
              d="M0 0H325V0.5H0V0Z"
              fill="var(--fill-0, #C7C8CA)"
              fillRule="evenodd"
              id="Divider"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame1707485593() {
  return (
    <div className="bg-gradient-to-b from-[#ebf0ff] from-[32.692%] relative rounded-[23px] shadow-[2px_2px_3px_0px_rgba(48,48,48,0.07)] shrink-0 to-[#cad6ff] w-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start leading-[0] pb-3.5 pt-[15px] px-[17px] relative text-[#00278c] text-[16px] w-full">
          <div className="flex flex-col font-['League_Spartan:Bold',_sans-serif] font-bold justify-center relative shrink-0 text-center text-nowrap">
            <p className="block leading-[normal] whitespace-pre">
              중등도 위험 단계
            </p>
          </div>
          <div
            className="font-['League_Spartan:Medium',_sans-serif] font-medium leading-[1.3] min-w-full relative shrink-0 text-left"
            style={{ width: "min-content" }}
          >
            <p className="block mb-0">
              보행 안정성이 낮은 상태이며 낙상 주의가 필요합니다. 최근 속도
              저하와 균형 흔들림이 관찰되었습니다. 전문가 상담 또는 보행 교정
              프로그램 참여를 추천드립니다.
            </p>
            <p className="block mb-0 text-[16px]">&nbsp;</p>
            <p className="block">
              보행 안정성이 낮은 상태이며 낙상 주의가 필요합니다. 최근 속도
              저하와 균형 흔들림이 관찰되었습니다. 전문가 상담 또는 보행 교정
              프로그램 참여를 추천드립니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component10() {
  return (
    <div className="relative shrink-0 w-full" data-name="상세 분석 리포트 파트">
      <div className="box-border content-stretch flex flex-col gap-[13px] items-end justify-start p-0 relative w-full">
        <Group1707485411 />
        <Frame1707485593 />
      </div>
    </div>
  );
}

export default function Component11() {
  return (
    <div className="relative size-full" data-name="상세 통계 섹션">
      <div className="box-border content-stretch flex flex-col gap-7 items-start justify-start p-0 relative size-full">
        <Component9 />
        <Component10 />
      </div>
    </div>
  );
}