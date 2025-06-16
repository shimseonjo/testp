import svgPaths from "./svg-38b9q60c83";
import clsx from "clsx";
import img2D1 from "figma:asset/7f874f7533a1337a1b22c4419a7875200d218bf8.png";

type BackgroundImage76Props = {
  additionalClassNames?: string[];
};

function BackgroundImage76({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<BackgroundImage76Props>) {
  return (
    <div
      style={{ left: "calc(50% - 0.5px)" }}
      className={clsx(
        "absolute rounded-2xl translate-x-[-50%] w-[325px]",
        additionalClassNames,
      )}
    >
      {children}
    </div>
  );
}

function BackgroundImage59({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute bottom-[-5.556%] left-[-2.941%] right-[-2.941%] top-[-5.556%]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 19 11"
      >
        {children}
      </svg>
    </div>
  );
}

function BackgroundImage44({ children, onCompleteClick }: React.PropsWithChildren<{ onCompleteClick?: () => void }>) {
  return (
    <div className="flex flex-row items-center relative size-full">
      <div 
        className="box-border content-stretch flex flex-row items-center justify-start p-[4px] relative w-[325px] cursor-pointer hover:bg-blue-50 transition-colors duration-200 rounded-2xl"
        onClick={onCompleteClick}
      >
        {children}
      </div>
    </div>
  );
}

function BackgroundImage29({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-[317px]">
      <div className="flex flex-row items-center justify-center relative size-full">
        {children}
      </div>
    </div>
  );
}
type BackgroundImage14Props = {
  additionalClassNames?: string[];
};

function BackgroundImage14({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<BackgroundImage14Props>) {
  return (
    <div className={clsx(additionalClassNames)}>
      <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-0 relative">
        {children}
      </div>
    </div>
  );
}

function VectorBackgroundImage1() {
  return (
    <div className="absolute h-[11px] left-[273px] top-[9px] w-[13px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 13 11"
      >
        <g id="Vector">
          <path d={svgPaths.pdd38d00} fill="var(--fill-0, black)" />
          <path d={svgPaths.p4dcf300} fill="var(--fill-0, black)" />
          <path d={svgPaths.p12ffd800} fill="var(--fill-0, black)" />
          <path d={svgPaths.p35c50d00} fill="var(--fill-0, black)" />
        </g>
      </svg>
    </div>
  );
}

function VectorBackgroundImage() {
  return (
    <div className="absolute h-2 left-[291px] top-[11px] w-[15px]">
      <div className="absolute bottom-[-12.5%] left-[-6.667%] right-[-6.667%] top-[-12.5%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 17 10"
        >
          <path
            d={svgPaths.p197db300}
            id="Vector"
            stroke="var(--stroke-0, black)"
            strokeLinecap="round"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
}

function Frame1707485583() {
  return (
    <BackgroundImage14 additionalClassNames={["relative", "shrink-0"]}>
      <div className="flex flex-col font-['League_Spartan:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2260ff] text-[12.3px] text-left text-nowrap tracking-[-0.41px]">
        <p className="adjustLetterSpacing block leading-[22px] whitespace-pre">
          뒤로가기
        </p>
      </div>
    </BackgroundImage14>
  );
}

function Frame1707485582() {
  return (
    <BackgroundImage14
      additionalClassNames={["absolute", "left-[35px]", "top-[13px]"]}
    >
      <Frame1707485583 />
    </BackgroundImage14>
  );
}

function Button() {
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
            d={svgPaths.p14f1ef80}
            fill="var(--fill-0, #2260FF)"
            fillRule="evenodd"
            id="Arrow"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame1707485581() {
  return (
    <div className="absolute left-[22px] top-[11px]">
      <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative">
        <Button />
      </div>
    </div>
  );
}

function Frame1707485579() {
  return (
    <BackgroundImage29>
      <div className="box-border content-stretch flex flex-row items-center justify-center px-0 py-2.5 relative w-[317px]">
        <div className="font-['Pretendard:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#00278c] text-[20px] text-center text-nowrap tracking-[-0.5px]">
          <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre font-bold">
            완료 하기
          </p>
        </div>
      </div>
    </BackgroundImage29>
  );
}

function Component({ onCompleteClick }: { onCompleteClick?: () => void }) {
  return (
    <BackgroundImage76 additionalClassNames={["top-[623px]"]}>
      <div className="absolute border-2 border-[#2260ff] border-solid inset-0 pointer-events-none rounded-2xl" />
      <BackgroundImage44 onCompleteClick={onCompleteClick}>
        <Frame1707485579 />
      </BackgroundImage44>
    </BackgroundImage76>
  );
}

function Component1() {
  return (
    <div
      className="absolute contents left-[17px] top-32"
      data-name="챗봇 설명 대화 창"
    >
      <div className="absolute bg-[#ffffff] h-[101px] left-[17px] rounded-[23px] top-40 w-[325px]">
        <div className="absolute border-[#00278c] border-[1.7px] border-solid inset-0 pointer-events-none rounded-[23px]" />
      </div>
      <div
        className="absolute bottom-[70.705%] left-[76.389%] right-[14.167%] top-[21%]"
        data-name="마이크 아이콘"
      >
        <div className="absolute bottom-[-3.673%] left-[-7%] right-[-7%] top-[-7.347%] px-[0px] py-[5px] m-[0px] mx-[-2px] my-[0px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 38 55"
          >
            <g id="ë§ì´í¬ ìì´ì½">
              <path
                d={svgPaths.p3cca200}
                stroke="var(--stroke-0, white)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
              />
              <path
                d={svgPaths.p3cca200}
                stroke="var(--stroke-1, #2260FF)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
              />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute capitalize font-['Poppins:Bold',_sans-serif] leading-[1.75] left-36 not-italic text-[#181e4b] text-[17.2986px] text-center top-[160px] tracking-[-0.518957px] translate-x-[-50%] w-52">
        <p className="adjustLetterSpacing block mb-0">{`천천히 의자에 앉았다 `}</p>
        <p className="adjustLetterSpacing block">일어나주세요!</p>
      </div>
    </div>
  );
}

function Frame1707485580() {
  return (
    <BackgroundImage29>
      <div className="box-border content-stretch flex flex-row gap-4 items-center justify-center px-0 py-2.5 relative w-[317px]">
        <div className="font-['Pretendard:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[20px] text-center text-nowrap tracking-[-0.5px]">
          <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
            AI 진단 진행 중
          </p>
        </div>
        <div className="relative shrink-0 size-5" data-name="초록불">
          <div className="absolute bottom-[-40%] left-[-20%] right-[-20%] top-0">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 28 28"
            >
              <g filter="url(#filter0_d_29_54)" id="ì´ë¡ë¶">
                <circle cx="14" cy="10" fill="var(--fill-0, #34E979)" r="10" />
              </g>
              <defs>
                <filter
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                  height="28"
                  id="filter0_d_29_54"
                  width="28"
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
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    in2="BackgroundImageFix"
                    mode="normal"
                    result="effect1_dropShadow_29_54"
                  />
                  <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow_29_54"
                    mode="normal"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </BackgroundImage29>
  );
}

function Component2() {
  return (
    <BackgroundImage76
      additionalClassNames={[
        "bg-[#2260ff]",
        "shadow-[2px_2px_4px_0px_rgba(0,0,0,0.35)]",
        "top-[60px]",
      ]}
    >
      <BackgroundImage44>
        <Frame1707485580 />
      </BackgroundImage44>
    </BackgroundImage76>
  );
}

function Component3({ onCompleteClick }: { onCompleteClick?: () => void }) {
  return (
    <div
      className="absolute bg-[rgba(236,241,255,0.6)] h-[772px] left-0 overflow-clip top-7 w-[360px]"
      data-name="테스트 진행 창"
    >
      <Frame1707485582 />
      <Frame1707485581 />
      <div
        className="[background-size:100%_100%] absolute bg-[0%_0%] bg-no-repeat left-[-16px] size-[391px] top-[203px]"
        data-name="2d 아이콘 버전 1"
        style={{ backgroundImage: `url('${img2D1}')` }}
      />
      <Component onCompleteClick={onCompleteClick} />
      <div
        className="absolute capitalize flex flex-col font-['Noto_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] left-7 text-[#00278c] text-[25px] text-left top-[584px] translate-y-[-50%] w-[303px]"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="block leading-[1.6]">현재 단계: 의자에서 일어나기</p>
      </div>
      <Component1 />
      <Component2 />
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute h-[9px] left-[312px] top-[11px] w-[17px]">
      <BackgroundImage59>
        <g id="Group 12">
          <path
            d={svgPaths.pe0ff600}
            fill="var(--fill-0, black)"
            id="Vector (Stroke)"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p6d50280}
            fillRule="evenodd"
            id="Vector (Stroke)_2"
            stroke="var(--stroke-0, black)"
          />
        </g>
      </BackgroundImage59>
    </div>
  );
}

function Component4() {
  return (
    <div className="absolute contents left-0 top-0" data-name="상단바">
      <div
        className="absolute bg-[rgba(226,234,255,0.66)] h-7 left-0 top-0 w-[360px]"
        data-name="상단"
      />
      <div
        className="absolute h-[7px] translate-x-[-50%] translate-y-[-50%] w-3"
        data-name="Vector (Stroke)"
        style={{ top: "calc(50% - 384.5px)", left: "calc(50% + 139px)" }}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 12 7"
        >
          <path
            d={svgPaths.p2c8a2f00}
            fill="var(--fill-0, black)"
            id="Vector (Stroke)"
          />
        </svg>
      </div>
      <div
        className="absolute h-[9px] translate-x-[-50%] translate-y-[-50%] w-[17px]"
        data-name="Vector (Stroke)"
        style={{ top: "calc(50% - 384.5px)", left: "calc(50% + 140.5px)" }}
      >
        <BackgroundImage59>
          <path
            clipRule="evenodd"
            d={svgPaths.p6d50280}
            fillRule="evenodd"
            id="Vector (Stroke)"
            stroke="var(--stroke-0, black)"
          />
        </BackgroundImage59>
      </div>
      <VectorBackgroundImage />
      <VectorBackgroundImage1 />
      <div className="absolute capitalize flex flex-col font-['League_Spartan:Medium',_sans-serif] font-medium h-3.5 justify-center leading-[0] left-[27px] text-[#000000] text-[13px] text-left top-4 translate-y-[-50%] w-[30px]">
        <p className="block leading-[normal]">16:04</p>
      </div>
    </div>
  );
}


export default function TestScreen({ onCompleteClick }: { onCompleteClick?: () => void }) {
  return (
    <div
      className="bg-[#ffffff] overflow-clip relative rounded-[30px] size-full"
      data-name="Test Screen"
    >
      <Component3 onCompleteClick={onCompleteClick} />
      <div className="absolute bg-[rgba(226,234,255,0.66)] h-7 left-0 top-0 w-[360px]" />
      <div className="absolute capitalize flex flex-col font-['League_Spartan:Medium',_sans-serif] font-medium h-3.5 justify-center leading-[0] left-[27px] text-[#000000] text-[13px] text-left top-4 translate-y-[-50%] w-[30px]">
        <p className="block leading-[normal]">16:04</p>
      </div>
      <VectorBackgroundImage1 />
      <VectorBackgroundImage />
      <Group12 />
      <Component4 />
    </div>
  );
}