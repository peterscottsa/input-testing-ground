import React from 'react'

import {
  BorderedInputBlock,
  BaseError,
  BaseLabel,
  BaseInput
} from '../../components/base-components'
import { Controller } from 'react-hook-form'

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
