import { useQuery } from '@tanstack/react-query'
import {
  FaArrowUpRightFromSquare,
  FaCalendarDay,
  FaChevronLeft,
  FaComment,
  FaGithub,
} from 'react-icons/fa6'
import Markdown from 'react-markdown'
import { Link, useParams } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { getIssueDetails } from '@/api/get-issue-details'
import { TitleSection } from '@/components/title-section'
import { PostDetails } from '@/contexts/posts'

import { Code } from './components/code'
import { PostSkeleton } from './skeleton'
import {
  PostContainer,
  PostContent,
  PostInfoContainer,
  PostInfoItem,
  PostTitleContainer,
} from './styles'

interface GetPostDetailsResponse {
  post: PostDetails | null
}

async function getPostDetails(
  postId?: string,
): Promise<GetPostDetailsResponse> {
  if (!postId) {
    return { post: null }
  }

  const response = await getIssueDetails(postId)

  const post = {
    id: response.number,
    author: response.user.login,
    commentsAmount: response.comments,
    content: response.body,
    link: response.html_url,
    title: response.title,
    publishedAt: response.created_at,
  }

  return {
    post,
  }
}

export function Post() {
  const params = useParams()

  const postId = params.id

  const { data: postResponse, isLoading: isPostLoading } = useQuery({
    queryKey: ['post', postId],
    queryFn: () => getPostDetails(postId),
    staleTime: 1000 * 60 * 10, // 10 minutes
  })

  const post = postResponse?.post

  if (isPostLoading || !post) {
    return <PostSkeleton />
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
