import React, { useContext } from 'react'
import styled from 'styled-components'
import { useId } from '@reach/auto-id'
import { useInput, InputContext } from '../../hooks/useInput'


export const BaseInputBuilder = ({ children, className, ...props }) => {
  const id = useId(props.id)

  return (
    <InputContext.Provider value={{ ...props, id }}>
      <div className={className}>{children}</div>
    </InputContext.Provider>
  )
}

const BaseInput = React.forwardRef(({ className }, ref) => {
  const transmittedProps = useContext(InputContext)

  return <input className={className} {...transmittedProps} ref={ref} />
})

export const Input = styled(BaseInput)`
  appearance: none;
  border: none;
  grid-area: input;
  padding: 8px;
  width: 100%;
`

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
const BaseError = ({ render, className }) => {
  const { transmittedProps } = useInput()
  
  if (render) {
    return <div className={className}>{ render(transmittedProps) }</div>
  }
  
  return (
    <div className={className}>
      {transmittedProps?.error}
    </div>
  )
}

export const Error = styled(BaseError)`
  width: 100%;
  background: lightcoral;
`

/**
 * Label
 * Renders a label.
 * Provides a render prop to allow user to easily use field values
 */
const BaseLabel = ({ render, className, children, ...props }) => {
  const { transmittedProps, id } = useInput()
  
  if (render) {
    return render(transmittedProps)
  }

  return (
    <label htmlFor={id} className={className} {...props}>
      {children || transmittedProps?.label || ''}
    </label>
  )
}

export const Label = styled(BaseLabel)`
  width: 100%;
`


