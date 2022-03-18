import { isUndefined } from 'lodash'
import { ComicRepository } from '../../domain/model/Comic/ComicRepository'

export const comicService = (comicRepository: ComicRepository) => ({
  commonComics: async (firstCharacterFilter?: string, secondCharacterFilter?: string) => {
    if (isUndefined(firstCharacterFilter) || isUndefined(secondCharacterFilter)) {
      return []
    }

    const [firstCharacterComics, secondCharacterComics] = await Promise.all([
      comicRepository.findBy(firstCharacterFilter),
      comicRepository.findBy(secondCharacterFilter)
    ])

    return firstCharacterComics.filter(comic1 => secondCharacterComics.some(comic2 => comic1.id === comic2.id))
  }
})
