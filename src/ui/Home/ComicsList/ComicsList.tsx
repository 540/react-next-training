import React from 'react'
import styled from 'styled-components'
import { Text } from '../../_components/Text'
import { sizes } from '../../_styles'
import { Comic as ComicModel } from '../../../core/domain/model/Comic/Comic'
import { comicService } from '../../../core/services/Comic/comicService'

export const ComicsList = () => {
  const [comics, setComics] = React.useState<ComicModel[]>([])

  React.useEffect(() => {
    async function fetchComics() {
      setComics(await comicService.all())
    }

    fetchComics()
  }, [])

  return (
    <Layout>
      <Text as="h1" weight="black" size="h1" marginBottom="small">
        Cómics de Marvel
      </Text>
      <hr />
      <br />
      <List comics={comics} />
    </Layout>
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

const Layout = styled.div`
  max-width: 1140px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
  width: 100%;
`

const Comic = styled.div`
  margin-bottom: ${sizes.base};
  
  :hover {
    cursor: pointer;
  }
`
