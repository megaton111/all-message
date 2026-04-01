# CLAUDE.md

이 파일은 Claude Code (claude.ai/code)가 이 저장소에서 작업할 때 참고하는 가이드입니다.

## 규칙

### 소통
- 항상 한국어로 답변해주세요
- 코드 수정 전에 계획을 투두리스트처럼 만들어서 먼저 알려주세요
- 파일을 삭제할 때는 반드시 먼저 확인해주세요
- git push는 절대 하지 마세요 — 사용자가 직접 합니다
- 커밋 메시지는 한국어로, 짧고 직관적으로 작성 (예: "적립식 투자 기능 추가")

### 코드 스타일
- 과도한 추상화 금지 — 동작하는 심플한 코드 우선. 헬퍼/유틸은 반복이 확실할 때만 추출
- 새 컴포넌트 파일은 최소한으로 — 재사용이 명확하지 않으면 페이지 내에서 처리
- 페이지 컴포넌트는 `'use client'` 클라이언트 사이드 패턴 유지
- 데이터 페칭 로직은 `src/hooks/`에 커스텀 훅으로 분리
- 계산/포맷 로직은 `src/utils/`에 분리
- UI 컴포넌트는 항상 MUI 컴포넌트 사용 (HTML 태그 직접 사용 금지 — `<div>` 대신 `<Box>`, `<button>` 대신 `<Button>` 등)
- 스타일링은 MUI `sx` prop 사용 (별도 CSS 파일 생성하지 않기)
- default export 사용 (Next.js 컨벤션)
- 타입은 간결하게 — 복잡한 제네릭이나 타입 계층 지양, 인라인 또는 `src/types/`에 정의
- 테스트 파일 작성하지 않기 (사용자가 요청하지 않는 한)
- 불필요한 주석, docstring, 타입 어노테이션 추가하지 않기

## 프로젝트 개요

Next.js 16 App Router 기반의 한국어 문자 메세지 문구를 제공하는 서비스이다.

## 명령어

- `pnpm dev` — 개발 서버 실행 (localhost:3000)
- `pnpm build` — 프로덕션 빌드
- `pnpm lint` — ESLint 실행 (`eslint-config-next`의 core-web-vitals + typescript 설정 사용)

## 아키텍처

- **패키지 매니저**: pnpm (v10, `packageManager` 필드에 명시)
- **프레임워크**: Next.js 16 (App Router), React 19
- **UI 스택**: MUI v7 + Tailwind CSS v4 + Emotion (SSR은 `@mui/material-nextjs`의 AppRouterCacheProvider로 처리)
- **상태 관리**: 커스텀 훅(`useInvestments`, `useStockPrices`, `useUser`) + 컴포넌트 `useState`. Zustand은 설치됨(미사용)
- **스타일**: SCSS (`src/styles/global.scss`), MUI 테마 (`src/styles/theme.ts`)
- **폰트**: Inter (next/font/google) + Pretendard (global.scss에서 CSS import)

### 주요 의존성

| 패키지 | 용도 |
|---|---|
| `@mui/material`, `@mui/icons-material`, `@mui/x-date-pickers` | UI 컴포넌트 |
| `sass` | SCSS 지원 |

### 페이지 구조

### API 라우트

### 주요 디렉터리
