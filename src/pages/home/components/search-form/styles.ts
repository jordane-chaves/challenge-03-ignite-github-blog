import styled from 'styled-components'

export const SearchFormContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  margin: 0 auto;
  margin-top: 4.5rem;
  max-width: 864px;
  width: 100%;

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

  input {
    background-color: ${(props) => props.theme.colors.input};
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme.colors.border};

    color: ${(props) => props.theme.colors.text};

    padding: 0.75rem 1rem;

    &::placeholder {
      color: ${(props) => props.theme.colors.label};
    }
  }
`
