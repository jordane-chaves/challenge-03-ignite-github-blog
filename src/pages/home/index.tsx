import { PostList } from './components/post-list'
import { Profile } from './components/profile'
import { SearchForm } from './components/search-form'
import { HomeContent } from './styles'

export function Home() {
  return (
    <div>
      <Profile />

      <HomeContent>
        <SearchForm />
        <PostList />
      </HomeContent>
    </div>
  )
}
