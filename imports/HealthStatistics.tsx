import svgPaths from "./svg-lqcn2k6d52";

function Divider() {
  return <div className="size-full" data-name="↑ Divider" />;
}

function Background() {
  return (
    <div className="absolute inset-0" data-name="Background">
      <div className="absolute inset-0" data-name="Background">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 32 32"
        >
          <g id="Background"></g>
        </svg>
      </div>
      <div className="absolute flex h-px items-center justify-center left-0 right-0 top-0">
        <div className="flex-none h-px scale-y-[-100%] w-[359px]">
          <Divider />
        </div>
      </div>
    </div>
  );
}

function Item4() {
  return (
    <div
      className="absolute bottom-0 left-[74.765%] right-0 top-0"
      data-name="Item 4"
    >
      <div
        className="absolute bottom-0 left-0 right-[-0.482px] rounded-br-[4px] rounded-tr-[4px] top-0"
        data-name="Rectangle"
      >
        <div className="absolute border border-[#00278c] border-solid inset-0 pointer-events-none rounded-br-[4px] rounded-tr-[4px]" />
      </div>
      <div
        className="absolute font-['SUIT_Variable:Regular',_sans-serif] leading-[0] not-italic text-[#00278c] text-[15px] text-center text-nowrap tracking-[-0.24px] translate-x-[-50%]"
        style={{ top: "calc(50% - 9.5px)", left: "calc(50% - 0.259125px)" }}
      >
        <p className="adjustLetterSpacing block leading-[20px] whitespace-pre">
          낙상
        </p>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div
      className="absolute bottom-0 left-[49.694%] right-[25.072%] top-0"
      data-name="Item 3"
    >
      <div
        className="absolute bottom-0 left-0 right-[-0.482px] top-0"
        data-name="Rectangle"
      >
        <div className="absolute border border-[#00278c] border-solid inset-0 pointer-events-none" />
      </div>
      <div
        className="absolute font-['SUIT_Variable:Regular',_sans-serif] leading-[0] not-italic text-[#00278c] text-[15px] text-center text-nowrap tracking-[-0.24px] translate-x-[-50%]"
        style={{ top: "calc(50% - 9.5px)", left: "calc(50% - 0.259155px)" }}
      >
        <p className="adjustLetterSpacing block leading-[20px] whitespace-pre">
          BMI
        </p>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div
      className="absolute bottom-0 left-[24.637%] right-[50.128%] top-0"
      data-name="Item 2"
    >
      <div
        className="absolute bottom-0 left-0 right-[-0.482px] top-0"
        data-name="Rectangle"
      >
        <div className="absolute border border-[#00278c] border-solid inset-0 pointer-events-none" />
      </div>
      <div
        className="absolute font-['SUIT_Variable:Regular',_sans-serif] leading-[0] not-italic text-[#00278c] text-[15px] text-center text-nowrap tracking-[-0.24px] translate-x-[-50%]"
        style={{ top: "calc(50% - 9.5px)", left: "calc(50% + 0.240807px)" }}
      >
        <p className="adjustLetterSpacing block leading-[20px] whitespace-pre">
          심박수
        </p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div
      className="absolute bottom-0 left-0 right-[74.765%] top-0"
      data-name="Item 1"
    >
      <div className="absolute bottom-0 flex items-center justify-center left-0 right-[-0.482px] top-0">
        <div className="flex-none h-[33px] rotate-[180deg] scale-y-[-100%] w-[83px]">
          <div
            className="bg-[#00278c] rounded-br-[4px] rounded-tr-[4px] size-full"
            data-name="Rectangle"
          />
        </div>
      </div>
      <div
        className="absolute font-['SUIT_Variable:Regular',_sans-serif] leading-[0] not-italic text-[#ffffff] text-[15px] text-center text-nowrap tracking-[-0.24px] translate-x-[-50%]"
        style={{ top: "calc(50% - 9.5px)", left: "calc(50% - 0.259178px)" }}
      >
        <p className="adjustLetterSpacing block leading-[20px] whitespace-pre">
          혈압
        </p>
      </div>
    </div>
  );
}

function SegmentedControl4Items() {
  return (
    <div
      className="absolute bottom-[5px] left-4 right-4 top-[5px]"
      data-name="Segmented Control /_/ 4 Items"
    >
      <Item4 />
      <Item3 />
      <Item2 />
      <Item1 />
    </div>
  );
}

function SegmentedControlDefault() {
  return (
    <div
      className="absolute h-[43px] left-0 right-0.5 top-[239px]"
      data-name="Segmented Control / Default"
    >
      <Background />
      <SegmentedControl4Items />
    </div>
  );
}

function Component() {
  return (
    <div
      className="h-[122px] relative shrink-0 w-full"
      data-name="분석내용 글자"
    >
      <div className="box-border content-stretch flex flex-col gap-[9px] h-[122px] items-start justify-start leading-[0] p-0 relative text-[#00278c] text-[16px] w-full">
        <div className="flex flex-col font-['League_Spartan:Bold',_sans-serif] font-bold justify-center relative shrink-0 text-center text-nowrap">
          <p className="block leading-[normal] whitespace-pre">분석 내용</p>
        </div>
        <div className="font-['League_Spartan:Medium',_sans-serif] font-medium h-[77px] relative shrink-0 text-left w-full">
          <p className="block leading-[1.3]">
            오늘 심박수와 혈압 모두 안정적이에요. 가볍게 몸을 움직여보는 것도
            좋아요! 수분 섭취도 잊지 마세요.최근 낙상 감지는 없어요. 보행도
            안정적이고, 걸음도 꾸준했어요. 멋진 하루를 이어가볼까요?
          </p>
        </div>
      </div>
    </div>
  );
}

function Divider1() {
  return (
    <div
      className="absolute bottom-0 h-px left-0 right-0"
      data-name="↓ Divider"
    />
  );
}

function Divider2() {
  return <div className="size-full" data-name="↑ Divider" />;
}

function Background1() {
  return (
    <div
      className="absolute bottom-0 left-0 right-0 top-px"
      data-name="Background"
    >
      <div className="absolute inset-0" data-name="Background">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 32 32"
        >
          <g id="Background"></g>
        </svg>
      </div>
      <Divider1 />
      <div className="absolute flex h-px items-center justify-center left-0 right-0 top-0">
        <div className="flex-none h-px scale-y-[-100%] w-[360px]">
          <Divider2 />
        </div>
      </div>
    </div>
  );
}

function Lines() {
  return (
    <div
      className="absolute bottom-0 contents left-0 right-[-0.267%] top-[-10.811%]"
      data-name="Lines"
    >
      <Background1 />
      <div
        className="absolute bottom-[18.148%] top-[0.37%] translate-x-[-50%] w-px"
        data-name="Path 3"
        style={{ left: "calc(50% - 129.5px)" }}
      >
        <div className="absolute bottom-0 left-1/4 right-1/4 top-0">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 1 181"
          >
            <path
              d="M0.5 0V180.889"
              id="Path 3"
              stroke="var(--stroke-0, black)"
              strokeDasharray="2 2"
              strokeOpacity="0.2"
              strokeWidth="0.5"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute bottom-[8.148%] left-[15px] top-[0.37%] w-px"
        data-name="Path 3"
      >
        <div className="absolute bottom-0 left-1/4 right-1/4 top-0">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 1 204"
          >
            <path
              d="M0.5 0V203.089"
              id="Path 3"
              stroke="var(--stroke-0, black)"
              strokeOpacity="0.4"
              strokeWidth="0.5"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute bottom-[8.148%] top-[0.37%] translate-x-[-50%] w-px"
        data-name="Path 3"
        style={{ left: "calc(50% - 86.5px)" }}
      >
        <div className="absolute bottom-0 left-1/4 right-1/4 top-0">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 1 204"
          >
            <path
              d="M0.5 0V203.089"
              id="Path 3"
              stroke="var(--stroke-0, black)"
              strokeDasharray="2 2"
              strokeOpacity="0.2"
              strokeWidth="0.5"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute bottom-[18.148%] top-[0.37%] translate-x-[-50%] w-px"
        data-name="Path 3"
        style={{ left: "calc(50% + 42.5px)" }}
      >
        <div className="absolute bottom-0 left-1/4 right-1/4 top-0">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 1 181"
          >
            <path
              d="M0.5 0V180.889"
              id="Path 3"
              stroke="var(--stroke-0, black)"
              strokeDasharray="2 2"
              strokeOpacity="0.2"
              strokeWidth="0.5"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute bottom-[18.148%] top-[0.37%] translate-x-[-50%] w-px"
        data-name="Path 3"
        style={{ left: "calc(50% - 43.5px)" }}
      >
        <div className="absolute bottom-0 left-1/4 right-1/4 top-0">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 1 181"
          >
            <path
              d="M0.5 0V180.889"
              id="Path 3"
              stroke="var(--stroke-0, black)"
              strokeDasharray="2 2"
              strokeOpacity="0.2"
              strokeWidth="0.5"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute bottom-[8.148%] top-[0.37%] translate-x-[-50%] w-px"
        data-name="Path 3"
        style={{ left: "calc(50% + 85.5px)" }}
      >
        <div className="absolute bottom-0 left-1/4 right-1/4 top-0">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 1 204"
          >
            <path
              d="M0.5 0V203.089"
              id="Path 3"
              stroke="var(--stroke-0, black)"
              strokeDasharray="2 2"
              strokeOpacity="0.2"
              strokeWidth="0.5"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute bottom-[18.148%] top-[0.37%] translate-x-[-50%] w-px"
        data-name="Path 3"
        style={{ left: "calc(50% + 129px)" }}
      >
        <div className="absolute bottom-0 left-1/4 right-1/4 top-0">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 1 181"
          >
            <path
              d="M0.5 0V180.889"
              id="Path 3"
              stroke="var(--stroke-0, black)"
              strokeDasharray="2 2"
              strokeOpacity="0.2"
              strokeWidth="0.5"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute bottom-[8.148%] right-[14.5px] top-[0.37%] w-px"
        data-name="Path 3"
      >
        <div className="absolute bottom-0 left-1/4 right-1/4 top-0">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 1 204"
          >
            <path
              d="M0.5 0V203.089"
              id="Path 3"
              stroke="var(--stroke-0, black)"
              strokeDasharray="2 2"
              strokeOpacity="0.2"
              strokeWidth="0.5"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute bottom-[8.148%] top-[0.37%] translate-x-[-50%] w-px"
        data-name="Path 3"
        style={{ left: "calc(50% - 0.5px)" }}
      >
        <div className="absolute bottom-0 left-1/4 right-1/4 top-0">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 1 204"
          >
            <path
              d="M0.5 0V203.089"
              id="Path 3"
              stroke="var(--stroke-0, black)"
              strokeDasharray="2 2"
              strokeOpacity="0.2"
              strokeWidth="0.5"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute bottom-12 h-px left-0 right-[-0.267%]"
        data-name="Path 4"
      >
        <div className="absolute bottom-1/4 left-0 right-0 top-1/4">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 361 1"
          >
            <path
              d="M0 0.5H360.96"
              id="Path 4"
              stroke="var(--stroke-0, black)"
              strokeOpacity="0.25"
              strokeWidth="0.5"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute h-px left-0 right-[-0.267%] translate-y-[-50%]"
        data-name="Path 4"
        style={{ top: "calc(50% + 51.5px)" }}
      >
        <div className="absolute bottom-1/4 left-0 right-0 top-1/4">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 361 1"
          >
            <path
              d="M0 0.5H360.96"
              id="Path 4"
              stroke="var(--stroke-0, black)"
              strokeOpacity="0.2"
              strokeWidth="0.5"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute h-px left-0 right-[-0.267%] translate-y-[-50%]"
        data-name="Path 4"
        style={{ top: "calc(50% + 16.5px)" }}
      >
        <div className="absolute bottom-1/4 left-0 right-0 top-1/4">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 361 1"
          >
            <path
              d="M0 0.5H360.96"
              id="Path 4"
              stroke="var(--stroke-0, black)"
              strokeOpacity="0.2"
              strokeWidth="0.5"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute h-px left-0 right-[-0.267%] translate-y-[-50%]"
        data-name="Path 4"
        style={{ top: "calc(50% - 18.5px)" }}
      >
        <div className="absolute bottom-1/4 left-0 right-0 top-1/4">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 361 1"
          >
            <path
              d="M0 0.5H360.96"
              id="Path 4"
              stroke="var(--stroke-0, black)"
              strokeOpacity="0.2"
              strokeWidth="0.5"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute h-px left-0 right-[-0.267%] translate-y-[-50%]"
        data-name="Path 4"
        style={{ top: "calc(50% - 53.5px)" }}
      >
        <div className="absolute bottom-1/4 left-0 right-0 top-1/4">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 361 1"
          >
            <path
              d="M0 0.5H360.96"
              id="Path 4"
              stroke="var(--stroke-0, black)"
              strokeOpacity="0.2"
              strokeWidth="0.5"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute h-px left-0 right-[-0.267%] translate-y-[-50%]"
        data-name="Path 4"
        style={{ top: "calc(50% - 88.5px)" }}
      >
        <div className="absolute bottom-1/4 left-0 right-0 top-1/4">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 361 1"
          >
            <path
              d="M0 0.5H360.96"
              id="Path 4"
              stroke="var(--stroke-0, black)"
              strokeOpacity="0.2"
              strokeWidth="0.5"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute h-px left-0 right-[-0.267%] top-[11px]"
        data-name="Path 4"
      >
        <div className="absolute bottom-1/4 left-0 right-0 top-1/4">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 361 1"
          >
            <path
              d="M0 0.5H360.96"
              id="Path 4"
              stroke="var(--stroke-0, black)"
              strokeOpacity="0.2"
              strokeWidth="0.5"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute h-px left-0 right-0 translate-y-[-50%]"
        data-name="Path 4"
        style={{ top: "calc(50% - 134.5px)" }}
      >
        <div className="absolute bottom-1/4 left-0 right-0 top-1/4">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 360 1"
          >
            <path
              d="M0 0.5H360"
              id="Path 4"
              stroke="var(--stroke-0, black)"
              strokeOpacity="0.2"
              strokeWidth="0.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div
      className="absolute bottom-[-1.802%] contents left-0 right-[-0.267%] top-[-10.811%]"
      data-name="Text"
    >
      <Lines />
      <div
        className="absolute font-['SF_Pro_Text:Semibold',_sans-serif] leading-[0] not-italic opacity-20 text-[#000000] text-[11px] text-left text-nowrap tracking-[0.07px]"
        style={{ top: "calc(50% + 102px)", left: "calc(50% - 168px)" }}
      >
        <p className="adjustLetterSpacing block leading-[13px] whitespace-pre">
          Aug 12
        </p>
      </div>
      <div
        className="absolute font-['SF_Pro_Text:Semibold',_sans-serif] leading-[0] not-italic opacity-20 text-[#000000] text-[11px] text-left text-nowrap tracking-[0.07px]"
        style={{ top: "calc(50% + 102px)", left: "calc(50% - 82px)" }}
      >
        <p className="adjustLetterSpacing block leading-[13px] whitespace-pre">
          19
        </p>
      </div>
      <div
        className="absolute font-['SF_Pro_Text:Semibold',_sans-serif] leading-[0] not-italic opacity-20 text-[#000000] text-[11px] text-left text-nowrap tracking-[0.07px]"
        style={{ top: "calc(50% + 102px)", left: "calc(50% + 4px)" }}
      >
        <p className="adjustLetterSpacing block leading-[13px] whitespace-pre">
          26
        </p>
      </div>
      <div
        className="absolute font-['SF_Pro_Text:Semibold',_sans-serif] leading-[0] not-italic opacity-20 text-[#000000] text-[11px] text-left text-nowrap tracking-[0.07px]"
        style={{ top: "calc(50% + 102px)", left: "calc(50% + 90px)" }}
      >
        <p className="adjustLetterSpacing block leading-[13px] whitespace-pre">
          Sep 2
        </p>
      </div>
    </div>
  );
}

function Chart() {
  return (
    <div
      className="absolute bottom-[18.148%] contents left-[3.467%] right-[5.333%] top-[13.333%]"
      data-name="Chart"
    >
      <div
        className="absolute bottom-[18.148%] left-[4%] right-[5.867%] top-[14.074%]"
        data-name="Path 5"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 325 151"
        >
          <path
            d={svgPaths.p37dbaff0}
            fill="url(#paint0_linear_150_432)"
            id="Path 5"
            opacity="0.308664"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_150_432"
              x1="324.48"
              x2="324.48"
              y1="150.467"
              y2="0"
            >
              <stop stopColor="#007AFF" stopOpacity="0.01" />
              <stop offset="1" stopColor="#007AFF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute bottom-[48.519%] left-[4%] right-[5.867%] top-[14.074%]"
        data-name="Path 5"
      >
        <div className="absolute bottom-[-1.204%] left-[-0.308%] right-[-0.308%] top-[-3.649%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 327 89"
          >
            <path
              d={svgPaths.p187eea00}
              id="Path 5"
              stroke="var(--stroke-0, #007AFF)"
              strokeLinecap="round"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute bottom-[63.333%] left-[6.667%] right-[92.267%] top-[35.185%]"
        data-name="Oval"
      >
        <div className="absolute bottom-[-60.811%] left-[-52.083%] right-[-52.083%] top-[-60.811%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 8 8"
          >
            <path
              d={svgPaths.p38f20500}
              fill="var(--fill-0, white)"
              id="Oval"
              stroke="var(--stroke-0, #007AFF)"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute bottom-[58.519%] left-[9.867%] right-[89.067%] top-[40%]"
        data-name="Oval"
      >
        <div className="absolute bottom-[-60.811%] left-[-52.083%] right-[-52.083%] top-[-60.811%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 8 8"
          >
            <path
              d={svgPaths.p38f20500}
              fill="var(--fill-0, white)"
              id="Oval"
              stroke="var(--stroke-0, #007AFF)"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute bottom-[69.259%] left-[13.067%] right-[85.867%] top-[29.259%]"
        data-name="Oval"
      >
        <div className="absolute bottom-[-60.811%] left-[-52.083%] right-[-52.083%] top-[-60.811%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 8 8"
          >
            <path
              d={svgPaths.p38f20500}
              fill="var(--fill-0, white)"
              id="Oval"
              stroke="var(--stroke-0, #007AFF)"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute bottom-[65.185%] left-[16.267%] right-[82.667%] top-[33.333%]"
        data-name="Oval"
      >
        <div className="absolute bottom-[-60.811%] left-[-52.083%] right-[-52.083%] top-[-60.811%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 8 8"
          >
            <path
              d={svgPaths.p38f20500}
              fill="var(--fill-0, white)"
              id="Oval"
              stroke="var(--stroke-0, #007AFF)"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute bottom-[63.333%] left-[19.467%] right-[79.467%] top-[35.185%]"
        data-name="Oval"
      >
        <div className="absolute bottom-[-60.811%] left-[-52.083%] right-[-52.083%] top-[-60.811%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 8 8"
          >
            <path
              d={svgPaths.p38f20500}
              fill="var(--fill-0, white)"
              id="Oval"
              stroke="var(--stroke-0, #007AFF)"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute bottom-[64.444%] left-[22.667%] right-[76.267%] top-[34.074%]"
        data-name="Oval"
      >
        <div className="absolute bottom-[-60.811%] left-[-52.083%] right-[-52.083%] top-[-60.811%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 8 8"
          >
            <path
              d={svgPaths.p38f20500}
              fill="var(--fill-0, white)"
              id="Oval"
              stroke="var(--stroke-0, #007AFF)"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute bottom-[73.704%] left-[25.867%] right-[73.067%] top-[24.815%]"
        data-name="Oval"
      >
        <div className="absolute bottom-[-60.811%] left-[-52.083%] right-[-52.083%] top-[-60.811%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 8 8"
          >
            <path
              d={svgPaths.p38f20500}
              fill="var(--fill-0, white)"
              id="Oval"
              stroke="var(--stroke-0, #007AFF)"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute bottom-[65.185%] left-[29.067%] right-[69.867%] top-[33.333%]"
        data-name="Oval"
      >
        <div className="absolute bottom-[-60.811%] left-[-52.083%] right-[-52.083%] top-[-60.811%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 8 8"
          >
            <path
              d={svgPaths.p38f20500}
              fill="var(--fill-0, white)"
              id="Oval"
              stroke="var(--stroke-0, #007AFF)"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute bottom-[52.593%] left-[32.267%] right-[66.667%] top-[45.926%]"
        data-name="Oval"
      >
        <div className="absolute bottom-[-60.811%] left-[-52.083%] right-[-52.083%] top-[-60.811%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 8 8"
          >
            <path
              d={svgPaths.p38f20500}
              fill="var(--fill-0, white)"
              id="Oval"
              stroke="var(--stroke-0, #007AFF)"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute bottom-[65.185%] left-[35.467%] right-[63.467%] top-[33.333%]"
        data-name="Oval"
      >
        <div className="absolute bottom-[-60.811%] left-[-52.083%] right-[-52.083%] top-[-60.811%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 8 8"
          >
            <path
              d={svgPaths.p38f20500}
              fill="var(--fill-0, white)"
              id="Oval"
              stroke="var(--stroke-0, #007AFF)"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute bottom-[67.407%] left-[38.667%] right-[60.267%] top-[31.111%]"
        data-name="Oval"
      >
        <div className="absolute bottom-[-60.811%] left-[-52.083%] right-[-52.083%] top-[-60.811%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 8 8"
          >
            <path
              d={svgPaths.p38f20500}
              fill="var(--fill-0, white)"
              id="Oval"
              stroke="var(--stroke-0, #007AFF)"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute bottom-[71.111%] left-[41.867%] right-[57.067%] top-[27.407%]"
        data-name="Oval"
      >
        <div className="absolute bottom-[-60.811%] left-[-52.083%] right-[-52.083%] top-[-60.811%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 8 8"
          >
            <path
              d={svgPaths.p38f20500}
              fill="var(--fill-0, white)"
              id="Oval"
              stroke="var(--stroke-0, #007AFF)"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute bottom-[67.778%] left-[45.067%] right-[53.867%] top-[30.741%]"
        data-name="Oval"
      >
        <div className="absolute bottom-[-60.811%] left-[-52.083%] right-[-52.083%] top-[-60.811%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 8 8"
          >
            <path
              d={svgPaths.p38f20500}
              fill="var(--fill-0, white)"
              id="Oval"
              stroke="var(--stroke-0, #007AFF)"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute bottom-[65.185%] left-[48.267%] right-[50.667%] top-[33.333%]"
        data-name="Oval"
      >
        <div className="absolute bottom-[-60.811%] left-[-52.083%] right-[-52.083%] top-[-60.811%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 8 8"
          >
            <path
              d={svgPaths.p38f20500}
              fill="var(--fill-0, white)"
              id="Oval"
              stroke="var(--stroke-0, #007AFF)"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute bottom-[65.185%] left-[51.467%] right-[47.467%] top-[33.333%]"
        data-name="Oval"
      >
        <div className="absolute bottom-[-60.811%] left-[-52.083%] right-[-52.083%] top-[-60.811%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 8 8"
          >
            <path
              d={svgPaths.p38f20500}
              fill="var(--fill-0, white)"
              id="Oval"
              stroke="var(--stroke-0, #007AFF)"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute bottom-[59.259%] left-[54.667%] right-[44.267%] top-[39.259%]"
        data-name="Oval"
      >
        <div className="absolute bottom-[-60.811%] left-[-52.083%] right-[-52.083%] top-[-60.811%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 8 8"
          >
            <path
              d={svgPaths.p38f20500}
              fill="var(--fill-0, white)"
              id="Oval"
              stroke="var(--stroke-0, #007AFF)"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute bottom-[65.185%] left-[57.867%] right-[41.067%] top-[33.333%]"
        data-name="Oval"
      >
        <div className="absolute bottom-[-60.811%] left-[-52.083%] right-[-52.083%] top-[-60.811%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 8 8"
          >
            <path
              d={svgPaths.p38f20500}
              fill="var(--fill-0, white)"
              id="Oval"
              stroke="var(--stroke-0, #007AFF)"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute bottom-[71.111%] left-[61.067%] right-[37.867%] top-[27.407%]"
        data-name="Oval"
      >
        <div className="absolute bottom-[-60.811%] left-[-52.083%] right-[-52.083%] top-[-60.811%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 8 8"
          >
            <path
              d={svgPaths.p38f20500}
              fill="var(--fill-0, white)"
              id="Oval"
              stroke="var(--stroke-0, #007AFF)"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute bottom-[71.111%] left-[64.267%] right-[34.667%] top-[27.407%]"
        data-name="Oval"
      >
        <div className="absolute bottom-[-60.811%] left-[-52.083%] right-[-52.083%] top-[-60.811%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 8 8"
          >
            <path
              d={svgPaths.p38f20500}
              fill="var(--fill-0, white)"
              id="Oval"
              stroke="var(--stroke-0, #007AFF)"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute bottom-[75.556%] left-[67.467%] right-[31.467%] top-[22.963%]"
        data-name="Oval"
      >
        <div className="absolute bottom-[-60.811%] left-[-52.083%] right-[-52.083%] top-[-60.811%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 8 8"
          >
            <path
              d={svgPaths.p38f20500}
              fill="var(--fill-0, white)"
              id="Oval"
              stroke="var(--stroke-0, #007AFF)"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute bottom-[85.185%] left-[70.667%] right-[28.267%] top-[13.333%]"
        data-name="Oval"
      >
        <div className="absolute bottom-[-60.811%] left-[-52.083%] right-[-52.083%] top-[-60.811%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 8 8"
          >
            <path
              d={svgPaths.p38f20500}
              fill="var(--fill-0, white)"
              id="Oval"
              stroke="var(--stroke-0, #007AFF)"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute bottom-[54.074%] left-[73.867%] right-[25.067%] top-[44.444%]"
        data-name="Oval"
      >
        <div className="absolute bottom-[-60.811%] left-[-52.083%] right-[-52.083%] top-[-60.811%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 8 8"
          >
            <path
              d={svgPaths.p38f20500}
              fill="var(--fill-0, white)"
              id="Oval"
              stroke="var(--stroke-0, #007AFF)"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute bottom-[72.222%] left-[77.067%] right-[21.867%] top-[26.296%]"
        data-name="Oval"
      >
        <div className="absolute bottom-[-60.811%] left-[-52.083%] right-[-52.083%] top-[-60.811%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 8 8"
          >
            <path
              d={svgPaths.p38f20500}
              fill="var(--fill-0, white)"
              id="Oval"
              stroke="var(--stroke-0, #007AFF)"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute bottom-[64.815%] left-[80.267%] right-[18.667%] top-[33.704%]"
        data-name="Oval"
      >
        <div className="absolute bottom-[-60.811%] left-[-52.083%] right-[-52.083%] top-[-60.811%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 8 8"
          >
            <path
              d={svgPaths.p38f20500}
              fill="var(--fill-0, white)"
              id="Oval"
              stroke="var(--stroke-0, #007AFF)"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute bottom-[71.111%] left-[83.467%] right-[15.467%] top-[27.407%]"
        data-name="Oval"
      >
        <div className="absolute bottom-[-60.811%] left-[-52.083%] right-[-52.083%] top-[-60.811%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 8 8"
          >
            <path
              d={svgPaths.p38f20500}
              fill="var(--fill-0, white)"
              id="Oval"
              stroke="var(--stroke-0, #007AFF)"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute bottom-[63.704%] left-[86.667%] right-[12.267%] top-[34.815%]"
        data-name="Oval"
      >
        <div className="absolute bottom-[-60.811%] left-[-52.083%] right-[-52.083%] top-[-60.811%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 8 8"
          >
            <path
              d={svgPaths.p38f20500}
              fill="var(--fill-0, white)"
              id="Oval"
              stroke="var(--stroke-0, #007AFF)"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute bottom-[68.148%] left-[89.867%] right-[9.067%] top-[30.37%]"
        data-name="Oval"
      >
        <div className="absolute bottom-[-60.811%] left-[-52.083%] right-[-52.083%] top-[-60.811%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 8 8"
          >
            <path
              d={svgPaths.p38f20500}
              fill="var(--fill-0, white)"
              id="Oval"
              stroke="var(--stroke-0, #007AFF)"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute bottom-[47.778%] left-[93.6%] right-[5.333%] top-[50.741%]"
        data-name="Oval"
      >
        <div className="absolute bottom-[-60.811%] left-[-52.083%] right-[-52.083%] top-[-60.811%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 8 8"
          >
            <path
              d={svgPaths.p38f20500}
              fill="var(--fill-0, white)"
              id="Oval"
              stroke="var(--stroke-0, #007AFF)"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute bottom-[65.185%] left-[3.467%] right-[95.467%] top-[33.333%]"
        data-name="Oval"
      >
        <div className="absolute bottom-[-60.811%] left-[-52.083%] right-[-52.083%] top-[-60.811%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 8 8"
          >
            <path
              d={svgPaths.p38f20500}
              fill="var(--fill-0, white)"
              id="Oval"
              stroke="var(--stroke-0, #007AFF)"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Chart2() {
  return (
    <div
      className="absolute bottom-[-1.802%] contents left-0 right-[-0.267%] top-[-10.811%]"
      data-name="Chart"
    >
      <Text />
      <Chart />
    </div>
  );
}

function Muted() {
  return (
    <div
      className="absolute bottom-[-0.5px] h-px left-4 right-4"
      data-name="Muted"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 307 1"
      >
        <g id="Muted" opacity="0.2">
          <path
            clipRule="evenodd"
            d="M0 0H307V0.5H0V0Z"
            fill="var(--fill-0, black)"
            fillRule="evenodd"
            id="Divider"
          />
        </g>
      </svg>
    </div>
  );
}

function Divider16Pt16Pt() {
  return (
    <div className="relative size-full" data-name="Divider / 16pt 16pt">
      <Muted />
    </div>
  );
}

function BackgroundsTransparent() {
  return (
    <div
      className="absolute h-[53.356px] left-[15px] right-1.5 top-[-9px]"
      data-name="Backgrounds / Transparent"
    >
      <div className="absolute inset-0" data-name="Background">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 32 32"
        >
          <g id="Background"></g>
        </svg>
      </div>
      <div className="absolute flex h-px items-center justify-center left-0 right-0 top-0">
        <div className="flex-none h-px scale-y-[-100%] w-[339px]">
          <Divider16Pt16Pt />
        </div>
      </div>
    </div>
  );
}

function Chart1() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[222px] left-0 overflow-clip right-px top-[7px]"
      data-name="Chart 1"
    >
      <Chart2 />
      <BackgroundsTransparent />
    </div>
  );
}

export default function HealthStatistics() {
  return (
    <div className="relative size-full" data-name="Health Statistics">
      <SegmentedControlDefault />
      <div
        className="absolute bg-gradient-to-b from-[#ebf0ff] from-[32.692%] left-[19px] rounded-[23px] shadow-[2px_2px_3px_0px_rgba(48,48,48,0.07)] to-[#ffffff] top-[292px] w-[322px]"
        data-name="분석내용 파트"
      >
        <div className="relative size-full">
          <div className="box-border content-stretch flex flex-col gap-[5px] items-start justify-start pb-3.5 pt-[15px] px-[17px] relative w-[322px]">
            <Component />
          </div>
        </div>
      </div>
      <Chart1 />
    </div>
  );
}