'use client';

import React from 'react';
import Home from '../imports/Home';

interface ClickableHomeProps {
  onTestClick: () => void;
}

export default function ClickableHome({ onTestClick }: ClickableHomeProps) {
  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    
    // Check if the clicked element or its parent is the test mode card
    const testModeCard = target.closest('[data-testmode-card]');
    if (testModeCard) {
      e.preventDefault();
      e.stopPropagation();
      onTestClick();
      return;
    }
  };

  return (
    <div onClick={handleClick} className="w-full h-full">
      <div className="bg-[#ffffff] overflow-clip relative rounded-[30px] size-full">
        {/* All the original Home content with a special marker for the test mode card */}
        <div className="absolute h-[92px] left-[31px] top-[281px] w-[298px] cursor-pointer hover:bg-gray-50 rounded-[20px] transition-colors duration-200" data-testmode-card="true">
          <div className="absolute bg-[#ffffff] border-[#3d6dea] border-[1.7px] border-solid rounded-[20px] shadow-[2px_2px_10px_0px_rgba(0,0,0,0.25)] inset-0" />
          
          <div className="absolute flex flex-col font-['League_Spartan:Bold',_sans-serif] font-bold justify-center leading-[0] left-[102px] text-[#00278c] text-[18px] text-center text-nowrap top-[317.5px] translate-x-[-50%] translate-y-[-50%]">
            <p className="block leading-[normal] whitespace-pre">테스트 모드</p>
          </div>
          <div className="absolute font-['League_Spartan:Medium',_sans-serif] font-medium leading-[0] left-[58px] text-[#00278c] text-[12px] text-left text-nowrap top-[340px]">
            <p className="block leading-[normal] whitespace-pre">
              낙상 위험 및 인지기능 검사
            </p>
          </div>
          <div className="absolute flex flex-col font-['League_Spartan:Medium',_sans-serif] font-medium justify-center leading-[0] left-[221.5px] text-[#00278c] text-[24px] text-center text-nowrap top-[325px] translate-x-[-50%] translate-y-[-50%]">
            <p className="block leading-[normal] whitespace-pre">88점</p>
          </div>
          
          {/* Test mode icon */}
          <div className="absolute bottom-[56.203%] left-[72.147%] right-[15.758%] top-[38.552%]">
            <div className="absolute bottom-[-16.683%] left-[-6.89%] right-[-16.076%] top-[-7.15%]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 54 52"
              >
                <g filter="url(#filter0_d_10_120)" id="Vector">
                  <mask fill="white" id="path-1-inside-1_10_120">
                    <path
                      clipRule="evenodd"
                      d="M23.2917 5C26.4622 5 29.1071 7.64493 29.1071 10.8154C29.1071 13.986 26.4622 16.6309 23.2917 16.6309C20.1211 16.6309 17.4762 13.986 17.4762 10.8154C17.4762 7.64493 20.1211 5 23.2917 5ZM23.2917 42C26.4622 42 29.1071 39.3551 29.1071 36.1846C29.1071 33.014 26.4622 30.3691 23.2917 30.3691C20.1211 30.3691 17.4762 33.014 17.4762 36.1846C17.4762 39.3551 20.1211 42 23.2917 42ZM48.0417 23.5C48.0417 26.6706 45.3968 29.3154 42.2262 29.3154C39.0557 29.3154 36.4107 26.6706 36.4107 23.5C36.4107 20.3295 39.0557 17.6846 42.2262 17.6846C45.3968 17.6846 48.0417 20.3295 48.0417 23.5Z"
                      fillRule="evenodd"
                    />
                  </mask>
                  <path
                    clipRule="evenodd"
                    d="M23.2917 5C26.4622 5 29.1071 7.64493 29.1071 10.8154C29.1071 13.986 26.4622 16.6309 23.2917 16.6309C20.1211 16.6309 17.4762 13.986 17.4762 10.8154C17.4762 7.64493 20.1211 5 23.2917 5ZM23.2917 42C26.4622 42 29.1071 39.3551 29.1071 36.1846C29.1071 33.014 26.4622 30.3691 23.2917 30.3691C20.1211 30.3691 17.4762 33.014 17.4762 36.1846C17.4762 39.3551 20.1211 42 23.2917 42ZM48.0417 23.5C48.0417 26.6706 45.3968 29.3154 42.2262 29.3154C39.0557 29.3154 36.4107 26.6706 36.4107 23.5C36.4107 20.3295 39.0557 17.6846 42.2262 17.6846C45.3968 17.6846 48.0417 20.3295 48.0417 23.5Z"
                    fill="var(--fill-0, #2260FF)"
                    fillRule="evenodd"
                  />
                  <path
                    d="M29.1071 10.8154C29.1071 13.986 26.4622 16.6309 23.2917 16.6309C20.1211 16.6309 17.4762 13.986 17.4762 10.8154C17.4762 7.64493 20.1211 5 23.2917 5C26.4622 5 29.1071 7.64493 29.1071 10.8154Z"
                    fill="var(--stroke-0, #CAD6FF)"
                    mask="url(#path-1-inside-1_10_120)"
                  />
                </g>
                <defs>
                  <filter
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                    height="51.9583"
                    id="filter0_d_10_120"
                    width="53.5417"
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
                    <feGaussianBlur stdDeviation="2.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                    />
                    <feBlend
                      in2="BackgroundImageFix"
                      mode="normal"
                      result="effect1_dropShadow_10_120"
                    />
                    <feBlend
                      in="SourceGraphic"
                      in2="effect1_dropShadow_10_120"
                      mode="normal"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        
        {/* Rest of the Home component content - we'll embed the original Home component here but hide the test mode card */}
        <div className="[&_[data-testmode-card]]:hidden">
          <Home />
        </div>
      </div>
    </div>
  );
}