import { Logo } from 'src/components/atoms/Logo'
import { Menu } from 'src/components/molecule/Menu'
import { CardLogo, ContainerHeader } from './style'

export const Header = () => {
  return (
    <ContainerHeader>
      <CardLogo>
        <Logo />
        <h3>Web Intelligence</h3>
      </CardLogo>
      <div>
        <Menu />
      </div>
    </ContainerHeader>
  )
}
