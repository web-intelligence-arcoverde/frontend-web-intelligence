import { Button } from 'src/components/atoms/Button/Button'
import { List } from './style'

export const Menu = () => {
  return (
    <List>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">Pricing</a>
      </li>
      <li>
        <a href="#">About us</a>
      </li>
      <div>
        <Button title="Get Ticket" onClick={() => {}} />
      </div>
    </List>
  )
}
