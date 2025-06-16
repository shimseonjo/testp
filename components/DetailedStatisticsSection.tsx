'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import svgPaths from "../imports/svg-g7ogl1mp3z";

// 인터페이스 정의
interface DiseasePrediction {
  diseaseName: string;
  changePercent: number;
  trendGraphType: "positive" | "negative";
}

interface DetailedReport {
  riskLevel: "low" | "medium" | "high" | "critical";
  summary: string;
}

interface DetailedStatisticsData {
  diseases: DiseasePrediction[];
  report: DetailedReport;
}

// 상태 텍스트 매핑 함수
const getStatusText = (changePercent: number): string => {
  if (changePercent < -10) return "매우 양호";
  if (changePercent < 0) return "상태 호전";
  if (changePercent <= 2) return "관찰 유지";
  if (changePercent <= 5) return "주의 필요";
  if (changePercent <= 10) return "위험 상태";
  return "중대 위험";
};

// 위험도별 스타일 매핑
const getRiskLevelStyle = (riskLevel: DetailedReport['riskLevel']): string => {
  switch (riskLevel) {
    case 'low': return 'border-green-500';
    case 'medium': return 'border-yellow-500';
    case 'high': return 'border-orange-500';
    case 'critical': return 'border-red-500';
    default: return 'border-gray-300';
  }
};

const getRiskLevelTitle = (riskLevel: DetailedReport['riskLevel']): string => {
  switch (riskLevel) {
    case 'low': return '낮은 위험 단계';
    case 'medium': return '중등도 위험 단계';
    case 'high': return '높은 위험 단계';
    case 'critical': return '심각 위험 단계';
    default: return '위험 단계';
  }
};

// 질병 예측 분석 제목 컴포넌트
function DiseasePredictionTitle() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] flex flex-col font-['League_Spartan:Bold',_sans-serif] font-bold justify-center ml-[67.5px] mt-[8.5px] relative text-[#00278c] text-[18px] text-center text-nowrap translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[normal] whitespace-pre">질병 예측 분석</p>
      </div>
      <div className="[grid-area:1_/_1] h-px ml-0 mt-0 relative w-[325px]">
        <div className="absolute bottom-1/2 left-0 right-0 top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 325 1">
            <path
              clipRule="evenodd"
              d="M0 0H325V0.5H0V0Z"
              fill="var(--fill-0, #C7C8CA)"
              fillRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

// 질병 예측 카드 컴포넌트
function DiseasePredictionCard({ disease, index }: { disease: DiseasePrediction; index: number }) {
  const statusText = getStatusText(disease.changePercent);
  const isPositive = disease.changePercent < 0;
  const graphColor = disease.trendGraphType === "positive" ? "#5DB48A" : "#EB7487";
  const arrowColor = isPositive ? "#0BE62C" : "#F51A1A";
  const percentageColor = isPositive ? "#0BE62C" : "#F51A1A";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative shrink-0 w-full"
    >
      <div className="absolute border-[0px_0px_1px] border-[rgba(151,151,151,0.5)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end relative size-full">
        <div className="box-border content-stretch flex flex-row gap-12 items-center justify-end p-[10px] relative w-full">
          <div className="relative shrink-0 w-[290px]">
            <div className="box-border content-stretch flex flex-row gap-[26px] items-center justify-start p-0 relative w-[290px]">
              {/* 질병명과 상태 */}
              <div className="relative shrink-0 w-[73.433px]">
                <div className="box-border content-stretch flex flex-col gap-px items-center justify-start leading-[0] not-italic p-0 relative text-[#2e2e30] text-left w-[73.433px]">
                  <div className="font-['Inter:Bold',_sans-serif] font-bold h-[21.676px] relative shrink-0 text-[16px] w-full">
                    <p className="block leading-[normal]">{disease.diseaseName}</p>
                  </div>
                  <div className="font-['Inter:Medium',_sans-serif] font-medium h-[17px] relative shrink-0 text-[12px] w-full">
                    <p className="block leading-[normal]">{statusText}</p>
                  </div>
                </div>
              </div>

              {/* 그래프 */}
              <div className="h-[18.1px] relative shrink-0 w-[56.35px]">
                <div className="absolute bottom-0 left-[-0.887%] right-[-0.887%] top-[-2.762%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58 20">
                    <g>
                      <path
                        d={disease.trendGraphType === "positive" ? svgPaths.p348b3400 : svgPaths.p34adcb00}
                        fill={`url(#paint0_linear_${index})`}
                      />
                      <path
                        d={disease.trendGraphType === "positive" ? svgPaths.p1a5cd280 : svgPaths.p135eda80}
                        stroke={graphColor}
                        strokeLinecap="round"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        gradientUnits="userSpaceOnUse"
                        id={`paint0_linear_${index}`}
                        x1="26.9455"
                        x2="26.5401"
                        y1={disease.trendGraphType === "positive" ? "-1.16975" : "1.32043"}
                        y2={disease.trendGraphType === "positive" ? "19.1002" : "21.5903"}
                      >
                        <stop stopColor={disease.trendGraphType === "positive" ? "#49A677" : "#EB94A2"} />
                        <stop offset="1" stopColor={disease.trendGraphType === "positive" ? "#49A677" : "#EB94A2"} stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* 퍼센티지 */}
              <div className="font-['Inter:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#2e2e30] text-[14px] text-left w-[51px]">
                <p className="block leading-[normal]" style={{ color: percentageColor }}>
                  {disease.changePercent > 0 ? '+' : ''}{disease.changePercent.toFixed(2)}%
                </p>
              </div>

              {/* 화살표 */}
              <div className="relative shrink-0 size-6">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <g clipPath={`url(#clip0_arrow_${index})`}>
                    <path
                      d="M12 0V19"
                      stroke={arrowColor}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                    <path
                      d="M19 12L12 19L5 12"
                      stroke={arrowColor}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      transform={isPositive ? "rotate(180 12 12)" : ""}
                    />
                  </g>
                  <defs>
                    <clipPath id={`clip0_arrow_${index}`}>
                      <rect fill="white" height="24" width="24" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// 질병 예측 분석 섹션
function DiseasePredictionSection({ diseases }: { diseases: DiseasePrediction[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative shrink-0 w-full"
    >
      <div className="box-border content-stretch flex flex-col gap-[7px] items-center justify-start p-0 relative w-full">
        <DiseasePredictionTitle />
        <div className="relative shrink-0 w-[310px]">
          <div className="box-border content-stretch flex flex-col gap-1.5 items-start justify-start p-0 relative w-[310px]">
            {diseases.map((disease, index) => (
              <DiseasePredictionCard key={disease.diseaseName} disease={disease} index={index} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// 상세 분석 리포트 제목
function DetailedReportTitle() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] flex flex-col font-['League_Spartan:Bold',_sans-serif] font-bold justify-center ml-[67px] mt-[8.5px] relative text-[#00278c] text-[18px] text-center text-nowrap translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[normal] whitespace-pre">상세 분석 리포트</p>
      </div>
      <div className="[grid-area:1_/_1] h-px ml-0 mt-0 relative w-[325px]">
        <div className="absolute bottom-1/2 left-0 right-0 top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 325 1">
            <path
              clipRule="evenodd"
              d="M0 0H325V0.5H0V0Z"
              fill="var(--fill-0, #C7C8CA)"
              fillRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

// 상세 분석 리포트 섹션
function DetailedReportSection({ report }: { report: DetailedReport }) {
  const riskLevelStyle = getRiskLevelStyle(report.riskLevel);
  const riskLevelTitle = getRiskLevelTitle(report.riskLevel);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="relative shrink-0 w-full"
    >
      <div className="box-border content-stretch flex flex-col gap-[13px] items-end justify-start p-0 relative w-full">
        <DetailedReportTitle />
        <div className={`bg-gradient-to-b from-[#ebf0ff] from-[32.692%] relative rounded-[23px] shadow-[2px_2px_3px_0px_rgba(48,48,48,0.07)] shrink-0 to-[#cad6ff] w-full border-2 ${riskLevelStyle}`}>
          <div className="relative size-full">
            <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start leading-[0] pb-3.5 pt-[15px] px-[17px] relative text-[#00278c] text-[16px] w-full">
              <div className="flex flex-col font-['League_Spartan:Bold',_sans-serif] font-bold justify-center relative shrink-0 text-center text-nowrap">
                <p className="block leading-[normal] whitespace-pre">{riskLevelTitle}</p>
              </div>
              <div
                className="font-['League_Spartan:Medium',_sans-serif] font-medium leading-[1.3] min-w-full relative shrink-0 text-left"
                style={{ width: "min-content" }}
              >
                <p className="block mb-0">{report.summary}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// 메인 상세통계 섹션 컴포넌트
export default function DetailedStatisticsSection() {
  const [data, setData] = useState<DetailedStatisticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDetailedStatistics = async () => {
      try {
        setLoading(true);
        setError(null);

        // 실제 API 호출 예시 (현재는 주석 처리)
        // const response = await fetch('/api/gait-analysis/detail');
        // const data = await response.json();
        // setData(data);

        // Mock 데이터 사용
        setTimeout(() => {
          const mockData: DetailedStatisticsData = {
            diseases: [
              {
                diseaseName: "파킨슨병",
                changePercent: -0.55,
                trendGraphType: "positive"
              },
              {
                diseaseName: "뇌졸중",  
                changePercent: 6.00,
                trendGraphType: "negative"
              }
            ],
            report: {
              riskLevel: "medium",
              summary: "보행 안정성이 낮은 상태이며 낙상 주의가 필요합니다. 최근 속도 저하와 균형 흔들림이 관찰되었습니다. 전문가 상담 또는 보행 교정 프로그램 참여를 추천드립니다."
            }
          };
          setData(mockData);
          setLoading(false);
        }, 800);
        
      } catch (err) {
        console.error('상세 통계 데이터 로딩 실패:', err);
        setError('데이터를 불러오는데 실패했습니다.');
        setLoading(false);
      }
    };

    fetchDetailedStatistics();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-[#00278c] font-['League_Spartan:Medium',_sans-serif]">
          상세 통계 로딩 중...
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-red-500 font-['League_Spartan:Medium',_sans-serif]">
          {error || '데이터를 불러올 수 없습니다.'}
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative size-full"
    >
      <div className="box-border content-stretch flex flex-col gap-7 items-start justify-start p-0 relative size-full">
        <DiseasePredictionSection diseases={data.diseases} />
        <DetailedReportSection report={data.report} />
      </div>
    </motion.div>
  );
}