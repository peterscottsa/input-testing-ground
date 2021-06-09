import React from 'react'
import { useField, ErrorMessage } from 'formik'
import styled from 'styled-components'

export const BaseLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, auto) 1fr minmax(0, auto);
  grid-template-rows: auto auto auto;
  grid-template-areas:
    'label label label'
    'prefix input postfix'
    'error error error';
  align-items: center;
`

export const BaseInput = styled.input`
  appearance: none;
  border: none;
  grid-area: input;
  padding: 8px;
`
BaseInput.displayName = 'Input'

// We can wrap the default children in our existing Text component
const BaseInputArea = ({ render, ...props }) => {
  const [field, meta] = useField(props.name)
  const childrenOrRender = render ? render(field, meta, props) : props.children

  return <div className={props.className}>{childrenOrRender}</div>
}

// We can wrap children in our existing Text component
const BaseError = ({ render, ...props }) => {
  const [, meta] = useField(props.name)

  const childrenOrRender = render ? (
    render(meta)
  ) : (
    <ErrorMessage name={props.name} />
  )

  return <div className={props.className}>{childrenOrRender}</div>
}

export const Error = styled(BaseError)`
  grid-area: error;
  background: lightcoral;
`
Error.displayName = 'Error'

export const Label = styled.label`
  grid-area: label;
  font-size: 12px;
  font-weight: bold;
`
Label.displayName = 'Label'

export const Prefix = styled(BaseInputArea)`
  grid-area: prefix;
`
Prefix.displayName = 'Prefix'

export const Postfix = styled(BaseInputArea)`
  grid-area: postfix;
`

Postfix.displayName = 'Postfix'

export const InputWrapper = ({
  children,
  layoutComponent = BaseLayout,
  ...props
}) => {
  const LayoutComponent = layoutComponent

  const clonedChildren = React.Children.map(children, (child) => {
    switch (child.type.displayName) {
      case 'Input':
      case 'Prefix':
      case 'Postfix':
      case 'Error':
      case 'Label':
        return React.cloneElement(child, props)

      default:
        console.warn(
          'This component only accepts BaseInput, Postfix, Prefix, Error as children'
        )
        return null
    }
  })

  return <LayoutComponent>{clonedChildren}</LayoutComponent>
}

export const FormikInputBuilder = ({
  children,
  layoutComponent = BaseLayout,
  render,
  ...props
}) => {
  const [field] = useField(props.name)

  const LayoutComponent = layoutComponent

  const clonedChildren = React.Children.map(children, (child) => {
    switch (child.type.displayName) {
      case 'Input':
        return React.cloneElement(child, { ...field, ...props })

      case 'Prefix':
      case 'Postfix':
      case 'Error':
      case 'Label':
        return React.cloneElement(child, props)

      default:
        console.warn(
          'This component only accepts BaseInput, Postfix, Prefix, Error as children'
        )
        return null
    }
  })

  return <LayoutComponent>{clonedChildren}</LayoutComponent>
}
