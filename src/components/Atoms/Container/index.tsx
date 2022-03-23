import styled from 'styled-components'

interface ContainerProps {
  direction: string
  justify: string
  align: string
  background: string
  responsive: string
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? 'row' : 'column')};
  justify-content: ${props => (props.justify ? props.justify : 'center')};
  align-items: ${props => (props.align ? props.align : 'center')};
  height: 100vh;
  background: ${props => (props.background ? props.background : 'transparent')};
  @media (max-width: 769px) {
    flex-direction: ${({ responsive }) => (responsive ? 'column' : 'row')};
  }
`
