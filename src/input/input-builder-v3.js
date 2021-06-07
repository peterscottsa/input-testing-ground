import React, { useContext } from 'react'
import styled from 'styled-components'
import { useId } from '@reach/auto-id'
const InputContext = React.createContext()

const BaseInputBuilder = ({ children, className, ...props }) => {
  const id = useId(props.id)
  console.log('Render in builder')

  return (
    <InputContext.Provider value={{ ...props, id }}>
      <div className={className}>{children}</div>
    </InputContext.Provider>
  )
}

export const InputBuilder = styled(BaseInputBuilder)``

const BaseInput = ({ className }) => {
  const transmittedProps = useContext(InputContext)

  return <input className={className} {...transmittedProps} />
}

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
  const transmittedProps = useContext(InputContext)

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
  const transmittedProps = useContext(InputContext)

  const childrenOrRender = render ? (
    render(transmittedProps)
  ) : (
    <>
      {transmittedProps.error && transmittedProps.touched && (
        <div>{transmittedProps.error}</div>
      )}
    </>
  )

  return <div className={className}>{childrenOrRender}</div>
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
const BaseLabel = ({ render, className, children, id, ...props }) => {
  const transmittedProps = useContext(InputContext)

  if (render) {
    return render(transmittedProps)
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
  border: 1px solid lightgray;
`

export const BorderedInputV3 = (props) => (
  <BaseInputBuilder {...props}>
    <Label />
    <BorderedInputBlock>
      <Input />
    </BorderedInputBlock>
    <Error />
  </BaseInputBuilder>
)
