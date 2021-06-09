import React, { useContext } from 'react'
import { useField, ErrorMessage } from 'formik'
import styled from 'styled-components'
import { useId } from '@reach/auto-id'
import { useFormikInput, InputContext } from '../hooks/useInput'

const BaseInputBuilder = ({ children, className, ...props }) => {
  const id = useId(props.id)

  return (
    <InputContext.Provider value={{ ...props, id }}>
      <div className={className}>{children}</div>
    </InputContext.Provider>
  )
}

const BaseInput = ({ className }) => {
  const { transmittedProps, formikProps } = useFormikInput()

  return (
    <input className={className} {...formikProps.field} {...transmittedProps} />
  )
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

const BaseInputContent = ({ render, className, children, ...props }) => {
  const { transmittedProps, formikProps } = useFormikInput()

  if (render) {
    return render(formikProps.field, formikProps.meta, transmittedProps)
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
const BaseError = ({ render, className, ...props }) => {
  const { transmittedProps, formikProps } = useFormikInput()

  if (render) {
    return render(formikProps.field, formikProps.meta)
  }

  return (
    <div className={className} {...props}>
      <ErrorMessage name={transmittedProps.name} />
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
  const { transmittedProps, formikProps, id } = useFormikInput()

  if (render) {
    return render(formikProps.field, formikProps.meta)
  }

  return (
    <label htmlFor={id} className={className} {...props}>
      {children || transmittedProps.label}
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
