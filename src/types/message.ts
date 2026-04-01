export interface Message {
  id: number
  text: string
}

export type Tag = '축하' | '경조' | '인사' | '부동산' | '채용' | '모임' | '비즈니스' | '고객관리'

export interface Category {
  id: string
  name: string
  emoji: string
  tag: Tag
  description: string
  messages: Message[]
}
