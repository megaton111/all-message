# 모든 메세지

https://all-message.vercel.app

상황에 맞는 한국어 문자 메시지 문구를 찾아 바로 복사할 수 있는 웹 서비스입니다.

축하, 경조, 인사, 부동산, 채용, 모임, 비즈니스, 고객관리 등 다양한 카테고리별 문구를 제공합니다.

## 주요 기능

- 카테고리별 문자 메시지 문구 제공
- 태그 필터링 및 검색
- 클릭 한 번으로 문구 복사

## 기술 스택

| 기술 | 버전 |
|---|---|
| Next.js (App Router) | 15 |
| React | 19 |
| TypeScript | 5.8 |
| MUI (Material UI) | 7 |
| Emotion | 11 |
| pnpm | 10 |

## 시작하기

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm dev

# 프로덕션 빌드
pnpm build
```

개발 서버는 [http://localhost:3000](http://localhost:3000)에서 실행됩니다.

## 프로젝트 구조

```
src/
├── app/                # Next.js App Router 페이지
│   ├── page.tsx        # 홈 (카테고리 목록)
│   └── category/[id]/  # 카테고리별 문구 목록
├── data/               # 메시지 데이터
├── types/              # TypeScript 타입 정의
└── styles/             # 글로벌 스타일 및 테마
```
