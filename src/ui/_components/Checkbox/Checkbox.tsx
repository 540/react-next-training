import React from 'react'

interface Props {
  checked: boolean
  onChange: () => void
}

export const Checkbox = ({ checked, onChange }: Props) => {
  return (
    <label>
      <input type="checkbox" checked={checked} onChange={onChange} />
      Tema oscuro
    </label>
  )
}
