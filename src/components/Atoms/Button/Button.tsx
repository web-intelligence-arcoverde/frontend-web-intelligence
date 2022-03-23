import { ReactNode } from 'react'
import { Container } from './styles'

interface ButtonProps {
  title: ReactNode
  onClick: () => void
}

export const Button = ({ title, onClick }: ButtonProps) => {
  return <Container onClick={onClick}>{title}</Container>
}
