import { useContext } from 'react'

import { PostsContext } from '@/contexts/posts'

import { PostCard } from './components/post-card'
import { Profile } from './components/profile'
import { SearchForm } from './components/search-form'
import { HomeContent, PostList } from './styles'

export function Home() {
  const { posts } = useContext(PostsContext)

  return (
    <div>
      <Profile />

      <HomeContent>
        <SearchForm />

        <PostList>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </PostList>
      </HomeContent>
    </div>
  )
}
