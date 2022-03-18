import { Character } from './Character'

export interface CharacterRepository {
  all: () => Promise<Character[]>
}
