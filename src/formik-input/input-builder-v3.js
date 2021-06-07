import React, { useContext } from 'react'
import { useField, ErrorMessage } from 'formik'
import styled from 'styled-components'
import { useId } from '@reach/auto-id'

const InputContext = React.createContext()

const BaseInputBuilder = ({ children, className, ...props }) => {
  const id = useId(props.id)
  console.log('Render')

  return (
    <InputContext.Provider value={{ ...props, id }}>
      <div className={className}>{children}</div>
    </InputContext.Provider>
  )
}

const BaseInput = ({ className }) => {
  const transmittedProps = useContext(InputContext)
  const [field] = useField(transmittedProps.name)

  return <input className={className} {...field} {...transmittedProps} />
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
  const transmittedProps = useContext(InputContext)
  const [field, meta] = useField(transmittedProps.name)

  if (render) {
    return render(field, meta, transmittedProps)
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
  const transmittedProps = useContext(InputContext)
  const [field, meta] = useField(transmittedProps.name)

  if (render) {
    return render(field, meta)
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
  const transmittedProps = useContext(InputContext)
  const [field, meta] = useField(transmittedProps.name)

  if (render) {
    return render(field, meta)
  }

  return (
    <label htmlFor={transmittedProps.id} className={className} {...props}>
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

export const FormikBorderedInputV3 = (props) => (
  <BaseInputBuilder {...props}>
    <Label />
    <BorderedInputBlock>
      <Input />
    </BorderedInputBlock>
    <Error />
  </BaseInputBuilder>
)
