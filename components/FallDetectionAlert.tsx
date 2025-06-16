'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import svgPaths from "../imports/svg-hkpvf1vs7b";

// 인터페이스 정의
interface FallDetectionData {
  location: string;
  severity: 'low' | 'medium' | 'high';
  deviceId: string;
  timestamp: string;
}

interface EmergencyContact {
  phoneNumber: string;
  name: string;
}

interface FallDetectionAlertProps {
  isVisible: boolean;
  onClose: () => void;
  fallData?: FallDetectionData;
  userToken?: string;
  userId?: string;
}

// 백엔드 연동 함수들
const sendFallDetectionData = async (fallData: FallDetectionData, userToken?: string, userId?: string) => {
  try {
    const response = await fetch('/api/fall-detection', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userToken || 'demo-token'}`
      },
      body: JSON.stringify({
        userId: userId || 'demo-user',
        timestamp: new Date().toISOString(),
        location: fallData.location || 'Unknown',
        severity: fallData.severity || 'medium',
        deviceId: fallData.deviceId || 'demo-device'
      })
    });
    
    if (response.ok) {
      const result = await response.json();
      console.log('낙상 데이터 전송 완료:', result);
    }
  } catch (error) {
    console.error('낙상 데이터 전송 실패:', error);
  }
};

const getEmergencyContact = async (userToken?: string, userId?: string): Promise<string> => {
  try {
    const response = await fetch(`/api/users/${userId || 'demo-user'}/emergency-contact`, {
      headers: {
        'Authorization': `Bearer ${userToken || 'demo-token'}`
      }
    });
    
    if (response.ok) {
      const contactInfo = await response.json();
      return contactInfo.phoneNumber;
    }
  } catch (error) {
    console.error('긴급 연락처 조회 실패:', error);
  }
  return "01012345678"; // 기본값
};

const saveCallLog = async (phoneNumber: string, status: 'initiated' | 'completed' | 'cancelled', userToken?: string, userId?: string) => {
  try {
    await fetch('/api/emergency-calls', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userToken || 'demo-token'}`
      },
      body: JSON.stringify({
        userId: userId || 'demo-user',
        phoneNumber: phoneNumber,
        callTime: new Date().toISOString(),
        status: status,
        reason: 'fall_detection'
      })
    });
  } catch (error) {
    console.error('호출 로그 저장 실패:', error);
  }
};

// 경고 아이콘 컴포넌트
function WarningIcon() {
  return (
    <div className="h-[39px] relative shrink-0 w-[47px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47 39">
        <g id="emojione-v1:warning">
          <path
            d={svgPaths.p49d1c00}
            fill="var(--fill-0, #FFDD15)"
          />
          <path
            d={svgPaths.p291c8700}
            fill="var(--fill-0, #1F2E35)"
          />
        </g>
      </svg>
    </div>
  );
}

// 카운트다운 컴포넌트
function CountdownDisplay({ countdown }: { countdown: number }) {
  return (
    <motion.div
      key={countdown}
      initial={{ scale: 1.2, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="bg-[#000000] relative rounded-[50px] shrink-0"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-[15px] py-2.5 relative">
          <div className="font-['League_Spartan:Bold',_sans-serif] font-bold h-[23px] leading-[0] relative shrink-0 text-[#ffffff] text-[32px] text-center w-[37px]">
            <p className="block leading-[normal]">{countdown.toString().padStart(2, '0')}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// 연결취소 버튼 컴포넌트
function CancelButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="h-[43px] relative rounded-[50px] shrink-0 hover:bg-gray-100 transition-colors duration-200"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-[43px] items-center justify-center px-[15px] py-2.5 relative">
          <div className="font-['Pretendard:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[23px] text-center text-nowrap">
            <p className="block leading-[normal] whitespace-pre">연결취소</p>
          </div>
        </div>
      </div>
      <div className="absolute border-2 border-[#000000] border-solid inset-0 pointer-events-none rounded-[50px]" />
    </button>
  );
}

// 메인 FallDetectionAlert 컴포넌트
export default function FallDetectionAlert({ 
  isVisible, 
  onClose, 
  fallData,
  userToken,
  userId 
}: FallDetectionAlertProps) {
  const [countdown, setCountdown] = useState(10);
  const [isActive, setIsActive] = useState(false);
  const [emergencyPhone, setEmergencyPhone] = useState<string>("01012345678");

  // 낙상 감지 트리거
  useEffect(() => {
    if (isVisible && !isActive) {
      // 1. 백엔드에 낙상 감지 데이터 전송
      if (fallData) {
        sendFallDetectionData(fallData, userToken, userId);
      }
      
      // 2. UI 알림 시작
      setCountdown(10);
      setIsActive(true);
      
      // 3. 긴급 연락처 정보 미리 조회
      getEmergencyContact(userToken, userId).then(phoneNumber => {
        setEmergencyPhone(phoneNumber);
      });
    }
  }, [isVisible, fallData, userToken, userId, isActive]);

  // 카운트다운 로직
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (isActive && countdown > 0 && isVisible) {
      interval = setInterval(() => {
        setCountdown(prevCount => prevCount - 1);
      }, 1000);
    } else if (countdown === 0 && isVisible) {
      // 자동 전화 연결
      handleEmergencyCall();
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, countdown, isVisible]);

  // 자동 전화 연결
  const handleEmergencyCall = async () => {
    try {
      const phoneNumber = emergencyPhone;
      
      // 1. 호출 로그 저장 (호출 시작)
      await saveCallLog(phoneNumber, 'initiated', userToken, userId);
      
      // 2. 전화 앱 실행
      window.location.href = `tel:${phoneNumber}`;
      
      // 3. UI 정리
      setIsActive(false);
      onClose();
      
      // 4. 호출 완료 로그 저장
      setTimeout(async () => {
        await saveCallLog(phoneNumber, 'completed', userToken, userId);
      }, 2000);
      
    } catch (error) {
      console.error('전화 연결 실패:', error);
    }
  };

  // 연결 취소
  const handleCancelCall = async () => {
    // 1. 카운트다운 중단
    setIsActive(false);
    
    // 2. 취소 로그 저장
    await saveCallLog(emergencyPhone, 'cancelled', userToken, userId);
    
    // 3. UI 닫기
    onClose();
    
    // 4. 카운트다운 초기화
    setCountdown(10);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ 
              duration: 0.4, 
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "spring",
              bounce: 0.1
            }}
            className="relative"
          >
            {/* Alert 컨테이너 */}
            <div className="bg-[#ffffff] overflow-clip relative rounded-[20px] w-[320px] h-auto">
              {/* 빨간 배경과 테두리 */}
              <div className="absolute bg-[#ff5353] left-0 rounded-[20px] top-0 w-full h-full">
                <div className="absolute border-[#ff0000] border-[5px] border-solid inset-0 pointer-events-none rounded-[20px]" />
              </div>
              
              {/* 내용 */}
              <div className="relative z-10 p-8">
                <div className="flex flex-col gap-3.5 items-center">
                  {/* 헤더 - 아이콘과 제목 */}
                  <div className="w-full">
                    <div className="flex flex-col gap-[13px] items-start">
                      {/* 아이콘과 제목 */}
                      <div className="w-full flex flex-row gap-[5px] items-center justify-start">
                        <WarningIcon />
                        <div className="flex-1">
                          <div className="flex flex-row items-center justify-center">
                            <div className="font-['League_Spartan:Bold',_sans-serif] font-bold text-[#000000] text-[32px] text-center">
                              <p className="block leading-[normal] whitespace-pre">낙상 감지</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* 설명 텍스트 */}
                      <div className="w-full">
                        <div className="font-['Pretendard:Medium',_sans-serif] text-[#000000] text-[16px] text-center tracking-[-0.32px]">
                          <p className="block mb-0">낙상이 감지되었습니다.</p>
                          <p className="block">자동으로 긴급번호로 연결합니다.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* 카운트다운과 버튼 */}
                  <div className="w-full">
                    <div className="flex flex-row gap-[13px] items-center justify-center">
                      <CountdownDisplay countdown={countdown} />
                      <CancelButton onClick={handleCancelCall} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}