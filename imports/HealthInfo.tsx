import svgPaths from './svg-o9h1jauxkj'
import fallHistorySvgPaths from './svg-qon2tswi8y'
import vitalSignsSvgPaths from './svg-25qz0y7qa9'
import backButtonSvgPaths from './svg-12x0h5casv'
import clsx from "clsx";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import imgBitmap from "figma:asset/4cf1ee931261160b02661ade185f5679e2814fa3.png";
import imgEllipse513 from "figma:asset/b13c9c4e8acbbce3781223e437d0c91f3bb45e8e.png";
import imgEllipse514 from "figma:asset/4df9da824c9060cfb14b84be1edb7744286b0c46.png";
import imgEllipse515 from "figma:asset/0b8784554da351f3ece513a0a06b81cf5215d246.png";
import HealthStatistics from './HealthStatistics';

// === 뒤로가기 버튼 컴포넌트들 ===
function BackButton() {
  return (
    <div className="h-[21px] relative shrink-0 w-3" data-name="Button">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 21"
      >
        <g id="Button">
          <path
            clipRule="evenodd"
            d={backButtonSvgPaths.p14f1ef80}
            fill="var(--fill-0, #2260FF)"
            fillRule="evenodd"
            id="Arrow"
          />
        </g>
      </svg>
    </div>
  );
}

function BackButtonFrame({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="absolute left-[22px] top-[30px] cursor-pointer hover:bg-gray-100 rounded-lg p-2 transition-colors duration-200 flex items-center gap-2"
      data-back-button="true"
      onClick={onClick}
    >
      <BackButton />
      <div className="flex flex-col font-['League_Spartan:Regular',_sans-serif] font-normal justify-center leading-[0] text-[#2260ff] text-[12.3px] text-left text-nowrap tracking-[-0.41px]">
        <p className="adjustLetterSpacing block leading-[22px] whitespace-pre">
          뒤로가기
        </p>
      </div>
    </div>
  );
}

// === 낙상이력 파트 컴포넌트들 ===
function FallHistoryWrapper3({ children }: React.PropsWithChildren<{}>) {
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

type FallHistoryWrapperProps = {
  additionalClassNames?: string[];
};

function FallHistoryWrapper({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<FallHistoryWrapperProps>) {
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

type FallHistoryHelper1Props = {
  additionalClassNames?: string[];
};

function FallHistoryHelper1({ additionalClassNames = [] }: FallHistoryHelper1Props) {
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

type FallHistoryHelperProps = {
  additionalClassNames?: string[];
};

function FallHistoryHelper({ additionalClassNames = [] }: FallHistoryHelperProps) {
  return (
    <div
      className={clsx(
        "absolute h-[54.4px] left-[10px] top-[42px] w-[55.204px]",
        additionalClassNames,
      )}
    >
      <FallHistoryWrapper3>
        <path
          d={fallHistorySvgPaths.p3fc1a680}
          id="Ellipse 514"
          stroke="var(--stroke-0, #4359FF)"
          strokeOpacity="0.25"
        />
      </FallHistoryWrapper3>
    </div>
  );
}

function FallWarningIcon() {
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

function FallDetectionMessage() {
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
      <div className="[grid-area:1_/_1] font-['League_Spartan:Medium',_sans-serif] font-medium ml-[19px] mt-[-2.5px] relative text-[#d80f12] text-[12px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">낙상 감지됨</p>
      </div>
      <FallWarningIcon />
    </div>
  );
}

function FallAlertBox() {
  return (
    <div
      className="absolute bg-[rgba(255,219,219,0.2)] h-16 left-3.5 rounded-lg top-[125px] w-[311px]"
      data-name="낙상감지 메시지"
    >
      <div className="absolute border border-[#ffb5b5] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 h-16 items-start justify-start pb-[5px] pt-1.5 px-[11px] relative w-[311px]">
          <FallDetectionMessage />
        </div>
      </div>
    </div>
  );
}

function FallHistory525() {
  return (
    <div
      className="absolute left-2.5 top-[42px] w-[55.204px]"
      data-name="위험5/25"
    >
      <div className="box-border content-stretch flex flex-col gap-[3px] items-center justify-start p-0 relative w-[55.204px]">
        <div className="h-[54.4px] relative shrink-0 w-full">
          <FallHistoryWrapper3>
            <path
              d={fallHistorySvgPaths.p3fc1a680}
              id="Ellipse 514"
              stroke="var(--stroke-0, #4359FF)"
            />
          </FallHistoryWrapper3>
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
          <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">위험</p>
        </div>
        <FallHistoryWrapper additionalClassNames={["left-[40.591px]", "top-10"]}>
          <path
            d={fallHistorySvgPaths.p11d85a80}
            fill="var(--fill-0, #4359FF)"
            id="Ellipse 515"
            stroke="var(--stroke-0, white)"
            strokeWidth="1.5"
          />
        </FallHistoryWrapper>
        <FallHistoryWrapper additionalClassNames={["left-[40.591px]", "top-10"]}>
          <path
            d={fallHistorySvgPaths.p11d85a80}
            fill="var(--fill-0, #F9EB67)"
            id="Ellipse 516"
            stroke="var(--stroke-0, white)"
            strokeWidth="1.5"
          />
        </FallHistoryWrapper>
      </div>
    </div>
  );
}

function FallHistory526() {
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
        <FallHistoryWrapper3>
          <path
            d={fallHistorySvgPaths.p3fc1a680}
            id="Ellipse 514"
            stroke="var(--stroke-0, #D80F12)"
          />
        </FallHistoryWrapper3>
      </div>
      <FallHistoryWrapper additionalClassNames={["left-[116.591px]", "top-[82px]"]}>
        <path
          d={fallHistorySvgPaths.p11d85a80}
          fill="var(--fill-0, #D80F12)"
          id="Ellipse 516"
          stroke="var(--stroke-0, white)"
          strokeWidth="1.5"
        />
      </FallHistoryWrapper>
      <div className="absolute font-['Pretendard:Medium',_sans-serif] leading-[0] left-[103.796px] not-italic text-[#e20000] text-[15px] text-center text-nowrap top-[59px] tracking-[-0.375px] translate-x-[-50%]">
        <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
          발생
        </p>
      </div>
    </div>
  );
}

function FallHistory527() {
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
      <FallHistoryHelper additionalClassNames={["left-[142px]"]} />
    </div>
  );
}

function FallHistory528() {
  return (
    <div className="absolute contents left-52 top-[42px]" data-name="5/28">
      <div
        className="absolute font-['Pretendard:Medium',_sans-serif] h-[14.4px] leading-[0] not-italic text-[#767676] text-[10px] text-center top-[99.6px] tracking-[-0.25px] translate-x-[-50%] w-[24.355px]"
        style={{ left: "calc(50% + 66.1021px)" }}
      >
        <p className="adjustLetterSpacing block leading-[1.4]">5/28</p>
      </div>
      <div className="absolute left-[211.425px] size-[48.353px] top-[45.023px]">
        <img
          alt
          className="block max-w-none size-full"
          height="48.353538513183594"
          src={imgEllipse515}
          width="48.353538513183594"
        />
      </div>
      <FallHistoryHelper1 additionalClassNames={["left-[211.247px]"]} />
      <FallHistoryHelper additionalClassNames={["left-52"]} />
    </div>
  );
}

function FallHistory529() {
  return (
    <div className="absolute contents left-[274px] top-[42px]" data-name="5/29">
      <div
        className="absolute font-['Pretendard:Medium',_sans-serif] h-[14.4px] leading-[0] not-italic text-[#767676] text-[10px] text-center top-[99.6px] tracking-[-0.25px] translate-x-[-50%] w-[30.849px]"
        style={{ left: "calc(50% + 132.102px)" }}
      >
        <p className="adjustLetterSpacing block leading-[1.4]">5/29</p>
      </div>
      <div className="absolute left-[277.425px] size-[48.353px] top-[45.023px]">
        <img
          alt
          className="block max-w-none size-full"
          height="48.353538513183594"
          src={imgEllipse515}
          width="48.353538513183594"
        />
      </div>
      <FallHistoryHelper1 additionalClassNames={["left-[277.247px]"]} />
      <FallHistoryHelper additionalClassNames={["left-[274px]"]} />
    </div>
  );
}

function FallHistoryCalendar() {
  return (
    <div
      className="absolute contents left-2.5 top-[42px]"
      data-name="낙상이력 달력"
    >
      <FallHistory525 />
      <FallHistory526 />
      <FallHistory527 />
      <FallHistory528 />
      <FallHistory529 />
    </div>
  );
}

function FallHistoryMuted() {
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

function FallHistoryDivider16Pt16Pt() {
  return (
    <div className="relative size-full" data-name="Divider / 16pt 16pt">
      <FallHistoryMuted />
    </div>
  );
}

function FallHistoryBackgroundsTransparent() {
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
          <FallHistoryDivider16Pt16Pt />
        </div>
      </div>
    </div>
  );
}

function FallHistoryHeadline() {
  return (
    <div
      className="absolute contents left-0 right-0 top-0"
      data-name="Headline"
    >
      <div className="absolute flex h-8 items-center justify-center left-0 right-0 top-0">
        <div className="flex-none h-8 scale-y-[-100%] w-[339px]">
          <FallHistoryBackgroundsTransparent />
        </div>
      </div>
    </div>
  );
}

function FallHistoryHeader() {
  return (
    <div className="absolute contents left-0 top-0" data-name="낙상이력 상단">
      <FallHistoryHeadline />
      <div className="absolute flex flex-col font-['League_Spartan:Bold',_sans-serif] font-bold justify-center leading-[0] left-[49.5px] text-[#00278c] text-[18px] text-center text-nowrap top-[16.5px] translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[normal] whitespace-pre">낙상 이력</p>
      </div>
    </div>
  );
}

function FallHistorySection() {
  return (
    <div className="relative size-full" data-name="낙상이력 파트">
      <FallAlertBox />
      <FallHistoryCalendar />
      <FallHistoryHeader />
    </div>
  );
}

// === 생체신호 파트 컴포넌트들 ===
type VitalSignsWrapper1Props = {
    additionalClassNames?: string[];
};
function VitalSignsWrapper1({ children, additionalClassNames = [] }: React.PropsWithChildren<VitalSignsWrapper1Props>) {
    return <div className={clsx("[grid-area:1_/_1] ml-0 relative w-[309px]", additionalClassNames)}><div className="[flex-flow:wrap] box-border content-center flex gap-12 items-center justify-end p-0 relative w-[309px]">{children}</div></div>;
}
type VitalSignsWrapperProps = {
    additionalClassNames?: string[];
};
function VitalSignsWrapper({ children, additionalClassNames = [] }: React.PropsWithChildren<VitalSignsWrapperProps>) {
    return <div className={clsx("h-px relative shrink-0", additionalClassNames)}><div className="absolute bottom-1/2 left-0 right-0 top-0">{children}</div></div>;
}
function VitalSignsHeartorgan({ children }: React.PropsWithChildren<{}>) {
    return <div className="[grid-area:1_/_1] ml-1.5 mt-2 relative size-[41px]"><div className="absolute inset-[-4.878%]"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 45"><g id="heart-organ 1">{children}</g></svg></div></div>;
}
function VitalSignsDivider() {
    return <VitalSignsWrapper additionalClassNames={["w-[242px]"]}><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 242 1"><path clipRule="evenodd" d="M0 0H242V0.5H0V0Z" fill="var(--fill-0, #CCCCCC)" fillRule="evenodd" id="Divider"/></svg></VitalSignsWrapper>;
}
type VitalSignsHelperProps = {
    text: string;
    text1: string;
};
function VitalSignsHelper({ text, text1 }: VitalSignsHelperProps) {
    return <div className="[grid-area:1_/_1] ml-[67px] mt-[13px] relative w-[120px]"><div className="box-border content-stretch flex flex-col gap-[5px] items-start justify-start leading-[0] p-0 relative text-[#000000] text-left w-[120px]"><div className="font-['League_Spartan:Medium',_sans-serif] font-medium h-2.5 relative shrink-0 text-[14px] w-full"><p className="block leading-[normal]">{text}</p></div><div className="flex flex-col font-['SUIT_Variable:Medium',_sans-serif] justify-center not-italic relative shrink-0 text-[18px] w-full"><p className="block leading-[normal]">{text1}</p></div></div></div>;
}
type VitalSignsButtonTextProps = {
    text: string;
};
function VitalSignsButtonText({ text }: VitalSignsButtonTextProps) {
    return <div className="h-[30px] relative shrink-0 w-[74px]"><div className="absolute bg-[#efeff4] inset-0 rounded-[17px]" data-name="Background"/><div className="absolute flex flex-col font-['SUIT_Variable:SemiBold',_sans-serif] justify-center leading-[0] left-1/2 not-italic text-[#007aff] text-[15px] text-center text-nowrap top-1/2 tracking-[-0.24px] translate-x-[-50%] translate-y-[-50%] uppercase"><p className="adjustLetterSpacing block leading-[20px] whitespace-pre">{text}</p></div></div>;
}
function VitalSignsBitmapImage() {
    return <div className="[grid-area:1_/_1] h-[57px] ml-0 mt-0 relative w-[54px]"><div className="absolute bottom-[-0.877%] left-[-0.926%] right-[-0.926%] top-[-0.877%]"><img alt className="block max-w-none size-full" height="58" src={imgBitmap} width="55"/></div></div>;
}
function VitalSignsBloodPressure() {
    return <div className="[grid-area:1_/_1] ml-[67px] mt-[13px] relative w-[120px]" data-name="혈압/수치"><div className="box-border content-stretch flex flex-col gap-[5px] items-start justify-start leading-[0] p-0 relative text-[#000000] w-[120px]"><div className="font-['League_Spartan:Medium',_sans-serif] font-medium h-2.5 relative shrink-0 text-[14px] text-left w-full"><p className="block leading-[normal]">혈압</p></div><div className="flex flex-col font-['SUIT_Variable:Medium',_sans-serif] justify-center not-italic relative shrink-0 text-[18px] text-center w-full"><p className="block leading-[normal]">125/80 mmHg</p></div></div></div>;
}
function VitalSignsHeartOrgan1() {
    return <VitalSignsHeartorgan>
    <rect height="43" stroke="var(--stroke-0, white)" strokeWidth="2" width="43" x="1" y="1"/>
    <path clipRule="evenodd" d={vitalSignsSvgPaths.p1ef2f100} fill="var(--fill-0, #2260FF)" fillRule="evenodd" id="Vector"/>
    </VitalSignsHeartorgan>;
}
function VitalSignsBloodPressureCard() {
    return <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="버튼말고 혈압부분"><VitalSignsBloodPressure /><VitalSignsBitmapImage /><VitalSignsHeartOrgan1 /></div>;
}
function VitalSignsHeartOrgan2() {
    return <VitalSignsHeartorgan>
    <rect height="43" stroke="var(--stroke-0, white)" strokeWidth="2" width="43" x="1" y="1"/>
    <path clipRule="evenodd" d={vitalSignsSvgPaths.p35c57d00} fillRule="evenodd" id="Vector 158 (Stroke)" stroke="var(--stroke-0, #2260FF)" strokeLinecap="round" strokeWidth="2"/>
    </VitalSignsHeartorgan>;
}
function VitalSignsHeartRateCard() {
    return <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="버튼말고 심박수부분"><VitalSignsHelper text="심박수" text1="72 bpm"/><VitalSignsBitmapImage /><VitalSignsHeartOrgan2 /></div>;
}
function VitalSignsHeartOrgan3() {
    return <VitalSignsHeartorgan>
    <rect height="43" stroke="var(--stroke-0, white)" strokeWidth="2" width="43" x="1" y="1"/>
    <g id="Vector">
    <path d={vitalSignsSvgPaths.p33a9c6f0} stroke="var(--stroke-0, #2260FF)" strokeLinecap="round" strokeWidth="2"/>
    <path d={vitalSignsSvgPaths.p10444100} stroke="var(--stroke-0, #2260FF)" strokeLinecap="round" strokeWidth="2"/>
    </g>
    </VitalSignsHeartorgan>;
}
function VitalSignsBMICard() {
    return <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="버튼말고 BMI부분"><VitalSignsHelper text="BMI 수치" text1="15.75"/><VitalSignsBitmapImage /><VitalSignsHeartOrgan3 /></div>;
}
function VitalSignsBMIButton() {
    return <div className="h-[30px] relative shrink-0 w-[74px]" data-name="생체신호 버튼"><div className="absolute bg-[#efeff4] inset-0 rounded-[17px]" data-name="Background"/><div className="absolute flex flex-col font-['SUIT_Variable:SemiBold',_sans-serif] justify-center leading-[0] left-1/2 not-italic text-[#dc362e] text-[15px] text-center text-nowrap top-1/2 tracking-[-0.24px] translate-x-[-50%] translate-y-[-50%] uppercase"><p className="adjustLetterSpacing block leading-[20px] whitespace-pre">미달</p></div></div>;
}
function VitalSignsCards() {
    return <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="생체신호 3가지"><VitalSignsWrapper1 additionalClassNames={["mt-0"]}><VitalSignsBloodPressureCard /><VitalSignsButtonText text="정상"/><VitalSignsDivider /></VitalSignsWrapper1><VitalSignsWrapper1 additionalClassNames={["mt-[68px]"]}><VitalSignsHeartRateCard /><VitalSignsButtonText text="정상"/><VitalSignsDivider /></VitalSignsWrapper1><VitalSignsWrapper1 additionalClassNames={["mt-[135px]"]}><VitalSignsBMICard /><VitalSignsBMIButton /><VitalSignsDivider /></VitalSignsWrapper1></div>;
}
function VitalSignsSection() {
    return <div className="relative size-full" data-name="생체 신호 파트"><div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 relative size-full"><div className="relative shrink-0 w-full" data-name="생체 신호"><div className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative w-full"><div className="flex flex-col font-['League_Spartan:Bold',_sans-serif] font-bold justify-center leading-[0] min-w-full relative shrink-0 text-[#00278c] text-[18px] text-left" style={{ width: "min-content" }}><p className="block leading-[normal]">생체 신호</p></div><VitalSignsWrapper additionalClassNames={["w-[309px]"]}><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 309 1">
    <path clipRule="evenodd" d="M0 0H309V0.5H0V0Z" fill="var(--fill-0, #CCCCCC)" fillRule="evenodd" id="Divider"/>
    </svg></VitalSignsWrapper></div></div><VitalSignsCards /></div></div>;
}

// === 기존 HealthInfo 컴포넌트들 - GaitInfo 스타일로 수정 ===
// 탭 버튼 섹션 - GaitInfo와 동일한 방식으로 수정
function TabSection({ activeTab, onTabChange }: { 
  activeTab: 'health' | 'stats';
  onTabChange: (tab: 'health' | 'stats') => void;
}) {
  return (
    <div 
      className="absolute bg-[#bacaf5] rounded-2xl top-[205px] translate-x-[-50%] w-[325px]" 
      data-name="건강정보 탭" 
      style={{ left: "calc(50% - 0.5px)" }}
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-start p-[4px] relative w-[325px]">
          {/* 건강 정보 탭 */}
          <button
            onClick={() => onTabChange('health')}
            className={`${
              activeTab === 'health' 
                ? 'bg-[#ffffff] shadow-[2px_2px_4px_0px_rgba(0,0,0,0.35)]' 
                : 'bg-transparent'
            } relative rounded-xl shrink-0 w-[163px] transition-all duration-300 ease-in-out`}
          >
            <div className="flex flex-row items-center justify-center relative size-full">
              <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-0 py-2.5 relative w-[163px]">
                <div className={`font-['Pretendard:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[15px] text-center text-nowrap tracking-[-0.375px] transition-colors duration-300 ${
                  activeTab === 'health' ? 'text-[#00278c] font-bold' : 'text-[#3c4d79]'
                }`}>
                  <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre font-bold">
                    건강 정보
                  </p>
                </div>
              </div>
            </div>
          </button>
          
          {/* 상세 통계 탭 */}
          <button
            onClick={() => onTabChange('stats')}
            className={`${
              activeTab === 'stats' 
                ? 'bg-[#ffffff] shadow-[2px_2px_4px_0px_rgba(0,0,0,0.35)]' 
                : 'bg-transparent'
            } relative rounded-xl shrink-0 w-[153px] transition-all duration-300 ease-in-out`}
          >
            <div className="flex flex-row items-center justify-center relative size-full">
              <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-0 py-2.5 relative w-[153px]">
                <div className={`font-['Pretendard:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[15px] text-center text-nowrap tracking-[-0.375px] transition-colors duration-300 ${
                  activeTab === 'stats' ? 'text-[#00278c] font-bold' : 'text-[#3c4d79]'
                }`}>
                  <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre font-bold">
                    상세 통계
                  </p>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

function Component12() {
    return <div className="absolute contents leading-[0] left-[37px] text-[#00278c] top-[108px]" data-name="건강평가 부분"><div className="absolute flex flex-col font-['Pretendard:Medium',_sans-serif] h-[19px] justify-center left-[79px] not-italic text-[24px] text-center top-[147.5px] translate-x-[-50%] translate-y-[-50%] w-16"><p className="block leading-[normal]">86%</p></div><div className="absolute font-['League_Spartan:Medium',_sans-serif] font-medium left-14 text-[12px] text-left text-nowrap top-[170px]"><p className="block leading-[normal] whitespace-pre">건강 상태 매우 양호</p></div><div className="absolute flex flex-col font-['League_Spartan:Bold',_sans-serif] font-bold h-5 justify-center left-[84.5px] text-[16px] text-center top-[118px] translate-x-[-50%] translate-y-[-50%] w-[95px]"><p className="block leading-[normal]">건강 평가</p></div></div>;
}
function Component13() {
    return <div className="absolute h-[131px] left-[185px] top-[107px] w-[137px]" data-name="반그래프"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 137 131">
    <g id="Frame 1707485584">
    <path d={svgPaths.p11879100} fill="var(--fill-0, #E9EDF0)" id="Ellipse 17"/>
    <path d={svgPaths.p1c0cab70} fill="var(--fill-0, #3A5AFE)" id="Ellipse 18"/>
    </g>
    </svg></div>;
}
function Component14() {
    return <div className="absolute h-[34px] left-[235px] top-[138px] w-[35px]" data-name="웃는 아이콘"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 34">
    <g id="ìë ìì´ì½">
    <ellipse cx="17.5" cy="17" fill="var(--fill-0, #ECEAF8)" id="Ellipse 1" rx="17.5" ry="17"/>
    <g id="bxs:smile">
    <path d={svgPaths.p33a40e00} fill="var(--fill-0, #344BFD)" id="Vector"/>
    </g>
    </g>
    </svg></div>;
}
function Component15() {
    return <div className="absolute contents left-[17px] top-[91px]" data-name="건강평가 파트"><div className="absolute bg-[#ffffff] h-[101px] left-[17px] rounded-[23px] top-[91px] w-[325px]"><div className="absolute border-[#00278c] border-[1.7px] border-solid inset-0 pointer-events-none rounded-[23px]"/></div><Component12 /><Component13 /><Component14 /></div>;
}
type Wrapper10Props = {
    additionalClassNames?: string[];
};
function Wrapper10({ children, additionalClassNames = [] }: React.PropsWithChildren<Wrapper10Props>) {
    return <div className={clsx("absolute size-[27px] top-[45px]", additionalClassNames)}><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">{children}</svg></div>;
}
function Component16() {
    return <Wrapper10 additionalClassNames={["left-[274px]"]}>
    <g id="ìë¦¼ ë²í¼">
    <circle cx="13.5" cy="13.5" fill="var(--fill-0, #CAD6FF)" id="Ellipse 40" r="13.5"/>
    <path d={svgPaths.p388dad00} fill="var(--stroke-0, black)" id="Vector"/>
    <circle cx="18.5" cy="8.5" fill="var(--fill-0, #2260FF)" id="Ellipse 42" r="2.5"/>
    </g>
    </Wrapper10>;
}
function Component17() {
    return <Wrapper10 additionalClassNames={["left-[305px]"]}>
    <g id="Group 1707485405">
    <circle cx="13.5" cy="13.5" fill="var(--fill-0, #CAD6FF)" id="Ellipse 41" r="13.5"/>
    <path d={svgPaths.p4f56900} fill="var(--stroke-0, black)" id="Vector"/>
    </g>
    </Wrapper10>;
}

// 건강 정보 콘텐츠 컴포넌트
function HealthInfoContent() {
  return (
    <>
      {/* 낙상이력 파트 */}
      <div className="absolute left-[11px] top-[261px] w-[339px] h-[179px]">
        <FallHistorySection />
      </div>
      
      {/* 생체신호 파트 */}
      <div className="absolute left-[25px] top-[460px] w-[309px] h-[220px]">
        <VitalSignsSection />
      </div>
    </>
  );
}

// 상세 통계 콘텐츠 컴포넌트
function DetailedStatsContent() {
  return (
    <div className="absolute left-0 top-[250px] w-full h-[500px]">
      <HealthStatistics />
    </div>
  );
}

function Component18({ onBackClick }: { onBackClick?: () => void }) {
    const [currentTab, setCurrentTab] = useState<'health' | 'stats'>('health');

    const handleTabChange = (tab: 'health' | 'stats') => {
        setCurrentTab(tab);
    };

    return <div className="absolute bg-[rgba(236,241,255,0.23)] h-[772px] left-0 overflow-clip top-7 w-[360px]" data-name="건강상태(건강정보)">
        {/* 뒤로가기 버튼 */}
        <BackButtonFrame onClick={onBackClick} />
        
        {/* 건강정보 탭 - GaitInfo 스타일로 수정 */}
        <TabSection activeTab={currentTab} onTabChange={handleTabChange} />
        
        {/* 건강평가 파트 */}
        <Component15 />
        
        {/* 페이지 제목 */}
        <div className="absolute capitalize flex flex-col font-['Noto_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] left-[85.5px] text-[#00278c] text-[30px] text-center text-nowrap top-[60.5px] translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
            <p className="block leading-[normal] whitespace-pre">{currentTab === 'health' ? '건강 상태' : '상세 통계'}</p>
        </div>
        
        {/* 상단 버튼들 */}
        <Component16 />
        <Component17 />
        
        {/* 콘텐츠 영역 - 애니메이션 적용 */}
        <AnimatePresence mode="wait">
            {currentTab === 'health' ? (
                <motion.div
                    key="health-content"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{
                        duration: 0.3,
                        ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                >
                    <HealthInfoContent />
                </motion.div>
            ) : (
                <motion.div
                    key="stats-content"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{
                        duration: 0.3,
                        ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                >
                    <DetailedStatsContent />
                </motion.div>
            )}
        </AnimatePresence>
    </div>;
}
function Component19() {
    // TabBar is now handled by App.tsx, so this component returns null
    return null;
}
function Group1707485406() {
    return <div className="absolute h-[9px] left-[312px] top-[11px] w-[17px]"><div className="absolute bottom-[-5.556%] left-[-2.941%] right-[-2.941%] top-[-5.556%]"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 11">
    <g id="Group 12">
    <path d={svgPaths.pe0ff600} fill="var(--fill-0, black)" id="Vector (Stroke)"/>
    <path clipRule="evenodd" d={svgPaths.p6d50280} fillRule="evenodd" id="Vector (Stroke)_2" stroke="var(--stroke-0, black)"/>
    </g>
    </svg></div></div>;
}
function Component20() {
    return <div className="absolute contents left-0 top-0" data-name="상단 부분"><div className="absolute bg-[rgba(226,234,255,0.66)] h-7 left-0 top-0 w-[360px]"/><Group1707485406 /><div className="absolute capitalize flex flex-col font-['League_Spartan:Medium',_sans-serif] font-medium h-3.5 justify-center leading-[0] left-[27px] text-[#000000] text-[13px] text-left top-4 translate-y-[-50%] w-[30px]"><p className="block leading-[normal]">16:04</p></div><div className="absolute h-[11px] left-[273px] top-[9px] w-[13px]" data-name="Vector"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 11">
    <g id="Vector">
    <path d={svgPaths.pdd38d00} fill="var(--fill-0, black)"/>
    <path d={svgPaths.p4dcf300} fill="var(--fill-0, black)"/>
    <path d={svgPaths.p12ffd800} fill="var(--fill-0, black)"/>
    <path d={svgPaths.p35c50d00} fill="var(--fill-0, black)"/>
    </g>
    </svg></div><div className="absolute h-2 left-[291px] top-[11px] w-[15px]" data-name="Vector"><div className="absolute bottom-[-12.5%] left-[-6.667%] right-[-6.667%] top-[-12.5%]"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 10">
    <path d={svgPaths.p197db300} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2"/>
    </svg></div></div></div>;
}

interface HealthInfoProps {
  onBackClick?: () => void;
}

export default function HealthInfo({ onBackClick }: HealthInfoProps) {
    return <div className="bg-[#ffffff] overflow-clip relative rounded-[30px] size-full" data-name="Health Info"><Component18 onBackClick={onBackClick} /><Component19 /><Component20 /></div>;
}