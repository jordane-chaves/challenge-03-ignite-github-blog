import styled from 'styled-components'

import coverImage from '@/assets/cover.png'

export const HeaderContainer = styled.header`
  background: url(${coverImage}) no-repeat center/cover;

  height: 296px;
  width: 100vw;

  padding-top: 4rem;

  img {
    display: block;
    margin: auto;
  }
`
