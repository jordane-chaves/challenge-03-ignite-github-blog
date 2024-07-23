import {
  FaArrowUpRightFromSquare,
  FaCalendarDay,
  FaChevronLeft,
  FaComment,
  FaGithub,
} from 'react-icons/fa6'
import Markdown from 'react-markdown'

import { TitleSection } from '../../components/title-section'
import { Code } from './components/code'
import {
  PostContainer,
  PostContent,
  PostInfoContainer,
  PostInfoItem,
  PostTitleContainer,
} from './styles'

const fakePostMarkdown = `**Programming languages all have built-in data structures, but these often differ from one language to another.** This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

[Dynamic typing](#)
JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

~~~js
let foo = 42;   // foo is now a number
foo = 'bar';    // foo is now a string
foo = true;     // foo is now a boolean
~~~
`

export function Post() {
  return (
    <div>
      <TitleSection>
        <PostTitleContainer>
          <header>
            <a href="/">
              <FaChevronLeft /> Voltar
            </a>

            <a href="#" target="_blank" rel="noopener noreferrer">
              Ver no Github <FaArrowUpRightFromSquare />
            </a>
          </header>

          <h1>JavaScript data types and data structures</h1>

          <PostInfoContainer>
            <PostInfoItem>
              <FaGithub />
              <span>cameronwll</span>
            </PostInfoItem>

            <PostInfoItem>
              <FaCalendarDay />
              <span>Há 1 dia</span>
            </PostInfoItem>

            <PostInfoItem>
              <FaComment />
              <span>5 comentários</span>
            </PostInfoItem>
          </PostInfoContainer>
        </PostTitleContainer>
      </TitleSection>

      <PostContainer>
        <PostContent>
          <Markdown
            components={{
              code: (props) => <Code {...props} />,
            }}
          >
            {fakePostMarkdown}
          </Markdown>
        </PostContent>
      </PostContainer>
    </div>
  )
}
