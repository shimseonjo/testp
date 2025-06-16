import React, { useState } from 'react';
import svgPaths from "./svg-12x0h5casv";
import clsx from "clsx";
import imgFirstAid from "figma:asset/25b425228d6da6830275a4b8e4cbbfca580cec82.png";
import imgStetoscope from "figma:asset/90e2dd358779d61e5951c54709410ecc8ebb08d1.png";
import imgHeartIcon from "figma:asset/03c873e47d2d6b951fcae6648d737ee7a41a9b23.png";
import imgMedicalRecord from "figma:asset/60869cab8fcbf1e45ab697d30f96cabf75d47d57.png";

// Floating animation styles
const floatingAnimationStyles = `
  @keyframes float1 {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    25% { transform: translateY(-10px) rotate(2deg); }
    50% { transform: translateY(-5px) rotate(-1deg); }
    75% { transform: translateY(-15px) rotate(1deg); }
  }
  
  @keyframes float2 {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    33% { transform: translateY(-12px) rotate(3deg); }
    66% { transform: translateY(-8px) rotate(-2deg); }
  }
  
  @keyframes float3 {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    20% { transform: translateY(-8px) rotate(-2deg); }
    40% { transform: translateY(-15px) rotate(1deg); }
    60% { transform: translateY(-3px) rotate(2deg); }
    80% { transform: translateY(-12px) rotate(-1deg); }
  }
  
  @keyframes float4 {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    30% { transform: translateY(-10px) rotate(2deg); }
    60% { transform: translateY(-18px) rotate(-1deg); }
    90% { transform: translateY(-5px) rotate(1deg); }
  }
  
  .float-1 { animation: float1 4s ease-in-out infinite; }
  .float-2 { animation: float2 3.5s ease-in-out infinite; }
  .float-3 { animation: float3 5s ease-in-out infinite; }
  .float-4 { animation: float4 4.5s ease-in-out infinite; }
`;

type BackgroundImage56Props = {
  additionalClassNames?: string[];
};

function BackgroundImage56({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<BackgroundImage56Props>) {
  return (
    <div className={clsx(additionalClassNames)}>
      <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-0 relative">
        {children}
      </div>
    </div>
  );
}

function BackgroundImage41({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center relative size-full">
      <div className="box-border content-stretch flex flex-row items-center justify-start p-[4px] relative w-[325px]">
        {children}
      </div>
    </div>
  );
}

type ButtonBackgroundImageProps = {
  additionalClassNames?: string[];
  text: string;
  onClick?: () => void;
};

function ButtonBackgroundImage({
  children,
  additionalClassNames = [],
  text,
  onClick,
}: React.PropsWithChildren<ButtonBackgroundImageProps>) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      style={{ left: "calc(50% - 0.5px)" }}
      className={clsx(
        "absolute rounded-2xl translate-x-[-50%] w-[325px] cursor-pointer transition-all duration-200",
        isHovered ? "bg-[#2260ff] shadow-[2px_2px_4px_0px_rgba(0,0,0,0.35)]" : "hover:bg-gray-50",
        additionalClassNames,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div 
        className={clsx(
          "absolute border-2 border-solid inset-0 pointer-events-none rounded-2xl transition-colors duration-200",
          isHovered ? "border-[#2260ff]" : "border-[#2260ff]"
        )} 
      />
      <BackgroundImage41>
        <BackgroundImage13>
          <div 
            className={clsx(
              "font-['Pretendard:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[20px] text-center text-nowrap tracking-[-0.5px] transition-colors duration-200",
              isHovered ? "text-white" : "text-[#00278c]"
            )}
          >
            <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
              {text}
            </p>
          </div>
        </BackgroundImage13>
      </BackgroundImage41>
    </div>
  );
}

function BackgroundImage13({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-[317px]">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-center px-0 py-2.5 relative w-[317px]">
          {children}
        </div>
      </div>
    </div>
  );
}

// 중복된 뒤로가기 컴포넌트 제거 (Frame1707485581에서 처리)

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
    <div 
      className="absolute left-[22px] top-[48px] cursor-pointer hover:bg-gray-100 rounded-lg p-2 transition-colors duration-200 flex items-center gap-2"
      data-back-button="true"
    >
      <Button />
      <div className="flex flex-col font-['League_Spartan:Regular',_sans-serif] font-normal justify-center leading-[0] text-[#2260ff] text-[12.3px] text-left text-nowrap tracking-[-0.41px]">
        <p className="adjustLetterSpacing block leading-[22px] whitespace-pre">
          뒤로가기
        </p>
      </div>
    </div>
  );
}

// Frame1707485584 함수 제거 (Button2에서 직접 처리)

interface Button2Props {
  onFallRiskTest2Click?: () => void;
}

function Button2({ onFallRiskTest2Click }: Button2Props) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      className={clsx(
        "absolute rounded-2xl top-[597px] translate-x-[-50%] w-[325px] cursor-pointer transition-all duration-200",
        isHovered ? "bg-[#2260ff] shadow-[2px_2px_4px_0px_rgba(0,0,0,0.35)]" : "hover:bg-gray-50"
      )}
      data-name="button2"
      style={{ left: "calc(50% - 0.5px)" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onFallRiskTest2Click}
    >
      <div 
        className={clsx(
          "absolute border-2 border-solid inset-0 pointer-events-none rounded-2xl transition-colors duration-200",
          "border-[#2260ff]"
        )} 
      />
      <BackgroundImage41>
        <BackgroundImage13>
          <div 
            className={clsx(
              "font-['Pretendard:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[20px] text-center text-nowrap tracking-[-0.5px] transition-colors duration-200",
              isHovered ? "text-white" : "text-[#00278c]"
            )}
          >
            <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
              낙상 위험도 검사 II
            </p>
          </div>
        </BackgroundImage13>
      </BackgroundImage41>
    </div>
  );
}

interface ComponentProps {
  onFallRiskTest2Click?: () => void;
}

function Component({ onFallRiskTest2Click }: ComponentProps) {
  return (
    <div
      className="absolute bg-gradient-to-b from-[#eff4ff] h-[800px] left-0 overflow-clip to-[#dbe3ff] top-0 w-[360px]"
      data-name="테스트 선택 화면"
    >
      <style dangerouslySetInnerHTML={{ __html: floatingAnimationStyles }} />
      
      <div className="absolute flex h-[718.859px] items-center justify-center left-[-91px] top-[2px] w-[428.551px]">
        <div className="flex-none rotate-[87.303deg]">
          <div className="h-[396.459px] relative w-[700.683px]">
            <div className="absolute bottom-[-0.031%] left-[-0.058%] right-[-0.142%] top-[-0.252%]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 703 398"
              >
                <path
                  d={svgPaths.p183fb900}
                  id="Line 1"
                  stroke="var(--stroke-0, white)"
                  strokeOpacity="0.65"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame1707485581 />
      <div
        className="absolute capitalize flex flex-col font-['Noto_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[1.6] left-[34px] text-[#00278c] text-[30px] text-left text-nowrap top-[163px] translate-y-[-50%] whitespace-pre"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="block mb-0">{`낙상 & 인지기능 `}</p>
        <p className="block">테스트</p>
      </div>
      
      <ButtonBackgroundImage
        text="인지기능 검사"
        additionalClassNames={["top-[667px]"]}
        onClick={() => console.log('인지기능 검사 clicked')}
      />
      <ButtonBackgroundImage
        text="낙상 위험도 검사 I"
        additionalClassNames={["top-[527px]"]}
        onClick={() => console.log('낙상 위험도 검사 I clicked')}
      />
      <Button2 onFallRiskTest2Click={onFallRiskTest2Click} />
      
      {/* Floating animations for Figma assets */}
      <div
        className="absolute h-[155px] left-[82px] top-[358px] w-[142px] float-1"
        data-name="First Aid"
      >
        <div
          className="absolute bg-[50%_50%] bg-cover bg-no-repeat inset-0"
          data-name="First Aid"
          style={{ backgroundImage: `url('${imgFirstAid}')` }}
        />
      </div>
      <div
        className="absolute h-[117px] left-[232px] top-[364px] w-[92.803px] float-2"
        data-name="Stetoscope"
      >
        <div className="absolute flex inset-0 items-center justify-center">
          <div className="flex-none h-[92.884px] rotate-[19.831deg] skew-x-[7.377deg] w-[77.464px]">
            <div
              className="bg-[50%_50%] bg-cover bg-no-repeat size-full"
              data-name="Stetoscope"
              style={{ backgroundImage: `url('${imgStetoscope}')` }}
            />
          </div>
        </div>
      </div>
      <div
        className="absolute h-[143px] left-[148px] top-[200px] w-[177px] float-3"
        data-name="HeartIcon"
      >
        <div
          className="[background-size:120.34%_148.95%] absolute bg-[45.83%_52.86%] bg-no-repeat inset-0"
          data-name="HeartIcon"
          style={{ backgroundImage: `url('${imgHeartIcon}')` }}
        />
      </div>
      <div
        className="absolute h-[117px] left-[17px] top-[269px] w-[110px] float-4"
        data-name="Medical Record"
      >
        <div
          className="absolute bg-[50%_50%] bg-cover bg-no-repeat inset-0"
          data-name="Medical Record"
          style={{ backgroundImage: `url('${imgMedicalRecord}')` }}
        />
      </div>
    </div>
  );
}

function Component1() {
  // TabBar is now handled by App.tsx - removed duplicate
  return null;
}

function Group1707485406() {
  return (
    <div className="absolute h-[9px] left-[312px] top-[11px] w-[17px]">
      <div className="absolute bottom-[-5.556%] left-[-2.941%] right-[-2.941%] top-[-5.556%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 19 11"
        >
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
        </svg>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="absolute contents left-0 top-0" data-name="상단 부분">
      <div className="absolute bg-[rgba(226,234,255,0.66)] h-7 left-0 top-0 w-[360px]" />
      <Group1707485406 />
      <div className="absolute capitalize flex flex-col font-['League_Spartan:Medium',_sans-serif] font-medium h-3.5 justify-center leading-[0] left-[27px] text-[#000000] text-[13px] text-left top-4 translate-y-[-50%] w-[30px]">
        <p className="block leading-[normal]">16:04</p>
      </div>
      <div
        className="absolute h-[11px] left-[273px] top-[9px] w-[13px]"
        data-name="Vector"
      >
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
      <div
        className="absolute h-2 left-[291px] top-[11px] w-[15px]"
        data-name="Vector"
      >
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
    </div>
  );
}

interface TestMainScreenProps {
  onFallRiskTest2Click?: () => void;
}

export default function TestMainScreen({ onFallRiskTest2Click }: TestMainScreenProps) {
  return (
    <div
      className="bg-[#ffffff] overflow-clip relative rounded-[30px] size-full"
      data-name="TestMainScreen"
    >
      <Component onFallRiskTest2Click={onFallRiskTest2Click} />
      <Component1 />
      <Component2 />
    </div>
  );
}