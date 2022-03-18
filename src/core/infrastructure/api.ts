import { Character } from '../domain/model/Character/Character'
import { Comic } from '../domain/model/Comic/Comic'

export const api = {
  characters: async () => {
    const response = await fetch('http://localhost:3000/characters.json')
    return await response.json() as Character[]
  },

  comics: async (characterId: string) => {
    const response = await fetch(`/comics-${characterId}.json`)
    return await response.json() as Comic[]
  },

  allComics: async () => {
    const response = await fetch('/comics.json')
    return await response.json() as Comic[]
  }
}
