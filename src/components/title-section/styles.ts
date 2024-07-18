import styled from 'styled-components'

export const TitleSectionContainer = styled.div`
  padding-inline: 1.5rem;
`

export const TitleSectionCard = styled.section`
  background-color: ${(props) => props.theme.colors.profile};
  border-radius: 10px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);

  max-width: 864px;
  width: 100%;

  margin: -88px auto 0;
  padding: 2rem;
`
