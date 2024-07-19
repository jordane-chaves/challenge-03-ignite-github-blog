import { Post } from './components/post'
import { Profile } from './components/profile'
import { HomeContent, Input, PostList, SearchFormContainer } from './styles'

export function Home() {
  return (
    <div>
      <Profile />

      <HomeContent>
        <SearchFormContainer>
          <header>
            <h2>Publicações</h2>
            <span>6 publicações</span>
          </header>

          <Input type="text" placeholder="Buscar conteúdo" />
        </SearchFormContainer>

        <PostList>
          {Array.from({ length: 6 }).map((_, index) => (
            <Post key={index} />
          ))}
        </PostList>
      </HomeContent>
    </div>
  )
}
