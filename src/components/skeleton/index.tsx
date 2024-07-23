import { SkeletonContainer, SkeletonContainerProps } from './styles'

interface SkeletonProps extends SkeletonContainerProps {}

export function Skeleton(props: SkeletonProps) {
  return <SkeletonContainer {...props} />
}
