import React from 'react'
import {
  BaseInputBuilder,
  Error,
  Input,
  Label
} from '../../components/native/input-builder-rc'
import { BaseError, BorderedInputBlock } from '../../components/base-components'

export const BorderedNativeInput = (props) => (
  <BaseInputBuilder {...props}>
    <Label />
    <BorderedInputBlock>
      <Input />
    </BorderedInputBlock>
    <Error render={({ error }) => error && <BaseError>{error}</BaseError>} />
  </BaseInputBuilder>
)
