import styled from 'styled-components'

export const PostTitleContainer = styled.div`
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    margin-top: 1.25rem;
  }
`

export const PostInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem 2rem;
  flex-wrap: wrap;

  margin-top: 0.5rem;
`

export const PostInfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme.colors.label};
    height: 18px;
    width: 18px;
  }

  span {
    color: ${(props) => props.theme.colors.span};
  }

  .published-date::first-letter {
    text-transform: uppercase;
  }
`

export const PostContainer = styled.div`
  padding-inline: 1.5rem;
`

export const PostContent = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  max-width: 864px;
  width: 100%;

  margin: 0 auto;
  padding: 2.5rem 2rem;

  p a {
    border: 0;
    display: inline;

    font-size: 1rem;
    font-weight: 400;
    text-transform: none;
    text-decoration: underline;
  }

  ul {
    padding-left: 1.5rem;
  }

  img {
    max-width: 100%;
  }
`
