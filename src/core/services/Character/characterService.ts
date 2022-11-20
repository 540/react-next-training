import { apiCharacterRepository } from '../../infrastructure/Character/apiCharacterRepository'

export const characterService = {
  all: apiCharacterRepository.all
}
