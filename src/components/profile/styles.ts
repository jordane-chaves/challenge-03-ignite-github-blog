import styled from 'styled-components'

export const ProfileContainer = styled.section`
  img {
    border-radius: 8px;

    object-fit: cover;
    height: 148px;
    width: 148px;
  }

  p {
    margin-top: 8px;
  }

  @media (min-width: ${(props) => props.theme.screens.sm}) {
    display: flex;
    gap: 2rem;
  }
`

export const ProfileHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  padding-top: 8px;
`

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;

  margin-top: 1.5rem;

  @media (min-width: ${(props) => props.theme.screens.sm}) {
    flex-direction: row;
    gap: 1.5rem;
  }
`

export const ProfileInfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme.colors.label};
    height: 18px;
    width: 18px;
  }

  span {
    color: ${(props) => props.theme.colors.subtitle};
  }
`
