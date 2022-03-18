import { ComicRepository } from '../../../domain/model/Comic/ComicRepository'
import { comicService } from '../comicService'
import { aComic, aComicCollection } from '../../../domain/model/__tests__/__builders__/ComicBuilder'

describe('Comic Service', () => {
  it('does not fetch comics for a character if the first filter is undefined and returns empty array', async () => {
    const comicRepository: ComicRepository = {
      findBy: jest.fn()
    }

    const result = await comicService(comicRepository).commonComics(undefined, 'filter')

    expect(comicRepository.findBy).not.toHaveBeenCalled()
    expect(result).toHaveLength(0)
  })

  it('does not fetch comics for a character if the second filter is undefined and returns empty array', async () => {
    const comicRepository: ComicRepository = {
      findBy: jest.fn()
    }

    const result = await comicService(comicRepository).commonComics('filter', undefined)

    expect(comicRepository.findBy).not.toHaveBeenCalled()
    expect(result).toHaveLength(0)
  })

  it('fetches comics for a character if both filters are defined and returns filtered comics', async () => {
    const comicRepository: ComicRepository = {
      findBy: jest.fn(() => Promise.resolve(aComicCollection()))
    }

    const result = await comicService(comicRepository).commonComics('filter', 'filter')

    expect(comicRepository.findBy).toHaveBeenCalled()
    expect(result).toEqual(aComicCollection())
  })

  it('returns only common comics', async () => {
    const comics = aComicCollection(undefined, {
      id: 10,
      title: 'common title',
      characters: ['common character']
    })
    const comicRepository: ComicRepository = {
      findBy: jest.fn().mockResolvedValueOnce(comics).mockResolvedValueOnce(comics)
    }

    const result = await comicService(comicRepository).commonComics('filter', 'filter')

    expect(result).toEqual(comics)
  })

  it('does not return comics when there are not common comics', async () => {
    const comicRepository: ComicRepository = {
      findBy: jest.fn().mockResolvedValueOnce([aComic({ id: 123 })]).mockResolvedValueOnce([aComic()])
    }

    const result = await comicService(comicRepository).commonComics('filter', 'filter')

    expect(result).toHaveLength(0)
  })
})
