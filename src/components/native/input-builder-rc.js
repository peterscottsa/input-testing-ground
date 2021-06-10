import React, { useContext } from 'react'
import styled from 'styled-components'
import { useId } from '@reach/auto-id'
import { useInput, InputContext } from '../../hooks/useInput'

import { BaseInput, BaseError, BaseLabel } from '../base-components'

export const BaseInputBuilder = ({ children, className, ...props }) => {
  const id = useId(props.id)

  return (
    <InputContext.Provider value={{ ...props, id }}>
      <div className={className}>{children}</div>
    </InputContext.Provider>
  )
}

export const Input = React.forwardRef(({ className, ...props }, ref) => {
  const transmittedProps = useContext(InputContext)

  return (
    <BaseInput
      className={className}
      {...transmittedProps}
      {...props}
      ref={ref}
    />
  )
})

/**
 * Content
 * Can be used to show additional information.
 * Provides a render prop to allow user to easily use field values
 */

const BaseInputContent = ({ render, className, children, ...props }) => {
  const { transmittedProps } = useInput()

  if (render) {
    return render(transmittedProps)
  }

  return (
    <div className={className} {...props}>
      {children}
    </div>
  )
}

export const Content = styled(BaseInputContent)``

/**
 * Error
 * Can be used to render and style validation errors.
 * Provides a render prop to allow user to easily use field values
 */
export const Error = ({ render }) => {
  const { transmittedProps } = useInput()

  if (render) {
    return render(transmittedProps)
  }

  return transmittedProps?.error ? (
    <BaseError>{transmittedProps?.error}</BaseError>
  ) : null
}

/**
 * Label
 * Renders a label.
 * Provides a render prop to allow user to easily use field values
 */
export const Label = ({ render, className, children, ...props }) => {
  const { transmittedProps, id } = useInput()

  if (render) {
    return render(transmittedProps)
  }

  return (
    <BaseLabel htmlFor={id} className={className} {...props}>
      {children || transmittedProps?.label || ''}
    </BaseLabel>
  )
}
