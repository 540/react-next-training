import { apiComicRepository } from '../../infrastructure/Comic/apiComicRepository'

export const comicService = {
  findBy: apiComicRepository.findBy,
  all: apiComicRepository.all
}
