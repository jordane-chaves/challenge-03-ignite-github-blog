import { Link } from 'react-router-dom'
import { FaChevronLeft } from 'react-icons/fa6'

import { Skeleton } from '@/components/skeleton'
import { TitleSection } from '@/components/title-section'

import {
  PostContainer,
  PostContent,
  PostInfoContainer,
  PostTitleContainer,
} from './styles'

export function PostSkeleton() {
  return (
    <div>
      <TitleSection>
        <PostTitleContainer>
          <header>
            <Link to="/">
              <FaChevronLeft /> Voltar
            </Link>

            <Skeleton height={20} width={114} />
          </header>

          <h1>
            <Skeleton height={32} />
          </h1>

          <PostInfoContainer>
            <Skeleton height={25} width={136} />
            <Skeleton height={25} width={136} />
            <Skeleton height={25} width={136} />
          </PostInfoContainer>
        </PostTitleContainer>
      </TitleSection>

      <PostContainer>
        <PostContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <Skeleton key={index} height={40} />
          ))}
        </PostContent>
      </PostContainer>
    </div>
  )
}
