import { ChangeEvent, useEffect, useState } from 'react'
import { useContextSelector } from 'use-context-selector'

import { PostsContext } from '@/contexts/posts'
import useDebounceValue from '@/hooks/use-debounce-value'

import { SearchFormContainer } from './styles'

export function SearchForm() {
  const [search, setSearch] = useState('')

  const { posts, fetchPosts } = useContextSelector(PostsContext, (context) => {
    return {
      posts: context.posts,
      fetchPosts: context.fetchPosts,
    }
  })

  function handleSearchChange(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value)
  }

  const searchTerm = useDebounceValue(search, 500)

  useEffect(() => {
    if (searchTerm) {
      fetchPosts(searchTerm)
    }
  }, [searchTerm, fetchPosts])

  const postsAmount = posts.length

  return (
    <SearchFormContainer>
      <header>
        <h2>Publicações</h2>
        <span>
          {postsAmount} {postsAmount === 1 ? 'publicação' : 'publicações'}
        </span>
      </header>

      <input
        type="text"
        placeholder="Buscar conteúdo"
        onChange={handleSearchChange}
      />
    </SearchFormContainer>
  )
}
