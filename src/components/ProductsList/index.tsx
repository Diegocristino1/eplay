import Game from '../../models/Game'
import Product from '../Product'

import { Container, List, Title } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}

const ProductsList = ({ background, title, games }: Props) => (
  <Container background={background}>
    <div className="container">
      <Title>{title}</Title>
      <List>
        {games.map((game) => (
          <li key={game.id}>
            <Product
              category={game.category}
              description={game.description}
              image={game.image}
              infos={game.infos}
              system={game.system}
              title={game.title}
            />
          </li>
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
