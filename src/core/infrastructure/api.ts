import { Character } from '../domain/model/Character/Character'
import { Comic } from '../domain/model/Comic/Comic'

export const api = {
  characters: async (): Promise<Character[]> => {
    const response = await fetch('http://localhost:3000/characters.json')
    return await response.json() as Character[]
  },

  comic: async (comicID: string): Promise<Comic> => {
    const comics = await api.allComics()
    const comic = comics.find(comic => comic.id === Number(comicID))

    return comic as Comic
  },

  allComics: async (): Promise<Comic[]> => {
    const response = await fetch('http://localhost:3000/comics.json')
    return await response.json() as Comic[]
  }
}
