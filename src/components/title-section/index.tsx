import { ReactNode } from 'react'

import { TitleSectionCard, TitleSectionContainer } from './styles'

interface TitleSectionProps {
  children: ReactNode
}

export function TitleSection({ children }: TitleSectionProps) {
  return (
    <TitleSectionContainer>
      <TitleSectionCard>{children}</TitleSectionCard>
    </TitleSectionContainer>
  )
}
