import { useQuery } from '@tanstack/react-query'
import {
  FaArrowUpRightFromSquare,
  FaGithub,
  FaBuilding,
  FaUserGroup,
} from 'react-icons/fa6'

import { TitleSection } from '@/components/title-section'
import { getProfile } from '@/api/get-profile'

import {
  ProfileContainer,
  ProfileContent,
  ProfileHeader,
  ProfileInfo,
  ProfileInfoItem,
} from './styles'
import { ProfileSkeleton } from './skeleton'

const USERNAME = 'jordane-chaves'

export function Profile() {
  const { data: profileResponse } = useQuery({
    queryKey: ['profile'],
    queryFn: () => getProfile(USERNAME),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  })

  return (
    <TitleSection>
      {profileResponse ? (
        <ProfileContainer>
          <img src={profileResponse.avatar_url} alt="" />

          <ProfileContent>
            <ProfileHeader>
              <h1>{profileResponse.name}</h1>
              <a
                href={profileResponse.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github <FaArrowUpRightFromSquare />
              </a>
            </ProfileHeader>

            <p>{profileResponse.bio}</p>

            <ProfileInfo>
              <ProfileInfoItem>
                <FaGithub /> <span>{profileResponse.login}</span>
              </ProfileInfoItem>

              {profileResponse.company && (
                <ProfileInfoItem>
                  <FaBuilding /> <span>{profileResponse.company}</span>
                </ProfileInfoItem>
              )}

              <ProfileInfoItem>
                <FaUserGroup />
                <span>{profileResponse.followers} seguidores</span>
              </ProfileInfoItem>
            </ProfileInfo>
          </ProfileContent>
        </ProfileContainer>
      ) : (
        <ProfileSkeleton />
      )}
    </TitleSection>
  )
}
