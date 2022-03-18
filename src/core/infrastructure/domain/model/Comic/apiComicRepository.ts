import { ComicRepository } from '../../../../domain/model/Comic/ComicRepository'
import { api } from '../../../api'

export const apiComicRepository: ComicRepository = {
  findBy: api.comics
}
