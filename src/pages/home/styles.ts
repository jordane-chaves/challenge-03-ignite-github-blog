import styled from 'styled-components'

export const HomeContent = styled.main`
  padding-inline: 1.5rem;
`

const BaseContainer = styled.section`
  margin: 0 auto;
  max-width: 864px;
  width: 100%;
`

export const SearchFormContainer = styled(BaseContainer)`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  margin-top: 4.5rem;

  header {
    display: flex;
    justify-content: space-between;

    h2 {
      color: ${(props) => props.theme.colors.subtitle};
      font-size: 1.125rem;
    }

    span {
      color: ${(props) => props.theme.colors.span};
      font-size: 0.875rem;
      min-width: fit-content;

      margin-top: 4px;
    }
  }
`

export const Input = styled.input`
  background-color: ${(props) => props.theme.colors.input};
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme.colors.border};

  color: ${(props) => props.theme.colors.text};

  padding: 0.75rem 1rem;

  &::placeholder {
    color: ${(props) => props.theme.colors.label};
  }
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
