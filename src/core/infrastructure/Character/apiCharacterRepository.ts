import { CharacterRepository } from '../../domain/model/Character/CharacterRepository'
import { Character } from '../../domain/model/Character/Character'

export const apiCharacterRepository: CharacterRepository = {
  all: async () => {
    const response = await fetch('http://localhost:3000/characters.json')
    return await response.json() as Character[]
  }
}
