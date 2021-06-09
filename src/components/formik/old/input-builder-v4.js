import React from 'react'
import { Field, ErrorMessage, useField } from 'formik'
import styled from 'styled-components'
import { useId } from '@reach/auto-id'

const BaseInput = ({ className, name, field, meta, ...props }) => {
  return <input className={className} {...field} {...props} />
}

export const Input = styled(BaseInput)`
  appearance: none;
  border: none;
  padding: 8px;
  width: 100%;
  outline: none;
`

/**
 * Content
 * Can be used to show additional information.
 * Provides a render prop to allow user to easily use field values
 */

const BaseInputContent = ({
  field,
  meta,
  render,
  className,
  children,
  name,
  ...props
}) => {
  console.log(name)

  if (render) {
    return render(field, meta)
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
const BaseError = ({ render, className, name, ...props }) => {
  const [field, meta] = useField(name)

  if (render) {
    return render(field, meta)
  }

  return (
    <div className={className} {...props}>
      <ErrorMessage name={name} />
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
const BaseLabel = ({ render, className, children, name, ...props }) => {
  const id = useId(name)
  const [field, meta] = useField(name)

  if (render) {
    return render(field, meta)
  }

  return (
    <label htmlFor={id} className={className} {...props}>
      {children}
    </label>
  )
}

export const Label = styled(BaseLabel)`
  width: 100%;
`

/**
 * Example: Creating a custom bordered component
 */

const BorderedInputBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid lightgray;

  :focus-within {
    border: 2px solid blue;
  }
`

export const FormikBorderedInputV3 = (props) => (
  <div>
    <Label name={props.name}>{props.label}</Label>
    <BorderedInputBlock>
      <Field name={props.name} component={Input} />
    </BorderedInputBlock>
    <Error name={props.name} />
  </div>
)
