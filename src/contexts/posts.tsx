import { createContext, ReactNode, useEffect, useState } from 'react'

import { fetchIssues } from '@/api/fetch-issues'

const USERNAME = 'jordane-chaves'
const REPOSITORY = 'challenge-03-ignite-github-blog'

export interface Post {
  id: number
  title: string
  content: string
  publishedAt: string
}

interface PostContextProps {
  posts: Post[]
  fetchPosts: (query?: string) => Promise<void>
}

export const PostsContext = createContext({} as PostContextProps)

interface PostsContextProviderProps {
  children: ReactNode
}

export function PostsContextProvider({ children }: PostsContextProviderProps) {
  const [posts, setPosts] = useState<Post[]>([])

  async function fetchPosts(query?: string) {
    const queryData = [query, `repo:${USERNAME}/${REPOSITORY}`].join(' ')
    const response = await fetchIssues(queryData)

    setPosts(
      response.items.map((item) => {
        return {
          id: item.number,
          title: item.title,
          content: item.body,
          publishedAt: item.created_at,
        }
      }),
    )
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <PostsContext.Provider value={{ posts, fetchPosts }}>
      {children}
    </PostsContext.Provider>
  )
}
