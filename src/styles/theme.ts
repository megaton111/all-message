'use client'

import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  typography: {
    fontFamily: "'Pretendard', 'Inter', sans-serif",
  },
  palette: {
    primary: {
      main: '#4A90D9',
    },
    background: {
      default: '#F5F7FA',
    },
  },
  shape: {
    borderRadius: 12,
  },
})

export default theme
