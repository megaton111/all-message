import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '@/styles/theme'

export const metadata = {
  verification: {
    google: 'zOqLoD6TshQ5DrQ84M5_nnpud8UI8m_q8vUnVokUH0Q',
  },
  title: '모든 메세지 - 문자 메시지 문구 모음',
  description: '설날, 추석, 생일 축하, 결혼 축하, 출산 축하, 승진 축하, 입사 축하, 개업 축하, 합격 축하, 수능 응원, 건강 쾌유, 위로, 감사, 부고 조의, 돌잔치, 크리스마스, 새해 인사, 전세 계약, 월세, 면접 안내, 채용 합격, 송년회, 동창회 등 모든 상황에 맞는 문자 메시지 문구를 무료로 제공합니다.',
  keywords: [
    '문자 메시지', '문자 문구', '안부 문자', '인사 문자',
    '설날 인사 문자', '추석 인사 문자', '명절 인사 문자',
    '생일 축하 문자', '결혼 축하 문자', '출산 축하 문자',
    '승진 축하 문자', '입사 축하 문자', '개업 축하 문자',
    '합격 축하 문자', '수능 응원 문자', '수능 축하 문자',
    '건강 쾌유 문자', '위로 문자', '감사 인사 문자',
    '부고 문자', '조의 문자', '장례 문자',
    '돌잔치 초대 문자', '돌잔치 축하 문자',
    '크리스마스 인사', '새해 인사 문자',
    '전세 만료 안내', '계약 갱신 청구', '계약갱신청구권',
    '월세 미납 안내', '임대인 문자', '임차인 문자',
    '면접 안내 문자', '채용 합격 문자', '최종 합격 안내',
    '송년회 안내 문자', '동창회 안내 문자', '모임 안내 문자',
  ],
  openGraph: {
    title: '모든 메세지 - 문자 메시지 문구 모음',
    description: '축하, 인사, 경조사, 부동산, 채용 등 모든 상황에 맞는 문자 메시지 문구를 찾아보세요.',
    type: 'website',
    locale: 'ko_KR',
    siteName: '모든 메세지',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
