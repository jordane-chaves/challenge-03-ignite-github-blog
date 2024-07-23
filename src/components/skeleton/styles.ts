import styled, { css } from 'styled-components'

export interface SkeletonContainerProps {
  height: number
  width: number
}

export const SkeletonContainer = styled.span<SkeletonContainerProps>`
  background-color: ${(props) =>
    css`rgb(from ${props.theme.colors.border} r g b / 40%)`};
  border-radius: 2px;
  display: block;

  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;

  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`
