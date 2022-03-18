import { isUndefined } from 'lodash'
import { apiComicRepository } from '../../infrastructure/Comic/apiComicRepository'

export const comicService = {
  commonComics: async (firstCharacterFilter?: string, secondCharacterFilter?: string) => {
    if (isUndefined(firstCharacterFilter) || isUndefined(secondCharacterFilter)) {
      return []
    }

    const [firstCharacterComics, secondCharacterComics] = await Promise.all([
      apiComicRepository.findBy(firstCharacterFilter),
      apiComicRepository.findBy(secondCharacterFilter)
    ])

    return firstCharacterComics.filter(comic1 => secondCharacterComics.some(comic2 => comic1.id === comic2.id))
  }
}
