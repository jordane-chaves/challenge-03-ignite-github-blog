import styled from 'styled-components'

export const PostListContainer = styled.div`
  display: grid;
  gap: 2rem;

  margin: 0 auto;
  max-width: 864px;
  width: 100%;

  padding-top: 3rem;
  padding-bottom: 6rem;

  @media (width > ${(props) => props.theme.screens.md}) {
    grid-template-columns: repeat(auto-fit, minmax(416px, 1fr));
  }
`
