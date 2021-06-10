import React from 'react'
import { HookBorderedInput } from './hook-bordered-input'

import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Highlight from 'react-highlight'

const schema = yup.object().shape({
  banana: yup.string().required(),
  apple: yup.string().required(),
  kiwi: yup.string().required()
})

const StyledForm = styled.form`
  display: grid;
  grid-gap: 20px;
`

export function HookForm() {
  const { watch, handleSubmit, control } = useForm({
    defaultValues: {
      apple: '',
      banana: '',
      kiwi: ''
    },
    resolver: yupResolver(schema)
  })

  watch((data) => {
    console.log(data)
  })

  const onSubmit = (data) => console.log(data)

  return (
    <>
      <h1>React hook form</h1>
      <hr />

      <Highlight className="jsx">
        {`
          <Controller
            name={props.name}
            control={props.control}
            render={({ field, fieldState: { error } }) => (
              <div>
                <BaseLabel>{props.label}</BaseLabel>
                <BorderedInputBlock>
                  <BaseInput {...field} placeholder={props.placeholder} />
                </BorderedInputBlock>
                {error?.message ? <BaseError>{error?.message}</BaseError> : null}
              </div>
            )}
          />
        `}
      </Highlight>

      <hr />
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <HookBorderedInput
          label="Label for bananas"
          name="banana"
          placeholder="Lets talk bananas"
          control={control}
        />
        <hr />
        <HookBorderedInput
          label="Label for apples"
          name="apple"
          placeholder="Lets talk apples"
          control={control}
        />
        <hr />
        <HookBorderedInput
          label="Label for kiwis"
          name="kiwi"
          placeholder="Lets talk kiwis"
          control={control}
        />

        <button type="submit">Submit</button>
      </StyledForm>
    </>
  )
}
