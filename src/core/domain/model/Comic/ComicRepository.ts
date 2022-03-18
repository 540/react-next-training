import { Comic } from './Comic'

export interface ComicRepository {
  findBy: (characterId: string) => Promise<Comic[]>
}
