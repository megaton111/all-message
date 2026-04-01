'use client'

import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import CheckIcon from '@mui/icons-material/Check'
import categories from '@/data/messages'

export default function CategoryPage() {
  const params = useParams()
  const router = useRouter()
  const [copiedId, setCopiedId] = useState<number | null>(null)
  const [snackbarOpen, setSnackbarOpen] = useState(false)

  const category = categories.find((c) => c.id === params.id)

  if (!category) {
    return (
      <Container maxWidth="md" sx={{ py: 4, textAlign: 'center' }}>
        <Typography variant="h5">카테고리를 찾을 수 없습니다</Typography>
        <Button sx={{ mt: 2 }} onClick={() => router.push('/')}>
          홈으로 돌아가기
        </Button>
      </Container>
    )
  }

  const handleCopy = async (text: string, messageId: number) => {
    await navigator.clipboard.writeText(text)
    setCopiedId(messageId)
    setSnackbarOpen(true)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Button startIcon={<ArrowBackIcon />} onClick={() => router.push('/')} sx={{ mb: 3 }}>
        돌아가기
      </Button>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h2" fontWeight={700} gutterBottom fontSize={"24px"}>
          {category.emoji} {category.name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {category.description}
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
          gap: 1,
        }}
      >
        {category.messages.map((message) => (
          <Card
            key={message.id}
            elevation={1}
            sx={{
              borderRadius: .5,
              display: 'flex',
              flexDirection: 'column',
              transition: 'box-shadow 0.2s',
              '&:hover': { boxShadow: 4 },
            }}
          >
            <CardContent
              sx={{
                p: 2.5,
                pb: 1,
                display: 'flex',
                flexDirection: 'column',
                height: { xs: 'auto', sm: 280 },
              }}
            >
              <Box
                sx={{
                  flex: 1,
                  overflow: { xs: 'visible', sm: 'auto' },
                  mb: 1,
                }}
              >
              <Typography
                variant="body2"
                sx={{
                  lineHeight: 1.8,
                  whiteSpace: 'pre-wrap',
                  fontSize: '1rem',
                  wordBreak: 'keep-all',
                }}
              >
                {message.text}
              </Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <IconButton
                  onClick={() => handleCopy(message.text, message.id)}
                  sx={{
                    color: copiedId === message.id ? 'success.main' : 'action.active',
                  }}
                  size="small"
                >
                  {copiedId === message.id ? <CheckIcon fontSize="small" /> : <ContentCopyIcon fontSize="small" />}
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={1500}
        onClose={() => setSnackbarOpen(false)}
        message="문구가 복사되었습니다"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </Container>
  )
}
