import { characterService } from '../characterService'
import { CharacterRepository } from '../../../domain/model/Character/CharacterRepository'
import { aCharacterCollection } from '../../../domain/model/__tests__/__builders__/CharacterBuilder'

describe('Character Service', () => {
  it('returns all characters', async () => {
    const characterRepository: CharacterRepository = {
      all: () => Promise.resolve(aCharacterCollection())
    }

    const result = await characterService(characterRepository).all()

    expect(result).toEqual(aCharacterCollection())
  })
})
