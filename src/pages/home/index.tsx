import { Post, PostCard } from './components/post-card'
import { Profile } from './components/profile'
import { HomeContent, Input, PostList, SearchFormContainer } from './styles'

const posts: Post[] = [
  {
    id: crypto.randomUUID(),
    title: 'JavaScript data types and data structures',
    content: `Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

Dynamic typing
JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

let foo = 42; // foo is now a number
foo = 'bar'; // foo is now a string
foo = true; // foo is now a boolean`,
    publishedAt: new Date(),
  },
  {
    id: crypto.randomUUID(),
    title: 'JavaScript data types and data structures',
    content: `Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

Dynamic typing
JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

let foo = 42; // foo is now a number
foo = 'bar'; // foo is now a string
foo = true; // foo is now a boolean`,
    publishedAt: new Date(),
  },
  {
    id: crypto.randomUUID(),
    title: 'JavaScript data types and data structures',
    content: `Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

Dynamic typing
JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

let foo = 42; // foo is now a number
foo = 'bar'; // foo is now a string
foo = true; // foo is now a boolean`,
    publishedAt: new Date(),
  },
  {
    id: crypto.randomUUID(),
    title: 'JavaScript data types and data structures',
    content: `Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

Dynamic typing
JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

let foo = 42; // foo is now a number
foo = 'bar'; // foo is now a string
foo = true; // foo is now a boolean`,
    publishedAt: new Date(),
  },
  {
    id: crypto.randomUUID(),
    title: 'JavaScript data types and data structures',
    content: `Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

Dynamic typing
JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

let foo = 42; // foo is now a number
foo = 'bar'; // foo is now a string
foo = true; // foo is now a boolean`,
    publishedAt: new Date(),
  },
  {
    id: crypto.randomUUID(),
    title: 'JavaScript data types and data structures',
    content: `Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

Dynamic typing
JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

let foo = 42; // foo is now a number
foo = 'bar'; // foo is now a string
foo = true; // foo is now a boolean`,
    publishedAt: new Date(),
  },
]

export function Home() {
  const postsAmount = posts.length

  return (
    <div>
      <Profile />

      <HomeContent>
        <SearchFormContainer>
          <header>
            <h2>Publicações</h2>
            <span>{postsAmount} publicações</span>
          </header>

          <Input type="text" placeholder="Buscar conteúdo" />
        </SearchFormContainer>

        <PostList>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </PostList>
      </HomeContent>
    </div>
  )
}
