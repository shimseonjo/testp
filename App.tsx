"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Frame1707485622 from "./imports/Frame1707485622";
import AnimatedLogInRegister from "./components/AnimatedLogInRegister";
import Home from "./imports/Home";
import HealthInfo from "./imports/HealthInfo";
import TestMainScreen from "./imports/TestMainScreen";
import FallRiskTest2 from "./imports/FallRiskTest2";
import TestProgressScreen from "./imports/TestScreen";
import TestResultScreen from "./imports/TestResult";
import GaitInfoScreen from "./imports/GaitInfo";
import FallDetectionAlert from "./components/FallDetectionAlert";
import FallDetectionTestPanel from "./components/FallDetectionTestPanel";
import TabBar from "./components/TabBar";

// 낙상 감지 데이터 타입
interface FallDetectionData {
  location: string;
  severity: 'low' | 'medium' | 'high';
  deviceId: string;
  timestamp: string;
}

// Modified SplashScreen component without WALKer HOLIC animation
function SplashScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="absolute bg-[#2260ff] left-0 rounded-[30px] top-0 w-[360px] h-[800px]"
      data-name="splash Screen"
    >
      <div className="flex flex-col items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-64 items-center justify-start pb-[102px] pt-[334px] px-[37px] relative w-[360px]">
          {/* Main content */}
          <div className="relative shrink-0 w-full">
            <div className="box-border capitalize content-stretch flex flex-col gap-[11px] items-center justify-start leading-[0] p-0 relative text-[#ffffff] w-full">
              <div className="[text-shadow:rgba(21,33,167,0.25)_0px_4px_4px] flex flex-col font-['Lilita_One:Regular',_sans-serif] h-[55px] justify-center not-italic relative shrink-0 text-[55px] text-left w-full">
                <p className="block leading-[normal] [-webkit-text-stroke:1px_#00278C]">
                  bODYFENCE
                </p>
              </div>
              <div className="flex flex-col font-['League_Spartan:Thin',_sans-serif] font-thin h-[34px] justify-center relative shrink-0 text-[25px] text-center w-[215px]">
                <p className="block leading-[normal]">
                  Walk Safe, Live Smart
                </p>
              </div>
            </div>
          </div>

          {/* Static WALKer HOLIC text without animation */}
          <div className="capitalize flex flex-col font-['League_Spartan:SemiBold',_sans-serif] font-semibold h-2 justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[15px] text-center w-[142px]">
            <p className="block leading-[normal]">
              WALKer HOLIC
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Modified LoginScreen component with entrance animation
function AnimatedLoginScreen({
  onDemoClick,
}: {
  onDemoClick: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 1,
        delay: 0.5,
        ease: "easeInOut",
      }}
      className="w-[360px] h-[800px]"
    >
      <AnimatedLogInRegister onDemoClick={onDemoClick} />
    </motion.div>
  );
}

// Home Screen component with test mode, health status, and gait analysis click handlers
function HomeScreen({
  onTestClick,
  onHealthClick,
  onGaitClick,
  onFallTestClick,
  onTabChange,
}: {
  onTestClick: () => void;
  onHealthClick: () => void;
  onGaitClick: () => void;
  onFallTestClick: () => void;
  onTabChange: (tab: 'home' | 'chat' | 'profile' | 'calendar') => void;
}) {
  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;

    // Check if the clicked element is within specific card areas
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Test mode card coordinates (approximate)
    if (x >= 31 && x <= 329 && y >= 281 && y <= 373) {
      onTestClick();
      return;
    }

    // Health status card coordinates (approximate) - left card in the middle row
    if (x >= 31 && x <= 171 && y >= 389 && y <= 523) {
      onHealthClick();
      return;
    }

    // Gait analysis card coordinates (approximate) - right card in the middle row
    if (x >= 189 && x <= 329 && y >= 389 && y <= 523) {
      onGaitClick();
      return;
    }

    // Emergency contact button (낙상 테스트용)
    if (x >= 35 && x <= 333 && y >= 690 && y <= 730) {
      onFallTestClick();
      return;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="w-[360px] h-[800px] cursor-pointer relative"
      onClick={handleClick}
    >
      <Home />
      <TabBar currentTab="home" onTabChange={onTabChange} />
    </motion.div>
  );
}

// Health Screen component - 단순화된 버전
function HealthScreenWrapper({
  onBackClick,
  onTabChange,
}: {
  onBackClick: () => void;
  onTabChange: (tab: 'home' | 'chat' | 'profile' | 'calendar') => void;
}) {
  return (
    <motion.div
      initial={{ x: 360, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 360, opacity: 0 }}
      transition={{
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="w-[360px] h-[800px] relative"
    >
      <HealthInfo onBackClick={onBackClick} />
      <TabBar currentTab="profile" onTabChange={onTabChange} />
    </motion.div>
  );
}

// Gait Info Screen component with slide-in animation
function GaitInfoWrapper({
  onBackClick,
  onTabChange,
}: {
  onBackClick: () => void;
  onTabChange: (tab: 'home' | 'chat' | 'profile' | 'calendar') => void;
}) {
  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;

    // Check if the back button area was clicked
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Back button area coordinates
    if (x >= 22 && x <= 120 && y >= 48 && y <= 82) {
      onBackClick();
    }
  };

  return (
    <motion.div
      initial={{ x: 360, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 360, opacity: 0 }}
      transition={{
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="w-[360px] h-[800px] cursor-pointer"
      onClick={handleClick}
    >
      <GaitInfoScreen />
      <TabBar currentTab="calendar" onTabChange={onTabChange} />
    </motion.div>
  );
}

// Test Result Screen component
function TestResultWrapper({
  onBackClick,
  onTabChange,
}: {
  onBackClick: () => void;
  onTabChange: (tab: 'home' | 'chat' | 'profile' | 'calendar') => void;
}) {
  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;

    // Check if the back button area was clicked
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Back button area coordinates
    if (x >= 22 && x <= 120 && y >= 48 && y <= 82) {
      onBackClick();
    }
  };

  return (
    <motion.div
      initial={{ x: 360, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 360, opacity: 0 }}
      transition={{
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="w-[360px] h-[800px] cursor-pointer"
      onClick={handleClick}
    >
      <TestResultScreen />
      <TabBar currentTab="chat" onTabChange={onTabChange} />
    </motion.div>
  );
}

// Test Screen component with slide-in animation, Fall Risk Test 2 modal, and actual test screen
function TestScreenWrapper({
  onBackClick,
  onResultClick,
  onTabChange,
}: {
  onBackClick: () => void;
  onResultClick: () => void;
  onTabChange: (tab: 'home' | 'chat' | 'profile' | 'calendar') => void;
}) {
  const [showFallRiskTest2, setShowFallRiskTest2] =
    useState(false);
  const [showActualTestScreen, setShowActualTestScreen] =
    useState(false);

  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;

    // Check if the back button area was clicked (updated coordinates for 3px upward movement)
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Updated back button area coordinates to include text (moved up by 3px)
    if (x >= 22 && x <= 120 && y >= 48 && y <= 82) {
      onBackClick();
    }
  };

  const handleFallRiskTest2Click = () => {
    setShowFallRiskTest2(true);
  };

  const handleCloseFallRiskTest2 = () => {
    setShowFallRiskTest2(false);
  };

  const handleStartTest = () => {
    console.log(
      "Start test clicked - transitioning to test screen",
    );
    setShowFallRiskTest2(false);
    setShowActualTestScreen(true);
  };

  const handleBackFromTestScreen = () => {
    setShowActualTestScreen(false);
  };

  const handleCompleteTest = () => {
    console.log("Test completed - transitioning to results");
    onResultClick();
  };

  return (
    <motion.div
      initial={{ x: 360, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 360, opacity: 0 }}
      transition={{
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="w-[360px] h-[800px] relative"
    >
      {/* Main Test Screen */}
      {!showActualTestScreen && (
        <div
          className="cursor-pointer w-full h-full"
          onClick={handleClick}
        >
          <TestMainScreen
            onFallRiskTest2Click={handleFallRiskTest2Click}
          />
        </div>
      )}

      {/* Actual Test Progress Screen */}
      <AnimatePresence>
        {showActualTestScreen && (
          <motion.div
            initial={{ x: 360, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 360, opacity: 0 }}
            transition={{
              duration: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="absolute inset-0 z-40"
          >
            <TestProgressScreen
              onCompleteClick={handleCompleteTest}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fall Risk Test 2 Modal Overlay */}
      <AnimatePresence>
        {showFallRiskTest2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={handleCloseFallRiskTest2}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="w-[358px] h-[662px] relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={handleCloseFallRiskTest2}
                className="absolute top-2 right-2 z-10 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-colors duration-200"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="text-gray-600"
                >
                  <path
                    d="M12 4L4 12M4 4l8 8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <FallRiskTest2 onStartClick={handleStartTest} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* TabBar for Test Screen */}
      {!showActualTestScreen && !showFallRiskTest2 && (
        <TabBar currentTab="chat" onTabChange={onTabChange} />
      )}
    </motion.div>
  );
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<
    | "splash"
    | "login"
    | "home"
    | "test"
    | "health"
    | "gait"
    | "result"
  >("splash");

  // 낙상 감지 상태 관리
  const [showFallAlert, setShowFallAlert] = useState(false);
  const [fallDetectionData, setFallDetectionData] = useState<FallDetectionData | undefined>();

  // 테스트 패널 상태
  const [showTestPanel, setShowTestPanel] = useState(false);

  // 사용자 정보 (실제로는 로그인 시 설정)
  const [userInfo] = useState({
    id: 'demo-user-001',
    token: 'demo-token-12345'
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentScreen("login");
    }, 2000); // 2초 후에 스플래시 스크린 숨김

    return () => clearTimeout(timer);
  }, []);

  const handleDemoClick = () => {
    setCurrentScreen("home");
  };

  const handleTestClick = () => {
    setCurrentScreen("test");
  };

  const handleHealthClick = () => {
    setCurrentScreen("health");
  };

  const handleGaitClick = () => {
    setCurrentScreen("gait");
  };

  const handleResultClick = () => {
    setCurrentScreen("result");
  };

  const handleBackToHome = () => {
    setCurrentScreen("home");
  };

  const handleBackToTest = () => {
    setCurrentScreen("test");
  };

  // TabBar 탭 변경 핸들러
  const handleTabChange = (tab: 'home' | 'chat' | 'profile' | 'calendar') => {
    switch (tab) {
      case 'home':
        setCurrentScreen('home');
        break;
      case 'chat':
        setCurrentScreen('test');
        break;
      case 'profile':
        setCurrentScreen('health');
        break;
      case 'calendar':
        setCurrentScreen('gait');
        break;
    }
  };

  // 낙상 감지 테스트 트리거 (개발용)
  const handleFallTestClick = () => {
    const mockFallData: FallDetectionData = {
      location: "서울시 강남구 테헤란로 123",
      severity: "high",
      deviceId: "DEVICE_001",
      timestamp: new Date().toISOString()
    };
    
    setFallDetectionData(mockFallData);
    setShowFallAlert(true);
  };

  // 테스트 패널에서 낙상 감지 트리거
  const handleFallDetectedFromPanel = (fallData: FallDetectionData) => {
    setFallDetectionData(fallData);
    setShowFallAlert(true);
    setShowTestPanel(false); // 패널 닫기
  };

  // 낙상 알림 닫기
  const handleCloseFallAlert = () => {
    setShowFallAlert(false);
    setFallDetectionData(undefined);
  };

  // 테스트 패널 토글
  const handleToggleTestPanel = () => {
    setShowTestPanel(!showTestPanel);
  };

  return (
    <div className="size-full flex items-center justify-center bg-gray-100">
      <div className="relative w-[360px] h-[800px] bg-white rounded-[30px] overflow-hidden shadow-2xl">
        <AnimatePresence mode="wait">
          {currentScreen === "splash" && (
            <motion.div key="splash">
              <SplashScreen />
            </motion.div>
          )}
          {currentScreen === "login" && (
            <motion.div key="login">
              <AnimatedLoginScreen
                onDemoClick={handleDemoClick}
              />
            </motion.div>
          )}
          {currentScreen === "home" && (
            <motion.div key="home">
              <HomeScreen
                onTestClick={handleTestClick}
                onHealthClick={handleHealthClick}
                onGaitClick={handleGaitClick}
                onFallTestClick={handleFallTestClick}
                onTabChange={handleTabChange}
              />
            </motion.div>
          )}
          {currentScreen === "test" && (
            <motion.div key="test">
              <TestScreenWrapper
                onBackClick={handleBackToHome}
                onResultClick={handleResultClick}
                onTabChange={handleTabChange}
              />
            </motion.div>
          )}
          {currentScreen === "health" && (
            <motion.div key="health">
              <HealthScreenWrapper
                onBackClick={handleBackToHome}
                onTabChange={handleTabChange}
              />
            </motion.div>
          )}
          {currentScreen === "gait" && (
            <motion.div key="gait">
              <GaitInfoWrapper 
                onBackClick={handleBackToHome} 
                onTabChange={handleTabChange}
              />
            </motion.div>
          )}
          {currentScreen === "result" && (
            <motion.div key="result">
              <TestResultWrapper
                onBackClick={handleBackToTest}
                onTabChange={handleTabChange}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* 낙상 감지 Alert - 최상위 레이어 */}
        <FallDetectionAlert
          isVisible={showFallAlert}
          onClose={handleCloseFallAlert}
          fallData={fallDetectionData}
          userToken={userInfo.token}
          userId={userInfo.id}
        />

        {/* 낙상 감지 테스트 패널 - 개발용 */}
        {(currentScreen === "home" || process.env.NODE_ENV === 'development') && (
          <FallDetectionTestPanel
            onFallDetected={handleFallDetectedFromPanel}
            isVisible={showTestPanel}
            onToggle={handleToggleTestPanel}
          />
        )}
      </div>
    </div>
  );
}