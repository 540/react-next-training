import { CharacterRepository } from '../../../../domain/model/Character/CharacterRepository'
import { api } from '../../../api'

export const apiCharacterRepository: CharacterRepository = {
  all: api.characters
}
