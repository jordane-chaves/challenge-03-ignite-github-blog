import {
  FaArrowUpRightFromSquare,
  FaGithub,
  FaBuilding,
  FaUserGroup,
} from 'react-icons/fa6'

import { TitleSection } from '../../../../components/title-section'
import {
  ProfileContainer,
  ProfileHeader,
  ProfileInfo,
  ProfileInfoItem,
} from './styles'

export function Profile() {
  return (
    <TitleSection>
      <ProfileContainer>
        <img src="https://www.github.com/jordane-chaves.png" alt="" />

        <div>
          <ProfileHeader>
            <h1>Jordane Chaves</h1>
            <a
              href="https://www.github.com/jordane-chaves"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github <FaArrowUpRightFromSquare />
            </a>
          </ProfileHeader>

          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>

          <ProfileInfo>
            <ProfileInfoItem>
              <FaGithub /> <span>jordane-chaves</span>
            </ProfileInfoItem>
            <ProfileInfoItem>
              <FaBuilding /> <span>Rocketseat</span>
            </ProfileInfoItem>
            <ProfileInfoItem>
              <FaUserGroup /> <span>32 seguidores</span>
            </ProfileInfoItem>
          </ProfileInfo>
        </div>
      </ProfileContainer>
    </TitleSection>
  )
}
