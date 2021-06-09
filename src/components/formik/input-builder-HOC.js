import React from 'react'
import { useId } from '@reach/auto-id'
import { InputContext } from '../../hooks/useInput'
import {
  Input as BaseInput,
  Error as BaseError,
  Label as BaseLabel,
  BorderedInputBlock
} from '../base-components'
import {
  withFormikError,
  withFormikLabel,
  withFormikInput
} from '../input-decorator'

export const BaseInputBuilder = ({ children, className, ...props }) => {
  return (
    <InputContext.Provider value={props}>
      <div className={className}>{children}</div>
    </InputContext.Provider>
  )
}

export const Input = withFormikInput(BaseInput)
export const Error = withFormikError(BaseError)
export const Label = withFormikLabel(BaseLabel)

export const FormikBorderedInput = (props) => (
  <BaseInputBuilder {...props}>
    <Label />
    <BorderedInputBlock>
      <Input />
    </BorderedInputBlock>
    <Error />
  </BaseInputBuilder>
)
