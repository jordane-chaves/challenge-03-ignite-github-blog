import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useNavigate } from 'react-router-dom'

import { Post } from '@/contexts/posts'

import { PostContainer, PostContent, PostHeader } from './styles'

interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  const navigate = useNavigate()

  function goToPost() {
    navigate(`/post/${post.id}`)
  }

  const publishedAtRelativeToNow = formatDistanceToNow(post.publishedAt, {
    addSuffix: true,
    locale: ptBR,
  })

  return (
    <PostContainer onClick={goToPost}>
      <PostHeader>
        <h3>{post.title}</h3>
        <span>{publishedAtRelativeToNow}</span>
      </PostHeader>

      <PostContent>{post.content}</PostContent>
    </PostContainer>
  )
}
