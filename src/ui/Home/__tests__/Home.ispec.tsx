import React from 'react'
import { apiCharacterRepository } from '../../../core/infrastructure/domain/model/Character/apiCharacterRepository'
import { render, screen, waitFor } from '@testing-library/react'
import { Root } from '../Root'
import { aCharacterCollection } from '../../../core/domain/model/__tests__/__builders__/CharacterBuilder'
import { apiComicRepository } from '../../../core/infrastructure/domain/model/Comic/apiComicRepository'
import { aComicCollection } from '../../../core/domain/model/__tests__/__builders__/ComicBuilder'
import userEvent from '@testing-library/user-event'

describe('Home', () => {
  it('shows common comics', async () => {
    jest.spyOn(apiCharacterRepository, 'all').mockResolvedValue(aCharacterCollection())
    jest.spyOn(apiComicRepository, 'findBy').mockResolvedValue(aComicCollection())

    render(<Root />)

    await waitFor(async () => {
      await userEvent.selectOptions(screen.getByTestId('first-character-select'), aCharacterCollection()[0].name)
      await userEvent.selectOptions(screen.getByTestId('second-character-select'), aCharacterCollection()[0].name)
    })

    expect(apiComicRepository.findBy).toHaveBeenCalled()
    expect(screen.getAllByText(aComicCollection()[0].title)).toBeDefined()
  })
})

