import { ComicRepository } from '../../domain/model/Comic/ComicRepository'
import { api } from '../api'
import { Comic } from '../../domain/model/Comic/Comic'

export const apiComicRepository: ComicRepository = {
  findBy: async (characterId: string) => {
  const response = await fetch(`/comics-${characterId}.json`)
  return await response.json() as Comic[]
},
}
