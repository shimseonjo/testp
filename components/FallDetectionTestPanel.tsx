'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { generateRandomFallEvent, triggerFallDetection } from './FallDetectionUtils';

interface FallDetectionTestPanelProps {
  onFallDetected: (fallData: any) => void;
  isVisible: boolean;
  onToggle: () => void;
}

export default function FallDetectionTestPanel({ 
  onFallDetected, 
  isVisible, 
  onToggle 
}: FallDetectionTestPanelProps) {
  const [selectedSeverity, setSelectedSeverity] = useState<'low' | 'medium' | 'high'>('medium');
  const [customLocation, setCustomLocation] = useState('');

  const handleManualTrigger = () => {
    const fallData = triggerFallDetection(
      selectedSeverity,
      customLocation || undefined
    );
    onFallDetected(fallData);
  };

  const handleRandomTrigger = () => {
    const fallData = generateRandomFallEvent();
    onFallDetected(fallData);
  };

  return (
    <>
      {/* 토글 버튼 */}
      <button
        onClick={onToggle}
        className="fixed bottom-4 right-4 bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg transition-colors duration-200 z-40"
        title="낙상 감지 테스트 패널"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v20M2 12h20"/>
        </svg>
      </button>

      {/* 테스트 패널 */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-20 right-4 bg-white rounded-lg shadow-xl border border-gray-200 p-4 w-80 z-50"
          >
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
                낙상 감지 테스트 패널
              </h3>
              
              {/* 심각도 선택 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  심각도 선택
                </label>
                <div className="flex space-x-2">
                  {(['low', 'medium', 'high'] as const).map((severity) => (
                    <button
                      key={severity}
                      onClick={() => setSelectedSeverity(severity)}
                      className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                        selectedSeverity === severity
                          ? 'bg-red-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {severity === 'low' ? '낮음' : severity === 'medium' ? '보통' : '높음'}
                    </button>
                  ))}
                </div>
              </div>

              {/* 위치 입력 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  사용자 지정 위치 (선택사항)
                </label>
                <input
                  type="text"
                  value={customLocation}
                  onChange={(e) => setCustomLocation(e.target.value)}
                  placeholder="예: 집 안 화장실"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>

              {/* 버튼들 */}
              <div className="space-y-2">
                <button
                  onClick={handleManualTrigger}
                  className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md font-medium transition-colors duration-200"
                >
                  수동 낙상 감지 트리거
                </button>
                
                <button
                  onClick={handleRandomTrigger}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md font-medium transition-colors duration-200"
                >
                  랜덤 낙상 이벤트 생성
                </button>
              </div>

              {/* 정보 */}
              <div className="text-xs text-gray-500 bg-gray-50 p-2 rounded">
                <p className="mb-1">• 수동 트리거: 선택한 설정으로 낙상 감지</p>
                <p>• 랜덤 이벤트: 무작위 설정으로 낙상 감지</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}