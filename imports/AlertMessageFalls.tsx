import svgPaths from "./svg-hkpvf1vs7b";

function EmojioneV1Warning() {
  return (
    <div
      className="h-[39px] relative shrink-0 w-[47px]"
      data-name="emojione-v1:warning"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 47 39"
      >
        <g id="emojione-v1:warning">
          <path
            d={svgPaths.p49d1c00}
            fill="var(--fill-0, #FFDD15)"
            id="Vector"
          />
          <path
            d={svgPaths.p291c8700}
            fill="var(--fill-0, #1F2E35)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame1707485674() {
  return (
    <div className="relative shrink-0">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center pb-0 pt-2.5 px-0 relative">
          <div className="font-['League_Spartan:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#000000] text-[32px] text-center text-nowrap">
            <p className="block leading-[normal] whitespace-pre">낙상 감지</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1707485675() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-row gap-[5px] items-center justify-start p-0 relative w-full">
        <EmojioneV1Warning />
        <Frame1707485674 />
      </div>
    </div>
  );
}

function Frame1707485676() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-col gap-[13px] items-start justify-start p-0 relative w-full">
        <Frame1707485675 />
        <div className="font-['Pretendard:Medium',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#000000] text-[16px] text-center tracking-[-0.32px] w-full">
          <p className="block mb-0">낙상이 감지되었습니다.</p>
          <p className="block">자동으로 긴급번호로 연결합니다.</p>
        </div>
      </div>
    </div>
  );
}

function Countdown() {
  return (
    <div
      className="bg-[#000000] relative rounded-[50px] shrink-0"
      data-name="Countdown"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-[15px] py-2.5 relative">
          <div className="font-['League_Spartan:Bold',_sans-serif] font-bold h-[23px] leading-[0] relative shrink-0 text-[#ffffff] text-[32px] text-center w-[37px]">
            <p className="block leading-[normal]">03</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div
      className="h-[43px] relative rounded-[50px] shrink-0"
      data-name="전화 연결"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-[43px] items-center justify-center px-[15px] py-2.5 relative">
          <div className="font-['Pretendard:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[23px] text-center text-nowrap">
            <p className="block leading-[normal] whitespace-pre">연결취소</p>
          </div>
        </div>
      </div>
      <div className="absolute border-2 border-[#000000] border-solid inset-0 pointer-events-none rounded-[50px]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="box-border content-stretch flex flex-row gap-[13px] items-center justify-center p-0 relative w-full">
        <Countdown />
        <Component />
      </div>
    </div>
  );
}

function Frame1707485677() {
  return (
    <div className="relative shrink-0 w-[205px]">
      <div className="box-border content-stretch flex flex-col gap-3.5 items-end justify-start p-0 relative w-[205px]">
        <Frame1707485676 />
        <Frame />
      </div>
    </div>
  );
}

function Frame1707485678() {
  return (
    <div className="absolute bg-[#ff5353] left-0 rounded-[20px] top-0">
      <div className="absolute border-[#ff0000] border-[5px] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-[57px] py-[35px] relative">
          <Frame1707485677 />
        </div>
      </div>
    </div>
  );
}

export default function AlertMessageFalls() {
  return (
    <div
      className="bg-[#ffffff] overflow-clip relative rounded-[20px] size-full"
      data-name="Alert Message(Falls)"
    >
      <Frame1707485678 />
    </div>
  );
}