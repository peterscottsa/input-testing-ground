import styled from 'styled-components'
import React from 'react'
import { BaseInputBuilder, Error, Input, Label } from '../components/formik/input-builder-rc'

const BorderedInputBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid lightgray;

  :focus-within {
    border: 2px solid blue;
  }
`

export const FormikBorderedInputV3 = (props) => {
  return (
    <BaseInputBuilder {...props}>
      <Label />
      <BorderedInputBlock>
        <Input />
      </BorderedInputBlock>
      <Error />
    </BaseInputBuilder>
  )
}

export const FormikCurrencyInputV3 = (props) => {
  return (
    <BaseInputBuilder {...props}>
      <Label />
      <BorderedInputBlock>
        <Input />
      </BorderedInputBlock>
      <Error />
    </BaseInputBuilder>
  )
}
