import React from 'react'
import { useField, ErrorMessage } from 'formik'
import { useClonedFormikInputChildren } from './inputbuilder-v2.helpers'
import styled from 'styled-components'

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
  width: 100%;
  background: lightcoral;
`
Error.displayName = 'Error'

export const Label = styled.label`
  width: 100%;
`
Label.displayName = 'Label'

export const Content = styled(BaseInputArea)``
Content.displayName = 'Content'

export const InputBlock = ({ children, render, ...props }) => {
  const clonedChildren = useClonedFormikInputChildren(props, children)

  return <div className={props.className}>{clonedChildren}</div>
}

// Example
const StyledInputBlock = styled(InputBlock)`
  display: flex;
  flex-direction: row;
  border: 1px solid lightgray;
`
StyledInputBlock.displayName = 'InputBlock'

export const FormikBorderedInput = (props) => (
  <InputBlock {...props}>
    <Label>{props.label}</Label>
    <StyledInputBlock>
      <Content>I am a prefix!</Content>
      <BaseInput />
    </StyledInputBlock>
    <Error />
  </InputBlock>
)
