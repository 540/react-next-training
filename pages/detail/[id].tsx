import { Comic } from '../../src/core/domain/model/Comic/Comic'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { comicService } from '../../src/core/services/Comic/comicService'

interface Props {
  comic: Comic
}

interface Paths extends ParsedUrlQuery {
  id: string
}

const Detail = ({ comic }: Props) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    alignItems: 'center'
  }}>
    <p>ID: {comic.id}</p>
    <p>Title: {comic.title}</p>
    <p>Characters: {comic.characters.join(', ')}</p>
  </div>
)

export const getStaticPaths: GetStaticPaths<Paths> = async () => {
  const comics = await comicService.all()
  const paths = comics.map(comic => ({
    params: {
      id: comic.id.toString()
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<Props, Paths> = async ({ params }) => {
  const comic = await comicService.findBy(params!.id)

  return {
    props: {
      comic: comic
    }
  }
}

export default Detail
