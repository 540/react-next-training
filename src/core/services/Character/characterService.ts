import { CharacterRepository } from '../../domain/model/Character/CharacterRepository'

export const characterService = (characterRepository: CharacterRepository) => ({
  all: characterRepository.all
})
