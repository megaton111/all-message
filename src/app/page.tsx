'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import Chip from '@mui/material/Chip'
import SearchIcon from '@mui/icons-material/Search'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import Container from '@mui/material/Container'
import categories from '@/data/messages'
import { Tag } from '@/types/message'

const tags: Tag[] = ['축하', '경조', '인사', '부동산', '채용', '모임', '비즈니스', '고객관리']

export default function HomePage() {
  const router = useRouter()
  const [search, setSearch] = useState('')
  const [selectedTag, setSelectedTag] = useState<Tag | null>(null)

  const filtered = categories.filter((c) => {
    const matchSearch = c.name.includes(search)
    const matchTag = selectedTag ? c.tag === selectedTag : true
    return matchSearch && matchTag
  })

  const handleTagClick = (tag: Tag) => {
    setSelectedTag(selectedTag === tag ? null : tag)
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <Typography variant="h1" fontWeight={700} gutterBottom fontSize={'30px'} letterSpacing={'-1px'}>
          모든 메세지
        </Typography>
        <Typography variant="body1" color="text.secondary">
          상황에 맞는 문자 메시지를 찾아보세요
        </Typography>
      </Box>

      <TextField
        fullWidth
        placeholder="카테고리 검색"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
          },
        }}
        sx={{ mb: 2 }}
      />

      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 3 }}>
        {tags.map((tag) => (
          <Chip
            key={tag}
            label={tag}
            onClick={() => handleTagClick(tag)}
            color={selectedTag === tag ? 'primary' : 'default'}
            variant={selectedTag === tag ? 'filled' : 'outlined'}
            sx={{ fontWeight: 600 }}
          />
        ))}
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr 1fr' },
          gap: 1,
        }}
      >
        {filtered.map((category) => (
          <Card key={category.id} elevation={1} sx={{ borderRadius: 1, transition: 'box-shadow 0.2s', '&:hover': { boxShadow: 4 } }}>
            <CardActionArea onClick={() => router.push(`/category/${category.id}`)}>
              <CardContent sx={{ p: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 80 }}>
                <Typography variant="h2" fontWeight={700} fontSize={'20px'} letterSpacing={"-1px"}>
                  {category.name}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Container>
  )
}
