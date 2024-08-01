import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'

import { fetchIssues } from '@/api/fetch-issues'

export interface Post {
  id: number
  title: string
  content: string
  publishedAt: string
}

export interface PostDetails extends Post {
  commentsAmount: number
  link: string
  author: string
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

  const fetchPosts = useCallback(async (query?: string) => {
    const response = await fetchIssues(query)

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
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  return (
    <PostsContext.Provider value={{ posts, fetchPosts }}>
      {children}
    </PostsContext.Provider>
  )
}
