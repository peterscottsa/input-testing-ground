import styled from 'styled-components'
import React from 'react'
import { BaseInputBuilder, Error, Input, Label } from '../../components/native/input-builder-rc'
import { Controller } from 'react-hook-form'

const BorderedInputBlock = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid lightgray;
`

export const BorderedInput = React.forwardRef((props, ref) => (
  <BaseInputBuilder {...props}>
    <Label />
    <BorderedInputBlock>
      <Input ref={ref} />
    </BorderedInputBlock>
    <Error render={({error}) => error?.message ? <div>{error?.message}</div> : null} />
  </BaseInputBuilder>
))

export const HookBorderedInput = (props) => (
  <Controller
    name={props.name}
    control={props.control}
    render={({
               field,
               fieldState: { error }
             }) => (
      <div>
        <Label>{props.label}</Label>
        <BorderedInputBlock>
          <Input {...field} placeholder={props.placeholder} />
        </BorderedInputBlock>
        <Error>{error?.message}</Error>
      </div>
    )}
  />
)
