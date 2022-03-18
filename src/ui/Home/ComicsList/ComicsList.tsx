import React from 'react'
import styled from 'styled-components'
import { Button } from '../../_components/Button'
import { Text } from '../../_components/Text'
import { sizes } from '../../_styles'
import { api, Character, Comic as ComicModel } from '../../../api'
import { isUndefined } from 'lodash'
import { Select } from '../../_components/Select'

export const ComicsList = () => {
  const [comics, setComics] = React.useState<ComicModel[]>([])
  const [characters, setCharacters] = React.useState<Character[]>([])
  const [firstCharacterFilter, setFirstCharacterFilter] = React.useState<string | undefined>(undefined)
  const [secondCharacterFilter, setSecondCharacterFilter] = React.useState<string | undefined>(undefined)

  React.useEffect(() => {
    async function fetchCharacters() {
      setCharacters(await api.characters())
    }

    fetchCharacters()
  }, [])

  React.useEffect(() => {
    async function fetchComics() {
      if (isUndefined(firstCharacterFilter) || isUndefined(secondCharacterFilter)) {
        return
      }

      const [firstCharacterComics, secondCharacterComics] = await Promise.all([
        api.comics(firstCharacterFilter),
        api.comics(secondCharacterFilter)
      ])
      const commonComics = firstCharacterComics.filter(comic1 =>
        secondCharacterComics.some(comic2 => comic1.id === comic2.id)
      )

      setComics(commonComics)
    }

    fetchComics()
  }, [firstCharacterFilter, secondCharacterFilter])

  return (
    <Layout>
      <Text as="h1" weight="black" size="h1" marginBottom="small">
        Buscador de cómics de Marvel
      </Text>
      <Text as="p" size="large" marginBottom="large">
        Este buscador encontrará los cómics en los que aparezcan los dos personajes que selecciones en el formulario
      </Text>
      <Text as="p" size="medium" marginBottom="base">
        Escribe un personaje en la lista
      </Text>
      <Header
        characters={characters}
        firstCharacterFilter={firstCharacterFilter}
        secondCharacterFilter={secondCharacterFilter}
        onChangeFirstCharacter={setFirstCharacterFilter}
        onChangeSecondCharacter={setSecondCharacterFilter}
        onClear={() => {
          setComics([])
          setFirstCharacterFilter(undefined)
          setSecondCharacterFilter(undefined)
        }}
      />
      <List comics={comics} />
      <Footer comicCount={comics.length} />
    </Layout>
  )
}

interface HeaderProps {
  characters: Character[]
  firstCharacterFilter?: string
  secondCharacterFilter?: string
  onChangeFirstCharacter: (value: string) => void
  onChangeSecondCharacter: (value: string) => void
  onClear: () => void
}

const Header = ({
  characters,
  firstCharacterFilter,
  secondCharacterFilter,
  onChangeFirstCharacter,
  onChangeSecondCharacter,
  onClear
}: HeaderProps) => {
  const options = characters.map(character => ({ value: character.id, label: character.name }))

  return (
    <>
      <CharacterSelect
        options={options}
        value={firstCharacterFilter}
        onSelect={value => onChangeFirstCharacter(value)}
      />
      <CharacterSelect
        options={options}
        value={secondCharacterFilter}
        onSelect={value => onChangeSecondCharacter(value)}
      />
      <Button onClick={onClear}>Limpiar búsqueda</Button>
    </>
  )
}

interface ListProps {
  comics: ComicModel[]
}

const List = ({ comics }: ListProps) => {
  return (
    <>
      {
        comics.map(comic => (
          <Comic key={comic.id}>
            <Text as="p" weight="bold">
              {comic.title}
            </Text>
            <Text as="p">{comic.characters.join(', ')}</Text>
          </Comic>
        ))
      }
    </>
  )
}

interface FooterProps {
  comicCount: number
}

const Footer = ({ comicCount }: FooterProps) => (
  <div>
    <Text>Elementos en la lista: {comicCount}</Text>
  </div>
)

const Layout = styled.div`
  max-width: 1140px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
  width: 100%;
`

const CharacterSelect = styled(Select)`
  margin-bottom: ${sizes.base};
  margin-right: ${sizes.large};
`

const Comic = styled.div`
  margin-bottom: ${sizes.base};
`
