import svgPaths from "./svg-qon2tswi8y";
import clsx from "clsx";
import imgEllipse513 from "figma:asset/b13c9c4e8acbbce3781223e437d0c91f3bb45e8e.png";
import imgEllipse514 from "figma:asset/4df9da824c9060cfb14b84be1edb7744286b0c46.png";
import imgEllipse515 from "figma:asset/0b8784554da351f3ece513a0a06b81cf5215d246.png";

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <svg
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 56 55"
      className="block size-full"
    >
      {children}
    </svg>
  );
}
type WrapperProps = {
  additionalClassNames?: string[];
};

function Wrapper({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<WrapperProps>) {
  return (
    <div
      className={clsx("absolute h-[12.8px] w-[12.989px]", additionalClassNames)}
    >
      <div className="absolute bottom-[-11.719%] left-[-11.548%] right-[-11.548%] top-[-11.719%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 17 17"
        >
          {children}
        </svg>
      </div>
    </div>
  );
}
type Helper1Props = {
  additionalClassNames?: string[];
};

function Helper1({ additionalClassNames = [] }: Helper1Props) {
  return (
    <div
      className={clsx(
        "absolute h-12 top-[45.2px] w-[48.71px]",
        additionalClassNames,
      )}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 49 48"
      >
        <ellipse
          cx="24.3548"
          cy="24"
          fill="var(--fill-0, #59D950)"
          id="Ellipse 513"
          rx="24.3548"
          ry="24"
        />
      </svg>
    </div>
  );
}
type HelperProps = {
  additionalClassNames?: string[];
};

function Helper({ additionalClassNames = [] }: HelperProps) {
  return (
    <div
      className={clsx(
        "absolute h-[54.4px] top-[42px] w-[55.204px]",
        additionalClassNames,
      )}
    >
      <Wrapper3>
        <path
          d={svgPaths.p3fc1a680}
          id="Ellipse 514"
          stroke="var(--stroke-0, #4359FF)"
          strokeOpacity="0.25"
        />
      </Wrapper3>
    </div>
  );
}

function Component() {
  return (
    <div
      className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative"
      data-name="주의 아이콘"
    >
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-3.5">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 14 14"
        >
          <circle
            cx="7"
            cy="7"
            id="Ellipse 517"
            r="6.5"
            stroke="var(--stroke-0, #D80F12)"
          />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] font-['League_Spartan:Medium',_sans-serif] font-medium leading-[0] ml-[5px] mt-[3px] relative text-[#d80f12] text-[12px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">!</p>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
      data-name="낙상감지 멘트"
    >
      <div className="[grid-area:1_/_1] font-['League_Spartan:Medium',_sans-serif] font-medium ml-0 mt-[18px] relative text-[#d32023] text-[11px] text-left w-72">
        <p className="block leading-[1.3]">
          5/26일에 낙상이 감지되었습니다. 보호자에게 알림이 전송되었습니다.
        </p>
      </div>
      <div className="[grid-area:1_/_1] font-['League_Spartan:Medium',_sans-serif] font-medium ml-[19px] mt-[3px] relative text-[#d80f12] text-[12px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">낙상 감지됨</p>
      </div>
      <Component />
    </div>
  );
}

function Component2() {
  return (
    <div
      className="absolute bg-[rgba(255,219,219,0.2)] h-14 left-3.5 rounded-lg top-[125px] w-[311px]"
      data-name="낙상감지 메시지"
    >
      <div className="absolute border border-[#ffb5b5] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 h-14 items-start justify-start pb-[5px] pt-1.5 px-[11px] relative w-[311px]">
          <Component1 />
        </div>
      </div>
    </div>
  );
}

function Component525() {
  return (
    <div
      className="absolute left-2.5 top-[42px] w-[55.204px]"
      data-name="위험5/25"
    >
      <div className="box-border content-stretch flex flex-col gap-[3px] items-center justify-start p-0 relative w-[55.204px]">
        <div className="h-[54.4px] relative shrink-0 w-full">
          <Wrapper3>
            <path
              d={svgPaths.p3fc1a680}
              id="Ellipse 514"
              stroke="var(--stroke-0, #4359FF)"
            />
          </Wrapper3>
        </div>
        <div className="font-['Pretendard:Medium',_sans-serif] h-[14.4px] leading-[0] not-italic relative shrink-0 text-[#111111] text-[10px] text-center tracking-[-0.25px] w-full">
          <p className="block leading-[1.4]">5/25</p>
        </div>
        <div className="absolute left-[3.425px] size-[48.353px] top-[3.023px]">
          <img
            alt
            className="block max-w-none size-full"
            height="48.353538513183594"
            src={imgEllipse513}
            width="48.353538513183594"
          />
        </div>
        <div className="absolute font-['Pretendard:Medium',_sans-serif] h-[21px] leading-[0] left-[27px] not-italic text-[#00278c] text-[15px] text-center top-[18px] tracking-[-0.375px] translate-x-[-50%] w-[26px]">
          <p className="adjustLetterSpacing block leading-[1.4]">위험</p>
        </div>
        <Wrapper additionalClassNames={["left-[40.591px]", "top-10"]}>
          <path
            d={svgPaths.p11d85a80}
            fill="var(--fill-0, #4359FF)"
            id="Ellipse 515"
            stroke="var(--stroke-0, white)"
            strokeWidth="1.5"
          />
        </Wrapper>
        <Wrapper additionalClassNames={["left-[40.591px]", "top-10"]}>
          <path
            d={svgPaths.p11d85a80}
            fill="var(--fill-0, #F9EB67)"
            id="Ellipse 516"
            stroke="var(--stroke-0, white)"
            strokeWidth="1.5"
          />
        </Wrapper>
      </div>
    </div>
  );
}

function Component526() {
  return (
    <div
      className="absolute contents left-[76px] top-[42px]"
      data-name="발생5/26"
    >
      <div
        className="absolute font-['Pretendard:Medium',_sans-serif] h-[14.4px] leading-[0] not-italic text-[#111111] text-[10px] text-center top-[99.6px] tracking-[-0.25px] translate-x-[-50%] w-[42.215px]"
        style={{ left: "calc(50% - 65.8978px)" }}
      >
        <p className="adjustLetterSpacing block leading-[1.4]">5/26</p>
      </div>
      <div className="absolute left-[79.425px] size-[48.353px] top-[45.023px]">
        <img
          alt
          className="block max-w-none size-full"
          height="48.353538513183594"
          src={imgEllipse514}
          width="48.353538513183594"
        />
      </div>
      <div className="absolute h-[54.4px] left-[76px] top-[42px] w-[55.204px]">
        <Wrapper3>
          <path
            d={svgPaths.p3fc1a680}
            id="Ellipse 514"
            stroke="var(--stroke-0, #D80F12)"
          />
        </Wrapper3>
      </div>
      <Wrapper additionalClassNames={["left-[116.591px]", "top-[82px]"]}>
        <path
          d={svgPaths.p11d85a80}
          fill="var(--fill-0, #D80F12)"
          id="Ellipse 516"
          stroke="var(--stroke-0, white)"
          strokeWidth="1.5"
        />
      </Wrapper>
      <div className="absolute font-['Pretendard:Medium',_sans-serif] leading-[0] left-[103.796px] not-italic text-[#e20000] text-[15px] text-center text-nowrap top-[59px] tracking-[-0.375px] translate-x-[-50%]">
        <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
          발생
        </p>
      </div>
    </div>
  );
}

function Component527() {
  return (
    <div className="absolute contents left-[142px] top-[42px]" data-name="5/27">
      <div
        className="absolute font-['Pretendard:Medium',_sans-serif] h-[14.4px] leading-[0] not-italic text-[#767676] text-[10px] text-center top-[99.6px] tracking-[-0.25px] translate-x-[-50%] w-[31.661px]"
        style={{ left: "calc(50% + 0.508087px)" }}
      >
        <p className="adjustLetterSpacing block leading-[1.4]">5/27</p>
      </div>
      <div className="absolute left-[145.425px] size-[48.353px] top-[45.023px]">
        <img
          alt
          className="block max-w-none size-full"
          height="48.353538513183594"
          src={imgEllipse515}
          width="48.353538513183594"
        />
      </div>
      <Helper additionalClassNames={["left-[142px]"]} />
    </div>
  );
}

function Component528() {
  return (
    <div className="absolute contents left-52 top-[42px]" data-name="5/28">
      <div
        className="absolute font-['Pretendard:Medium',_sans-serif] h-[14.4px] leading-[0] not-italic text-[#767676] text-[10px] text-center top-[99.6px] tracking-[-0.25px] translate-x-[-50%] w-[24.355px]"
        style={{ left: "calc(50% + 66.1021px)" }}
      >
        <p className="adjustLetterSpacing block leading-[1.4]">5/28</p>
      </div>
      {/* 5/27과 동일한 이미지 추가 */}
      <div className="absolute left-[211.425px] size-[48.353px] top-[45.023px]">
        <img
          alt
          className="block max-w-none size-full"
          height="48.353538513183594"
          src={imgEllipse515}
          width="48.353538513183594"
        />
      </div>
      <Helper1 additionalClassNames={["left-[211.247px]"]} />
      <Helper additionalClassNames={["left-52"]} />
    </div>
  );
}

function Component529() {
  return (
    <div className="absolute contents left-[274px] top-[42px]" data-name="5/29">
      <div
        className="absolute font-['Pretendard:Medium',_sans-serif] h-[14.4px] leading-[0] not-italic text-[#767676] text-[10px] text-center top-[99.6px] tracking-[-0.25px] translate-x-[-50%] w-[30.849px]"
        style={{ left: "calc(50% + 132.102px)" }}
      >
        <p className="adjustLetterSpacing block leading-[1.4]">5/29</p>
      </div>
      {/* 5/27과 동일한 이미지 추가 */}
      <div className="absolute left-[277.425px] size-[48.353px] top-[45.023px]">
        <img
          alt
          className="block max-w-none size-full"
          height="48.353538513183594"
          src={imgEllipse515}
          width="48.353538513183594"
        />
      </div>
      <Helper1 additionalClassNames={["left-[277.247px]"]} />
      <Helper additionalClassNames={["left-[274px]"]} />
    </div>
  );
}

function Component3() {
  return (
    <div
      className="absolute contents left-2.5 top-[42px]"
      data-name="낙상이력 달력"
    >
      <Component525 />
      <Component526 />
      <Component527 />
      <Component528 />
      <Component529 />
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
    <div className="relative size-full" data-name="Backgrounds / Transparent">
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

function Headline() {
  return (
    <div
      className="absolute contents left-0 right-0 top-0"
      data-name="Headline"
    >
      <div className="absolute flex h-8 items-center justify-center left-0 right-0 top-0">
        <div className="flex-none h-8 scale-y-[-100%] w-[339px]">
          <BackgroundsTransparent />
        </div>
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div className="absolute contents left-0 top-0" data-name="낙상이력 상단">
      <Headline />
      <div className="absolute flex flex-col font-['League_Spartan:Bold',_sans-serif] font-bold justify-center leading-[0] left-[49.5px] text-[#00278c] text-[18px] text-center text-nowrap top-[16.5px] translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[normal] whitespace-pre">낙상 이력</p>
      </div>
    </div>
  );
}

export default function Component5() {
  return (
    <div className="relative size-full" data-name="낙상이력 파트">
      <Component2 />
      <Component3 />
      <Component4 />
    </div>
  );
}