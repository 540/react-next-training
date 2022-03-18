import React from 'react'
import styled, { css } from 'styled-components'
import { color, marginsCss } from '../../_styles'

interface Props {
  onClick?: () => void,
  secondary?: boolean
  marginLeft?: string,
  marginRight?: string,
  marginTop?: string,
  marginBottom?: string
}

export const Button = styled.button<Props>`
  ${marginsCss}

  background-color: ${color.blue1};
  border-radius: 6px;
  border: none;
  outline: none;
  padding: 10px;
  color: ${color.white};

  ${p =>
          p.secondary &&
          css`
            color: ${color.black};
            background-color: ${color.blue3};
            border: 1px solid ${color.blue1};
          `}

`
