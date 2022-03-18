import React from 'react'
import styled from 'styled-components'
import { color, sizes } from '../../_styles'

interface Props {
  options: { value: number; label: string }[]
  value?: string
  onSelect?: (value: string) => void
  className?: string
}

export const Select = ({ options, value = '', onSelect, className }: Props) => (
  <StyledSelect onChange={event => onSelect?.(event.target.value)} value={value} className={className}>
    <option value="" />
    {options.map(option => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </StyledSelect>
)

const StyledSelect = styled.select`
  cursor: pointer;
  width: 200px;
  color: ${color.black1};
  border: 0.5px solid ${color.gray4};
  height: ${sizes.huge};
  background: white;
`
