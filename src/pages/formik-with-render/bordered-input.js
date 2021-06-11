import React from 'react'
import { InputBuilder } from '../../components/render/input-builder'

import { ErrorMessage, useField } from 'formik'
import {
  BaseError,
  BaseInput,
  UnderlinedInputBlock
} from '../../components/base-components'

export const FormikBorderedRenderInput = (props) => {
  const [field] = useField(props.name)
  return (
    <InputBuilder
      {...field}
      {...props}
      errorComponent={() => (
        <ErrorMessage name={props.name} component={BaseError} />
      )}
    />
  )
}

export const FormikUnderlinedRenderInput = (props) => {
  const [field] = useField(props.name)
  return (
    <InputBuilder
      label={props.label}
      inputComponent={({ id }) => (
        <UnderlinedInputBlock>
          <BaseInput id={id} {...field} {...props} />
        </UnderlinedInputBlock>
      )}
      errorComponent={() => (
        <ErrorMessage name={props.name} component={BaseError} />
      )}
    />
  )
}
