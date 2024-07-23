import { Skeleton } from '@/components/skeleton'

import {
  ProfileContainer,
  ProfileContent,
  ProfileHeader,
  ProfileInfo,
} from './styles'

export function ProfileSkeleton() {
  return (
    <ProfileContainer>
      <Skeleton height={148} width={148} />

      <ProfileContent>
        <ProfileHeader>
          <Skeleton height={32} width={240} />
          <Skeleton height={20} width={70} />
        </ProfileHeader>

        <p>
          <Skeleton height={48} width={600} />
        </p>

        <ProfileInfo>
          <Skeleton height={26} width={100} />
          <Skeleton height={26} width={100} />
          <Skeleton height={26} width={100} />
        </ProfileInfo>
      </ProfileContent>
    </ProfileContainer>
  )
}
