import React, { useState, useEffect } from 'react';
import svgPaths from "../imports/svg-nmxfitn96p";

interface TabBarProps {
  currentTab?: 'home' | 'chat' | 'profile' | 'calendar';
  onTabChange?: (tab: 'home' | 'chat' | 'profile' | 'calendar') => void;
}

export default function TabBar({ currentTab = 'home', onTabChange }: TabBarProps) {
  const [activeTab, setActiveTab] = useState<'home' | 'chat' | 'profile' | 'calendar'>(currentTab);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  // currentTab prop이 변경되면 activeTab 상태 업데이트
  useEffect(() => {
    setActiveTab(currentTab);
  }, [currentTab]);

  const handleTabClick = (tab: 'home' | 'chat' | 'profile' | 'calendar') => {
    setActiveTab(tab);
    onTabChange?.(tab);
  };

  const isTabActive = (tab: string) => {
    return activeTab === tab;
  };

  const isTabHovered = (tab: string) => {
    return hoveredTab === tab;
  };

  return (
    <div
      className="fixed bottom-3 left-1/2 transform -translate-x-1/2 h-12 w-[298px] z-50"
      data-name="TabBar"
    >
      <div className="relative rounded-3xl size-full">
        {/* 배경 */}
        <div className="absolute bg-[#ffffff] h-12 left-0 rounded-3xl top-0 w-[298px] shadow-lg" />
        
        {/* 홈 버튼 - 활성 상태일 때 파란색 원 배경 */}
        <div
          className="absolute h-12 left-[18px] top-0 w-12 cursor-pointer transition-all duration-200 flex items-center justify-center"
          data-name="HomeButton"
          onMouseEnter={() => setHoveredTab('home')}
          onMouseLeave={() => setHoveredTab(null)}
          onClick={() => handleTabClick('home')}
        >
          {/* 파란색 원형 배경 - 활성 상태일 때만 표시 */}
          {isTabActive('home') && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-10 h-10 bg-[#2260FF] rounded-full shadow-lg flex items-center justify-center">
                {/* 홈 아이콘 - 파란색 원 안에 중앙 정렬, 살짝 위로 이동 */}
                <svg
                  className="w-[32px] h-[29px] -translate-y-1.5"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 48 35"
                >
                  <path
                    d={svgPaths.p160b9b00}
                    fill="white"
                    className="transition-colors duration-200"
                  />
                </svg>
              </div>
            </div>
          )}
          
          {/* 홈 아이콘 - 비활성 상태일 때 */}
          {!isTabActive('home') && (
            <svg
              className="w-[32px] h-[29px] -translate-y-1.5"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 48 35"
            >
              <path
                d={svgPaths.p160b9b00}
                fill="black"
                className="transition-colors duration-200"
              />
            </svg>
          )}
        </div>

        {/* 채팅 아이콘 */}
        <div
          className="absolute h-[21.86px] left-[103px] top-[12.059px] w-6 cursor-pointer transition-all duration-200"
          data-name="ChatIcon"
          onMouseEnter={() => setHoveredTab('chat')}
          onMouseLeave={() => setHoveredTab(null)}
          onClick={() => handleTabClick('chat')}
        >
          {isTabActive('chat') && (
            <div className="absolute -inset-4 flex items-center justify-center">
              <div className="w-12 h-10 bg-[#2260FF] rounded-full shadow-lg"></div>
            </div>
          )}
          <div className="absolute bottom-[-3.893%] left-[-3.542%] right-[-3.542%] top-[-3.888%] z-10">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 26 24"
            >
              <path
                d={svgPaths.p8a7a700}
                stroke={isTabActive('chat') ? 'white' : 'black'}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.7"
                className="transition-colors duration-200"
              />
            </svg>
          </div>
        </div>

        {/* 프로필 아이콘 */}
        <div
          className="absolute h-[21.86px] left-[180px] top-3 w-[19px] cursor-pointer transition-all duration-200"
          data-name="ProfileIcon"
          onMouseEnter={() => setHoveredTab('profile')}
          onMouseLeave={() => setHoveredTab(null)}
          onClick={() => handleTabClick('profile')}
        >
          {isTabActive('profile') && (
            <div className="absolute -inset-4 flex items-center justify-center">
              <div className="w-12 h-10 bg-[#2260FF] rounded-full shadow-lg"></div>
            </div>
          )}
          <div className="absolute bottom-[-3.888%] left-[-4.474%] right-[-4.474%] top-[-3.889%] z-10">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 21 24"
            >
              <g>
                <path
                  d={svgPaths.p2f106300}
                  stroke={isTabActive('profile') ? 'white' : 'black'}
                  strokeLinecap="round"
                  strokeWidth="1.7"
                  className="transition-colors duration-200"
                />
                <path
                  d={svgPaths.p1a455f00}
                  stroke={isTabActive('profile') ? 'white' : 'black'}
                  strokeLinecap="round"
                  strokeWidth="1.7"
                  className="transition-colors duration-200"
                />
              </g>
            </svg>
          </div>
        </div>

        {/* 캘린더 아이콘 */}
        <div
          className="absolute h-[21.86px] left-[252px] top-[12.059px] w-[18px] cursor-pointer transition-all duration-200"
          data-name="CalendarIcon"
          onMouseEnter={() => setHoveredTab('calendar')}
          onMouseLeave={() => setHoveredTab(null)}
          onClick={() => handleTabClick('calendar')}
        >
          {isTabActive('calendar') && (
            <div className="absolute -inset-4 flex items-center justify-center">
              <div className="w-12 h-10 bg-[#2260FF] rounded-full shadow-lg"></div>
            </div>
          )}
          <div className="absolute bottom-[-3.788%] left-[-4.722%] right-[-4.722%] top-[-3.888%] z-10">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 20 24"
            >
              <path
                d={svgPaths.p301c0180}
                fill={isTabActive('calendar') ? 'white' : 'black'}
                className="transition-colors duration-200"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}