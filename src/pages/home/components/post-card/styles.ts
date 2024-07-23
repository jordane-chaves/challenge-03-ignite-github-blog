import styled from 'styled-components'

export const PostContainer = styled.article`
  background-color: ${(props) => props.theme.colors.profile};
  border-radius: 10px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);

  padding: 2rem;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.label};
  }
`

export const PostHeader = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  h3 {
    color: ${(props) => props.theme.colors.title};
    font-size: 1.25rem;
  }

  span {
    color: ${(props) => props.theme.colors.span};
    font-size: 0.875rem;
    min-width: fit-content;

    margin-top: 4px;
  }

  span::first-letter {
    text-transform: uppercase;
  }
`

export const PostContent = styled.div`
  display: -webkit-box;
  line-clamp: 4;
  overflow: hidden;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;

  margin-top: 1.25rem;
`
