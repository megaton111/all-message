import { MetadataRoute } from 'next'
import categories from '@/data/messages'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://all-message.vercel.app'

  const categoryPages = categories.map((category) => ({
    url: `${baseUrl}/category/${category.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...categoryPages,
  ]
}
