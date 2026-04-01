import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

export default function NotFound() {
  return (
    <Container maxWidth="md" sx={{ py: 8, textAlign: 'center' }}>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        페이지를 찾을 수 없습니다
      </Typography>
      <Box component="a" href="/" sx={{ color: 'primary.main', textDecoration: 'none' }}>
        홈으로 돌아가기
      </Box>
    </Container>
  )
}
