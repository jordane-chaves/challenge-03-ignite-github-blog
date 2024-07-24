import styled from 'styled-components'

export const HomeContent = styled.main`
  padding-inline: 1.5rem;
`

const BaseContainer = styled.section`
  margin: 0 auto;
  max-width: 864px;
  width: 100%;
`

export const PostList = styled(BaseContainer)`
  display: grid;
  gap: 2rem;

  padding-top: 3rem;
  padding-bottom: 6rem;

  @media (width > ${(props) => props.theme.screens.md}) {
    grid-template-columns: repeat(auto-fit, minmax(416px, 1fr));
  }
`
