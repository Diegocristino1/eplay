import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'

import resident from '../../assets/imeges/resident.png'
import diablo from '../../assets/imeges/diablo.png'
import zelda from '../../assets/imeges/zelda.png'
import starWars from '../../assets/imeges/star_wars.png'

const images: { [key: string]: string } = {
  resident,
  diablo,
  zelda,
  starWars
}

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido por sua jogabilidade intensa e história sombria, agora está disponível na plataforma de streaming da EA Play.',
    title: 'Resident Evil 4',
    system: 'PS5',
    infos: ['5%', 'R$290,00'],
    image: 'resident'
  },
  {
    id: 2,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido por sua jogabilidade intensa e história sombria, agora está disponível na plataforma de streaming da EA Play.',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$250,00'],
    image: 'resident'
  },
  {
    id: 3,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido por sua jogabilidade intensa e história sombria, agora está disponível na plataforma de streaming da EA Play.',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$250,00'],
    image: 'resident'
  },
  {
    id: 4,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido por sua jogabilidade intensa e história sombria, agora está disponível na plataforma de streaming da EA Play.',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$250,00'],
    image: 'resident'
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description:
      'Diablo IV, conhecido por sua jogabilidade intensa e história sombria, agora está disponível na plataforma de streaming da EA Play.',
    title: 'Diablo IV',
    system: 'PS5',
    infos: ['17/05'],
    image: 'diablo'
  },
  {
    id: 6,
    category: 'RPG',
    description:
      'Diablo IV, conhecido por sua jogabilidade intensa e história sombria, agora está disponível na plataforma de streaming da EA Play.',
    title: 'zelda',
    system: 'PS5',
    infos: ['17/05'],
    image: 'zelda'
  },
  {
    id: 7,
    category: 'RPG',
    description:
      'Diablo IV, conhecido por sua jogabilidade intensa e história sombria, agora está disponível na plataforma de streaming da EA Play.',
    title: 'Star Wars',
    system: 'PS5',
    infos: ['17/05'],
    image: 'starWars'
  },
  {
    id: 8,
    category: 'RPG',
    description:
      'Diablo IV, conhecido por sua jogabilidade intensa e história sombria, agora está disponível na plataforma de streaming da EA Play.',
    title: 'Resident Evil 4',
    system: 'PS5',
    infos: ['Nintendo Switch'],
    image: 'resident'
  }
]

const Categories = () => {
  const promocoesComImagens = promocoes.map((game) => ({
    ...game,
    image: images[game.image] || game.image
  }))

  const emBreveComImagens = emBreve.map((game) => ({
    ...game,
    image: images[game.image] || game.image
  }))

  return (
    <>
      <ProductsList games={promocoesComImagens} title="RPG" background="gray" />
      <ProductsList games={emBreveComImagens} title="Ação" background="black" />
      <ProductsList
        games={promocoesComImagens}
        title="Aventura"
        background="gray"
      />
      <ProductsList games={emBreveComImagens} title="FPS" background="black" />
    </>
  )
}

export default Categories
