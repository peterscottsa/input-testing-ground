import styled from 'styled-components'
import React from 'react'
import { BaseInputBuilder, Error, Input, Label } from '../components/native/input-builder-rc'

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
    <Error render={({error}) => <div>{error}</div>} />
  </BaseInputBuilder>
))
