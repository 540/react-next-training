import { apiCharacterRepository } from '../../infrastructure/domain/model/Character/apiCharacterRepository'

export const characterService = {
  all: apiCharacterRepository.all
}
