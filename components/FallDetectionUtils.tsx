'use client';

// 낙상 감지 유틸리티 함수들
export interface FallDetectionData {
  location: string;
  severity: 'low' | 'medium' | 'high';
  deviceId: string;
  timestamp: string;
}

// 실제 낙상 감지 센서에서 호출할 함수
export const triggerFallDetection = (
  severity: 'low' | 'medium' | 'high' = 'medium',
  location?: string
): FallDetectionData => {
  return {
    location: location || getCurrentLocation(),
    severity,
    deviceId: getDeviceId(),
    timestamp: new Date().toISOString()
  };
};

// 현재 위치 가져오기 (실제로는 GPS API 사용)
const getCurrentLocation = (): string => {
  // 실제 구현에서는 navigator.geolocation 사용
  return "서울시 강남구 테헤란로 123";
};

// 기기 ID 가져오기
const getDeviceId = (): string => {
  // 실제 구현에서는 기기 고유 ID 사용
  return `DEVICE_${Date.now()}`;
};

// 센서 데이터 시뮬레이션
export const simulateSensorData = () => {
  return {
    accelerometer: {
      x: Math.random() * 10 - 5,
      y: Math.random() * 10 - 5,
      z: Math.random() * 10 - 5
    },
    gyroscope: {
      x: Math.random() * 360,
      y: Math.random() * 360,
      z: Math.random() * 360
    },
    timestamp: Date.now()
  };
};

// 낙상 위험도 계산
export const calculateFallRisk = (sensorData: ReturnType<typeof simulateSensorData>): 'low' | 'medium' | 'high' => {
  const { accelerometer } = sensorData;
  const magnitude = Math.sqrt(
    accelerometer.x ** 2 + 
    accelerometer.y ** 2 + 
    accelerometer.z ** 2
  );
  
  if (magnitude > 8) return 'high';
  if (magnitude > 5) return 'medium';
  return 'low';
};

// 랜덤 낙상 이벤트 생성 (테스트용)
export const generateRandomFallEvent = (): FallDetectionData => {
  const severities: ('low' | 'medium' | 'high')[] = ['low', 'medium', 'high'];
  const locations = [
    "서울시 강남구 테헤란로 123",
    "서울시 서초구 반포대로 456",
    "서울시 종로구 세종대로 789",
    "집 안 거실",
    "집 안 침실",
    "집 안 화장실"
  ];
  
  return {
    location: locations[Math.floor(Math.random() * locations.length)],
    severity: severities[Math.floor(Math.random() * severities.length)],
    deviceId: getDeviceId(),
    timestamp: new Date().toISOString()
  };
};

// 실제 프로덕션에서 사용할 낙상 감지 리스너 설정
export const setupFallDetectionListener = (
  onFallDetected: (fallData: FallDetectionData) => void
) => {
  // 실제 구현에서는 센서 이벤트 리스너 설정
  console.log('낙상 감지 센서 리스너 설정됨');
  
  // 예시: 실제 가속도계 이벤트 리스너
  /*
  if ('DeviceMotionEvent' in window) {
    window.addEventListener('devicemotion', (event) => {
      const sensorData = {
        accelerometer: {
          x: event.acceleration?.x || 0,
          y: event.acceleration?.y || 0,
          z: event.acceleration?.z || 0
        },
        gyroscope: {
          x: event.rotationRate?.alpha || 0,
          y: event.rotationRate?.beta || 0,
          z: event.rotationRate?.gamma || 0
        },
        timestamp: Date.now()
      };
      
      const risk = calculateFallRisk(sensorData);
      if (risk === 'high') {
        const fallData = triggerFallDetection(risk);
        onFallDetected(fallData);
      }
    });
  }
  */
  
  // 테스트용 랜덤 이벤트 (개발 환경에서만)
  if (process.env.NODE_ENV === 'development') {
    // 30초마다 랜덤하게 낙상 이벤트 발생 (10% 확률)
    const interval = setInterval(() => {
      if (Math.random() < 0.1) {
        onFallDetected(generateRandomFallEvent());
      }
    }, 30000);
    
    return () => clearInterval(interval);
  }
  
  return () => {};
};