export const api = {
  characters: async () => {
    const response = await fetch('/characters.json')
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

export interface Character {
  id: number
  name: string
}

export interface Comic {
  id: number
  title: string
  characters: string[]
}
