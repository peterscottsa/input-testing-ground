import React from 'react'
import {
  BaseLabel,
  BaseInput,
  BaseError,
  BorderedInputBlock
} from '../base-components'
import styled from 'styled-components'
import { useId } from '@reach/auto-id'

const DefaultLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
`

export const InputBuilder = ({
  labelComponent,
  layoutComponent,
  inputComponent,
  errorComponent,
  ...props
}) => {
  const id = useId(props.name)

  const Layout = layoutComponent ? layoutComponent(props) : DefaultLayout

  const label = labelComponent ? (
    labelComponent()
  ) : (
    <BaseLabel htmlFor={id}>{props.label}</BaseLabel>
  )

  const input = inputComponent ? (
    inputComponent({ id })
  ) : (
    <BorderedInputBlock>
      <BaseInput id={id} {...props} />
    </BorderedInputBlock>
  )

  const error = errorComponent
    ? errorComponent()
    : props.error && <BaseError>{props.error}</BaseError>

  return (
    <Layout>
      {label}
      {input}
      {error}
    </Layout>
  )
}
