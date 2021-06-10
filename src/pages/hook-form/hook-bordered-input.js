import styled from 'styled-components'
import React from 'react'
import {
  BaseInputBuilder,
  Error,
  Input,
  Label
} from '../../components/native/input-builder-rc'
import {
  BorderedInputBlock,
  BaseError,
  BaseLabel,
  BaseInput
} from '../../components/base-components'
import { Controller } from 'react-hook-form'

export const BorderedInput = React.forwardRef((props, ref) => (
  <BaseInputBuilder {...props}>
    <Label />
    <BorderedInputBlock>
      <Input ref={ref} />
    </BorderedInputBlock>
    <Error
      render={({ error }) =>
        error?.message ? <BaseError>{error?.message}</BaseError> : null
      }
    />
  </BaseInputBuilder>
))

export const HookBorderedInput = (props) => (
  <Controller
    name={props.name}
    control={props.control}
    render={({ field, fieldState: { error } }) => (
      <div>
        <BaseLabel>{props.label}</BaseLabel>
        <BorderedInputBlock>
          <BaseInput {...field} placeholder={props.placeholder} />
        </BorderedInputBlock>
        {error?.message ? <BaseError>{error?.message}</BaseError> : null}
      </div>
    )}
  />
)
