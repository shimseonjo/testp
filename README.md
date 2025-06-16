# Korean Health Monitoring App (bODYFENCE)

> Walk Safe, Live Smart - 낙상 감지 및 건강 모니터링 앱

## 🚀 빠른 시작

### 1. 패키지 설치

```bash
# 자동 설치 스크립트 사용 (권장)
node install-packages.js

# 또는 수동 설치
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:3000`을 열어서 앱을 확인하세요.

## 📦 기술 스택

### Core
- **React 18** - UI 라이브러리
- **TypeScript** - 타입 안전성
- **Vite** - 빌드 도구

### Styling
- **TailwindCSS v4** - 유틸리티 CSS 프레임워크
- **shadcn/ui** - 재사용 가능한 UI 컴포넌트
- **Radix UI** - 접근성 중심 프리미티브

### Animation & Interaction
- **Framer Motion** - 애니메이션 라이브러리
- **Lucide React** - 아이콘 라이브러리

### Forms & Validation
- **React Hook Form** - 폼 관리
- **Zod** - 스키마 검증

### Charts & Visualization
- **Recharts** - 차트 라이브러리

### Notifications
- **Sonner** - 토스트 알림

## 🏗️ 프로젝트 구조

```
├── App.tsx                 # 메인 애플리케이션
├── components/             # 재사용 컴포넌트
│   ├── ui/                # shadcn/ui 컴포넌트
│   └── figma/             # Figma 전용 컴포넌트
├── imports/               # Figma에서 가져온 컴포넌트
├── styles/                # 글로벌 스타일
└── package.json           # 프로젝트 설정
```

## 🔧 사용 가능한 스크립트

```bash
npm run dev         # 개발 서버 시작
npm run build       # 프로덕션 빌드
npm run preview     # 빌드 결과 미리보기
npm run lint        # ESLint 실행
npm run lint:fix    # ESLint 자동 수정
npm run type-check  # TypeScript 타입 체크
```

## 🌟 주요 기능

### 📱 메인 기능
- **스플래시 화면** - 앱 시작 화면
- **로그인/회원가입** - 사용자 인증
- **홈 대시보드** - 건강 상태 요약
- **테스트 모드** - 낙상 위험 검사
- **건강 상태** - 상세 건강 정보
- **보행 분석** - AI 기반 보행 패턴 분석

### 🚨 특별 기능
- **낙상 감지 알림** - 실시간 낙상 감지
- **긴급 연락** - 위급 상황 대응
- **테스트 패널** - 개발용 낙상 시뮬레이션

### 📊 데이터 시각화
- 건강 지표 차트
- 보행 패턴 분석
- 실시간 모니터링 대시보드

## 🎨 디자인 시스템

이 프로젝트는 **Figma Make**를 통해 디자인되었으며, 다음과 같은 디자인 원칙을 따릅니다:

- **모바일 우선** - 360x800 모바일 화면 최적화
- **한국어 지원** - 완전한 한국어 UI/UX
- **접근성** - Radix UI 기반 접근 가능한 컴포넌트
- **반응형** - 다양한 화면 크기 지원

## 🔒 환경 변수

```env
# Korean Health Monitoring App (bODYFENCE) Environment Variables

# 앱 환경 설정
NODE_ENV=development
VITE_APP_NAME=bODYFENCE
VITE_APP_VERSION=1.0.0

# API 설정
VITE_API_URL=http://localhost:8080/api
VITE_API_VERSION=v1

# 낙상 감지 서비스 설정
VITE_FALL_DETECTION_ENDPOINT=/fall-detection
VITE_EMERGENCY_CONTACT_ENDPOINT=/emergency-contact
VITE_USER_LOCATION_ENDPOINT=/user-location

# 알림 서비스 설정 (Firebase 등)
VITE_FIREBASE_API_KEY=your_firebase_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=your_app_id

# 개발 환경 설정
VITE_DEV_MODE=true
VITE_SHOW_TEST_PANEL=true
VITE_MOCK_API_RESPONSES=true

# 보안 설정
VITE_ENCRYPTION_KEY=your_encryption_key_here
VITE_JWT_SECRET=your_jwt_secret_here

# 분석 및 로깅
VITE_ANALYTICS_ENABLED=false
VITE_GOOGLE_ANALYTICS_ID=GA-XXXX-X
VITE_SENTRY_DSN=your_sentry_dsn_here

# 위치 서비스
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
VITE_LOCATION_SERVICE_ENABLED=true

# 푸시 알림
VITE_VAPID_PUBLIC_KEY=your_vapid_public_key_here
VITE_PUSH_NOTIFICATIONS_ENABLED=true

# 앱 설정
VITE_DEFAULT_LANGUAGE=ko
VITE_DEFAULT_TIMEZONE=Asia/Seoul
VITE_MAX_FILE_SIZE=5242880
VITE_SUPPORTED_IMAGE_TYPES=image/jpeg,image/png,image/webp

# 디버그 설정
DEBUG=bodyfence:*
VITE_LOG_LEVEL=info
```

## 📝 라이센스

이 프로젝트는 건강 모니터링 목적으로 개발되었습니다.

## 🤝 기여하기

1. 이 저장소를 포크하세요
2. 기능 브랜치를 생성하세요 (`git checkout -b feature/AmazingFeature`)
3. 변경사항을 커밋하세요 (`git commit -m 'Add some AmazingFeature'`)
4. 브랜치에 푸시하세요 (`git push origin feature/AmazingFeature`)
5. Pull Request를 열어주세요

---

💙 **bODYFENCE** - Walk Safe, Live Smart
```