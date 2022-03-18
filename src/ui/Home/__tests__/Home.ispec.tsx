import React from 'react'
import { apiCharacterRepository } from '../../../core/infrastructure/domain/model/Character/apiCharacterRepository'
import { render, screen, waitFor } from '@testing-library/react'
import { Root } from '../Root'
import { aCharacterCollection } from '../../../core/domain/model/__tests__/__builders__/CharacterBuilder'
import { apiComicRepository } from '../../../core/infrastructure/domain/model/Comic/apiComicRepository'
import { aComicCollection } from '../../../core/domain/model/__tests__/__builders__/ComicBuilder'
import userEvent from '@testing-library/user-event'

describe('Home', () => {
  beforeEach(() => {
    jest.spyOn(apiCharacterRepository, 'all').mockResolvedValue(aCharacterCollection())
    jest.spyOn(apiComicRepository, 'findBy').mockResolvedValue(aComicCollection())
  })

  it('shows common comics', async () => {
    render(<Root />)

    await waitFor(async () => {
      await userEvent.selectOptions(screen.getByTestId('first-character-select'), aCharacterCollection()[0].name)
      await userEvent.selectOptions(screen.getByTestId('second-character-select'), aCharacterCollection()[0].name)
    })

    expect(apiComicRepository.findBy).toHaveBeenCalled()
    expect(screen.getAllByText(aCharacterCollection()[0].name)).toBeDefined()
  })

  it('shows all available characters', async () => {
    render(<Root />)

    await userEvent.click(await screen.findByTestId('first-character-select'))

    aCharacterCollection().forEach(character => {
      expect(screen.getAllByText(character.name)).toBeDefined()
    })
  })

  it('clears list of comics when clear button is pressed', async () => {
    render(<Root />)

    await waitFor(async () => {
      await userEvent.selectOptions(screen.getByTestId('first-character-select'), aCharacterCollection()[0].name)
      await userEvent.selectOptions(screen.getByTestId('second-character-select'), aCharacterCollection()[0].name)
      await userEvent.click(screen.getByText('Limpiar búsqueda'))
    })

    expect(await screen.findByText('Elementos en la lista: 0')).toBeDefined()
  })
})

