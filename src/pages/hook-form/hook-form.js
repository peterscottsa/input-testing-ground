import React from 'react'
import { BorderedInput, HookBorderedInput } from './hook-bordered-input'

import styled from 'styled-components'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Highlight from 'react-highlight'

const schema = yup.object().shape({
  banana: yup.string().required(),
  apple: yup.string().required(),
  cherry: yup.string().required(),
})

const StyledForm = styled.form`
  display: grid;
  grid-gap: 20px;
`

export function HookForm() {
  const { watch, handleSubmit, control } = useForm({
    defaultValues: {
      apple: '',
      cherry: '',
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
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Highlight className='jsx'>
        {`
          export const BorderedInput = React.forwardRef((props, ref) => (
            <BaseInputBuilder {...props}>
              <Label />
              <BorderedInputBlock>
                <Input ref={ref} />
              </BorderedInputBlock>
              <Error render={({error}) => error?.message ? <div>{error?.message}</div> : null} />
            </BaseInputBuilder>
          ))
        `}
      </Highlight>
      <Controller
        name='banana'
        control={control}
        render={({
                   field: { onChange, onBlur, value, ref },
                   fieldState: { error }
                 }) => (
          <BorderedInput
            label={`Label for banana`}
            value={value}
            error={error}
            onChange={onChange}
            onBlur={onBlur}
            ref={ref}
            placeholder='Send a message about banana'
          />
        )}
      />
      
      <Controller
        name='apple'
        control={control}
        render={({
                   field: { onChange, onBlur, value, ref },
                   fieldState: { error }
                 }) => (
          <BorderedInput
            label={`Label for apple`}
            value={value}
            error={error}
            onChange={onChange}
            onBlur={onBlur}
            ref={ref}
            placeholder='Send a message about apple'
          />
        )}
      />
      
      <Controller
        name='cherry'
        control={control}
        render={({
                   field: { onChange, onBlur, value, ref },
                   fieldState: { error }
                 }) => (
          <BorderedInput
            label={`Label for cherry`}
            value={value}
            error={error}
            onChange={onChange}
            onBlur={onBlur}
            ref={ref}
            placeholder='Send a message about cherry'
          />
        )}
      />
  
      <HookBorderedInput name="kiwi" placeholder="Lets talk kiwis" control={control} />
      
      <button type='submit'>Submit</button>
    </StyledForm>
  )
}