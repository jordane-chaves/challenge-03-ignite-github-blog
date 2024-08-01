import {
  FaArrowUpRightFromSquare,
  FaCalendarDay,
  FaChevronLeft,
  FaComment,
  FaGithub,
} from 'react-icons/fa6'
import Markdown from 'react-markdown'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { getIssueDetails } from '@/api/get-issue-details'
import { TitleSection } from '@/components/title-section'
import { PostDetails } from '@/contexts/posts'

import { Code } from './components/code'
import {
  PostContainer,
  PostContent,
  PostInfoContainer,
  PostInfoItem,
  PostTitleContainer,
} from './styles'

export function Post() {
  const [post, setPost] = useState<PostDetails | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const params = useParams()

  const postId = params.id

  useEffect(() => {
    async function getPostDetails() {
      if (!postId) {
        return
      }

      setIsLoading(true)

      const response = await getIssueDetails(postId)

      setPost({
        id: response.number,
        author: response.user.login,
        commentsAmount: response.comments,
        content: response.body,
        link: response.html_url,
        title: response.title,
        publishedAt: response.created_at,
      })

      setIsLoading(false)
    }

    getPostDetails()
  }, [postId])

  if (isLoading || !post) {
    return null
  }

  const publishedAtRelativeToNow = formatDistanceToNow(post.publishedAt, {
    addSuffix: true,
    locale: ptBR,
  })

  return (
    <div>
      <TitleSection>
        <PostTitleContainer>
          <header>
            <Link to="/">
              <FaChevronLeft /> Voltar
            </Link>

            <a href={post.link} target="_blank" rel="noopener noreferrer">
              Ver no Github <FaArrowUpRightFromSquare />
            </a>
          </header>

          <h1>{post.title}</h1>

          <PostInfoContainer>
            <PostInfoItem>
              <FaGithub />
              <span>{post.author}</span>
            </PostInfoItem>

            <PostInfoItem>
              <FaCalendarDay />
              <span className="published-date">{publishedAtRelativeToNow}</span>
            </PostInfoItem>

            <PostInfoItem>
              <FaComment />
              <span>{post.commentsAmount} comentários</span>
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
            {post.content}
          </Markdown>
        </PostContent>
      </PostContainer>
    </div>
  )
}
