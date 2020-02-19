import Timestamp from '@/models/Timestamp'

export default interface Article {
  key: string
  tag_ids: number[]
  title: string
  body: string
  image_url: string
  like_count: number
  created_at: Timestamp
  updated_at: Timestamp
}
