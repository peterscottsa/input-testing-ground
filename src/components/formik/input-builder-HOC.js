import React from 'react'
import { InputContext } from '../../hooks/useInput'
import {
  BaseInput,
  BaseError,
  BaseLabel,
  BorderedInputBlock,
  UnderlinedInputBlock
} from '../base-components'
import {
  withFormikError,
  withFormikLabel,
  withFormikInput
} from '../input-decorator'

export const BaseInputBuilder = ({ children, className, ...props }) => (
  <InputContext.Provider value={props}>
    <div className={className}>{children}</div>
  </InputContext.Provider>
)

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

export const FormikUnderlinedInput = (props) => (
  <BaseInputBuilder {...props}>
    <Label />
    <UnderlinedInputBlock>
      <Input />
    </UnderlinedInputBlock>
    <Error />
  </BaseInputBuilder>
)
