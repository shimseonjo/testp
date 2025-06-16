'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import svgPaths from "./svg-uq42b870rd";
import 홈버튼 from "./홈버튼";
import DetailedStatisticsSection from "../components/DetailedStatisticsSection";

// Gait Metric 데이터 구조 정의
interface GaitMetric {
  label: string;
  value: string;
  status: "normal" | "caution" | "danger";
  description: string;
  comment: string;
}

// 보행 점수 요약 데이터 구조 정의
interface GaitScoreSummary {
  score: number;
  statusText: string;
  statusIcon: "happy" | "sad";
}

// Mock API 데이터 - 실제로는 백엔드에서 받아올 데이터
const mockGaitData: GaitMetric[] = [
  {
    label: "보폭 시간",
    value: "1.12초",
    status: "normal",
    description: "한쪽 발이 땅에 닿은 후, 같은 발이 다시 닿을 때까지 걸리는 시간입니다. 걸음 템포를 확인할 수 있어요.",
    comment: "분석 결과 정상입니다!"
  },
  {
    label: "양발 지지 비율",
    value: "28.4%",
    status: "danger",
    description: "두 발이 동시에 땅에 닿아 있는 시간의 비율이에요. 보행 균형이 불안할수록 높아집니다.",
    comment: "분석 결과 위험입니다!"
  },
  {
    label: "양발 보폭 차이",
    value: "0.06m",
    status: "normal",
    description: "왼발과 오른발의 걸음 길이가 얼마나 다른지를 보여줍니다. 좌우 균형 상태를 파악할 수 있어요.",
    comment: "분석 결과 정상입니다!"
  },
  {
    label: "평균 보행 속도",
    value: "0.9m/s",
    status: "caution",
    description: "단위 시간 동안 이동한 거리를 나타내는 지표입니다. 전체 활동성과 운동 능력을 확인할 수 있어요.",
    comment: "분석 결과 주의입니다!"
  }
];

// Mock 보행 점수 데이터
const mockGaitScoreSummary: GaitScoreSummary = {
  score: 46,
  statusText: "보행 매우 안정적",
  statusIcon: "sad"
};

// 상태별 색상 및 아이콘 반환 함수
const getStatusColor = (status: GaitMetric['status']): string => {
  switch (status) {
    case 'normal':
      return '#0BE62C';
    case 'caution':
      return '#FFC800';
    case 'danger':
      return '#F51A1A';
    default:
      return '#0BE62C';
  }
};

// 공통 컴포넌트들
function Frame1707485583() {
  return (
    <div className="relative shrink-0">
      <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-0 relative">
        <div className="flex flex-col font-['League_Spartan:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2260ff] text-[12.3px] text-left text-nowrap tracking-[-0.41px]">
          <p className="adjustLetterSpacing block leading-[22px] whitespace-pre">
            뒤로가기
          </p>
        </div>
      </div>
    </div>
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
    <div className="absolute left-[17px] top-[7px]">
      <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative">
        <Button />
        <div className="absolute left-3 top-px">
          <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-0 relative">
            <Frame1707485583 />
          </div>
        </div>
      </div>
    </div>
  );
}

// 보행 점수 섹션 - props로 데이터 받도록 수정
function GaitScoreSection({ scoreSummary }: { scoreSummary: GaitScoreSummary }) {
  return (
    <div className="relative w-full px-4 mb-4" data-name="보행 점수 파트">
      <div className="bg-[#ffffff] h-[101px] rounded-[23px] w-full relative">
        <div className="absolute border-[#00278c] border-[1.7px] border-solid inset-0 pointer-events-none rounded-[23px]" />
        
        {/* 보행 점수 텍스트 */}
        <div className="absolute left-[28px] top-[14px] w-[126px]" data-name="보행 점수 파트">
          <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start leading-[0] p-0 relative text-[#00278c] text-left w-[126px]">
            <div className="flex flex-col font-['League_Spartan:Bold',_sans-serif] font-bold h-5 justify-center relative shrink-0 text-[16px] w-full">
              <p className="block leading-[normal]">보행 점수</p>
            </div>
            <div className="flex flex-col font-['Pretendard:Medium',_sans-serif] h-[19px] justify-center not-italic relative shrink-0 text-[24px] w-full">
              <p className="block leading-[normal]">{scoreSummary.score}점</p>
            </div>
            <div className="font-['League_Spartan:Medium',_sans-serif] font-medium h-2.5 relative shrink-0 text-[12px] w-full">
              <p className="block leading-[normal]">{scoreSummary.statusText}</p>
            </div>
          </div>
        </div>

        {/* 보행 점수 차트 */}
        <div className="absolute h-[131px] right-[28px] top-[11px] w-[137px]" data-name="보행 점수 그래프">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 137 131">
            <g id="보행 점수 그래프">
              <path d={svgPaths.p11879100} fill="var(--fill-0, #E9EDF0)" id="Ellipse 17" />
              <path d={svgPaths.p13ba0e00} fill="var(--fill-0, #3A5AFE)" id="Ellipse 18" />
              <g id="Frame 1707485585">
                <ellipse cx="68.5" cy="51" fill="var(--fill-0, #ECEAF8)" id="Ellipse 1" rx="17.5" ry="17" />
                <g id="Frame 1707485617">
                  <ellipse 
                    cx="68.5" 
                    cy="51" 
                    fill={scoreSummary.statusIcon === "happy" ? "var(--fill-0, #0BE62C)" : "var(--fill-0, #DC3235)"} 
                    id="Ellipse 525" 
                    rx="9" 
                    ry="8.5" 
                  />
                  <path d={svgPaths.paf5f780} fill="var(--fill-0, white)" id="Ellipse 528" />
                  <circle cx="71.75" cy="49.75" fill="var(--fill-0, white)" id="Ellipse 529" r="1.25" />
                  <path d={svgPaths.p6082d00} fill="var(--fill-0, white)" id="Ellipse 18_2" />
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

// 탭 버튼 섹션 - 수정된 버전
function TabSection({ activeTab, onTabChange }: { 
  activeTab: 'health' | 'stats';
  onTabChange: (tab: 'health' | 'stats') => void;
}) {
  return (
    <div className="relative w-full px-4 mb-4" data-name="건강 정보 버튼 창">
      <div className="bg-[#bacaf5] rounded-2xl w-full">
        <div className="flex flex-row items-center relative size-full">
          <div className="box-border content-stretch flex flex-row items-center justify-start p-[4px] relative w-full">
            <button
              onClick={() => onTabChange('health')}
              className={`${
                activeTab === 'health' 
                  ? 'bg-[#ffffff] shadow-[2px_2px_4px_0px_rgba(0,0,0,0.35)]' 
                  : 'bg-transparent'
              } relative rounded-xl shrink-0 flex-1 transition-all duration-300 ease-in-out`}
            >
              <div className="flex flex-row items-center justify-center relative size-full">
                <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-0 py-2.5 relative">
                  <div className={`font-['Pretendard:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[15px] text-center text-nowrap tracking-[-0.375px] transition-colors duration-300 ${
                    activeTab === 'health' ? 'text-[#00278c]' : 'text-[#3c4d79]'
                  }`}>
                    <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre font-bold font-bold">
                      건강 정보
                    </p>
                  </div>
                </div>
              </div>
            </button>
            
            <button
              onClick={() => onTabChange('stats')}
              className={`${
                activeTab === 'stats' 
                  ? 'bg-[#ffffff] shadow-[2px_2px_4px_0px_rgba(0,0,0,0.35)]' 
                  : 'bg-transparent'
              } relative rounded-xl shrink-0 flex-1 transition-all duration-300 ease-in-out`}
            >
              <div className="flex flex-row items-center justify-center relative size-full">
                <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-0 py-2.5 relative">
                  <div className={`font-['Pretendard:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[15px] text-center text-nowrap tracking-[-0.375px] transition-colors duration-300 ${
                    activeTab === 'stats' ? 'text-[#00278c]' : 'text-[#3c4d79]'
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
    </div>
  );
}

// 개별 보행 지표 컴포넌트
interface GaitMetricCardProps {
  metric: GaitMetric;
  index: number;
}

function GaitMetricCard({ metric, index }: GaitMetricCardProps) {
  const statusColor = getStatusColor(metric.status);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94] 
      }}
      className="relative rounded-2xl shrink-0 w-full mb-[18px]"
      data-name={`${metric.label} 파트`}
    >
      <div className="absolute border border-[#979797] border-solid inset-0 pointer-events-none rounded-2xl" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[11px] items-start justify-start p-[15px] relative w-full">
          
          {/* 지표 헤더 */}
          <div className="relative shrink-0" data-name={`${metric.label} 토글`}>
            <div className="box-border content-stretch flex flex-row gap-5 items-center justify-start p-0 relative">
              
              {/* 아이콘과 라벨 */}
              <div className="relative shrink-0 w-[162px]">
                <div className="box-border content-stretch flex flex-row gap-[13px] items-center justify-start p-0 relative w-[162px]">
                  <div className="relative shrink-0 size-5">
                    <div className="absolute bottom-[-5%] left-[-5%] right-[-5%] top-[-5%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
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
                  <div className="font-['Mulish:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#000000] text-[18px] text-left text-nowrap">
                    <p className="block leading-[normal] whitespace-pre">{metric.label}</p>
                  </div>
                </div>
              </div>
              
              {/* 값 */}
              <div
                className="font-['Noto_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#000000] text-[18px] text-left w-[54px]"
                style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
              >
                <p className="block leading-[normal]">{metric.value}</p>
              </div>
              
              {/* 상태 표시 */}
              <div className="h-[25.5px] relative shrink-0 w-[26px]" data-name={`${metric.label} 상태`}>
                <div className="absolute bottom-[-23.529%] left-[-7.692%] right-[-23.077%] top-[-7.843%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
                    <g filter="url(#filter0_d_77_114)" id={`${metric.label} 상태`}>
                      <ellipse
                        cx="15"
                        cy="14.75"
                        fill={statusColor}
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

          {/* 지표 설명 */}
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
            <div className="[grid-area:1_/_1] ml-0 mt-0 relative w-[295px]" data-name={`${metric.label} 분석 내용`}>
              <div className="box-border content-stretch flex flex-col gap-1.5 items-start justify-start leading-[0] p-0 relative text-left w-[295px]">
                <div className="font-['Mulish:Medium',_sans-serif] font-medium relative shrink-0 text-[#353535] text-[14.5px] tracking-[-0.58px] w-full">
                  <p className="block leading-[normal]">
                    {metric.description}
                  </p>
                </div>
                <div className="font-['Mulish:SemiBold',_sans-serif] font-semibold relative shrink-0 text-[#000000] text-[16px] w-full">
                  <p className="block leading-[normal]">{metric.comment}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// AI 보행 지표 분석 섹션
function AIGaitAnalysisSection({ gaitData }: { gaitData: GaitMetric[] }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="relative w-full px-4"
      data-name="AI 보행 지표 분석 내용"
    >
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative w-full">
        {gaitData.map((metric, index) => (
          <GaitMetricCard 
            key={metric.label} 
            metric={metric} 
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
}

// 건강정보 탭 콘텐츠
function HealthInfoTabContent({ gaitData }: { gaitData: GaitMetric[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="w-full"
    >
      {/* AI 보행 지표 분석 제목 */}
      <div className="flex justify-center mb-4">
        <div className="font-['League_Spartan:Bold',_sans-serif] font-bold text-[#00278c] text-[18px] text-center">
          <p className="block leading-[normal] whitespace-pre">
            AI 보행 지표 분석
          </p>
        </div>
      </div>
      
      {/* AI 보행 지표 분석 섹션 */}
      <AIGaitAnalysisSection gaitData={gaitData} />
    </motion.div>
  );
}

// 상세통계 탭 콘텐츠
function DetailedStatsTabContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 30 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="w-full px-4"
    >
      <DetailedStatisticsSection />
    </motion.div>
  );
}

// 고정 헤더 컴포넌트
function FixedHeader() {
  return (
    <div className="relative w-full px-4 py-2 bg-[#ffffff] z-10">
      {/* 뒤로가기 버튼 */}
      <div className="absolute left-[17px] top-[7px]">
        <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative">
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
          <div className="absolute left-3 top-px">
            <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-0 relative">
              <div className="relative shrink-0">
                <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-0 relative">
                  <div className="flex flex-col font-['League_Spartan:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2260ff] text-[12.3px] text-left text-nowrap tracking-[-0.41px]">
                    <p className="adjustLetterSpacing block leading-[22px] whitespace-pre">
                      뒤로가기
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 페이지 제목 */}
      <div className="flex justify-center items-center py-4">
        <div
          className="font-['Noto_Sans:SemiBold',_sans-serif] font-semibold text-[#00278c] text-[30px] text-center"
          style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
        >
          <p className="block leading-[normal] whitespace-pre">보행 분석</p>
        </div>
      </div>

      {/* 상단 아이콘들 */}
      <div className="absolute right-4 top-4 flex gap-2">
        <div className="size-[27px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
            <circle cx="13.5" cy="13.5" fill="var(--fill-0, #CAD6FF)" id="Ellipse 8" r="13.5" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-3.5 h-[17px]" fill="none" preserveAspectRatio="none" viewBox="0 0 16 19">
              <path d={svgPaths.p24615580} fill="var(--stroke-0, black)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="size-[27px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
            <circle cx="13.5" cy="13.5" fill="var(--fill-0, #CAD6FF)" id="Ellipse 8" r="13.5" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="size-[5px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
                <circle cx="2.5" cy="2.5" fill="var(--fill-0, #2260FF)" id="Ellipse 9" r="2.5" />
              </svg>
            </div>
            <svg className="size-[17px]" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
              <path d={svgPaths.p3d982000} fill="var(--stroke-0, black)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

// 메인 컨텐츠 래퍼
function GaitInfoContents({ 
  gaitData, 
  scoreSummary 
}: { 
  gaitData: GaitMetric[];
  scoreSummary: GaitScoreSummary;
}) {
  const [activeTab, setActiveTab] = useState<'health' | 'stats'>('health');

  const handleTabChange = (tab: 'health' | 'stats') => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col h-full">
      {/* 고정 헤더 영역 */}
      <div className="flex-shrink-0">
        <FixedHeader />
        
        {/* 보행 점수 섹션 */}
        <GaitScoreSection scoreSummary={scoreSummary} />
        
        {/* 탭 섹션 */}
        <TabSection activeTab={activeTab} onTabChange={handleTabChange} />
      </div>
      
      {/* 스크롤 가능한 콘텐츠 영역 - 탭 아래부터 스크롤 */}
      <div className="flex-1 overflow-y-auto">
        <div className="pb-32">
          <AnimatePresence mode="wait">
            {activeTab === 'health' ? (
              <HealthInfoTabContent key="health" gaitData={gaitData} />
            ) : (
              <DetailedStatsTabContent key="stats" />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

// 상단바 컴포넌트
function StatusBar() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute bg-[rgba(226,234,255,0.66)] h-7 left-0 top-0 w-[360px]" />
      <div className="absolute capitalize flex flex-col font-['League_Spartan:Medium',_sans-serif] font-medium h-3.5 justify-center leading-[0] left-[27px] text-[#000000] text-[13px] text-left top-4 translate-y-[-50%] w-[30px]">
        <p className="block leading-[normal]">16:04</p>
      </div>
      <div className="absolute h-[11px] left-[273px] top-[9px] w-[13px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 11">
          <g id="Vector">
            <path d={svgPaths.pdd38d00} fill="var(--fill-0, black)" />
            <path d={svgPaths.p4dcf300} fill="var(--fill-0, black)" />
            <path d={svgPaths.p12ffd800} fill="var(--fill-0, black)" />
            <path d={svgPaths.p35c50d00} fill="var(--fill-0, black)" />
          </g>
        </svg>
      </div>
      <div className="absolute h-2 left-[291px] top-[11px] w-[15px]" data-name="Vector">
        <div className="absolute bottom-[-12.5%] left-[-6.667%] right-[-6.667%] top-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 10">
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
      <div className="absolute h-[9px] left-[312px] top-[11px] w-[17px]">
        <div className="absolute bottom-[-5.556%] left-[-2.941%] right-[-2.941%] top-[-5.556%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 11">
            <g id="Group 12">
              <path d={svgPaths.pe0ff600} fill="var(--fill-0, black)" id="Vector (Stroke)" />
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
    </div>
  );
}

// 메인 GaitInfo 컴포넌트
export default function GaitInfo() {
  const [gaitData, setGaitData] = useState<GaitMetric[]>([]);
  const [scoreSummary, setScoreSummary] = useState<GaitScoreSummary | null>(null);
  const [loading, setLoading] = useState(true);

  // API 데이터 로딩 시뮬레이션 - 실제로는 useEffect로 백엔드 API 호출
  useEffect(() => {
    const fetchGaitData = async () => {
      try {
        setLoading(true);
        
        // 실제 API 호출 예시:
        // const [gaitResponse, scoreResponse] = await Promise.all([
        //   fetch('/api/gait-metrics'),
        //   fetch('/api/gait-score-summary')
        // ]);
        // const gaitData = await gaitResponse.json();
        // const scoreData = await scoreResponse.json();
        // setGaitData(gaitData);
        // setScoreSummary(scoreData);

        // Mock 데이터 사용 (실제로는 위 API 호출로 대체)
        setTimeout(() => {
          setGaitData(mockGaitData);
          setScoreSummary(mockGaitScoreSummary);
          setLoading(false);
        }, 500);
        
      } catch (error) {
        console.error('보행 데이터 로딩 실패:', error);
        setLoading(false);
      }
    };

    fetchGaitData();
  }, []);

  if (loading) {
    return (
      <div className="bg-[#ffffff] overflow-clip relative rounded-[30px] h-screen flex items-center justify-center">
        <div className="text-[#00278c] font-['League_Spartan:Medium',_sans-serif]">
          보행 데이터 로딩 중...
        </div>
      </div>
    );
  }

  if (!scoreSummary) {
    return (
      <div className="bg-[#ffffff] overflow-clip relative rounded-[30px] h-screen flex items-center justify-center">
        <div className="text-[#00278c] font-['League_Spartan:Medium',_sans-serif]">
          보행 점수 데이터를 불러올 수 없습니다.
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="bg-[#ffffff] relative rounded-[30px] h-screen max-h-screen overflow-hidden"
      data-name="Gait Info"
    >
      {/* 상단바 */}
      <StatusBar />
      
      {/* 메인 콘텐츠 - 상단바 높이만큼 패딩 추가 */}
      <div className="pt-7 h-full overflow-hidden">
        <GaitInfoContents gaitData={gaitData} scoreSummary={scoreSummary} />
      </div>

      {/* 홈 네비게이션 버튼 */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-8">
        <홈버튼 />
      </div>
    </motion.div>
  );
}