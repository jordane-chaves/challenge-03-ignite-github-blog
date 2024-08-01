import { useContextSelector } from 'use-context-selector'

import { PostsContext } from '@/contexts/posts'

import { PostCard } from '../post-card'
import { PostListContainer } from './styles'

export function PostList() {
  const posts = useContextSelector(PostsContext, (context) => {
    return context.posts
  })

  return (
    <PostListContainer>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </PostListContainer>
  )
}
