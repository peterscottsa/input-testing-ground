import React from 'react'
import { BorderedInputV3 } from '../input/input-builder-v3'

import {
  initialValues,
  fruits
} from '../helpers'
import styled from 'styled-components'
import { useForm, Controller } from 'react-hook-form'

const StyledForm = styled.form`
  display: grid;
  grid-gap: 20px;
`

export function HookForm() {
  const { handleSubmit, control } = useForm({
    defaultValues: initialValues
  });
  const onSubmit = data => console.log(data);
  
  return (
    <StyledForm
      onSubmit={handleSubmit(onSubmit)}
      
    >
      {fruits.map((fruit) => (
        <Controller
          key={fruit}
          name={fruit}
          control={control}
          render={({ field: { onChange, onBlur, value, ref }, fieldState: {error} }) => (
            <BorderedInputV3
              label={`Label for ${fruit}`}
              value={value}
              error={error}
              onChange={onChange}
              onBlur={onBlur}
              ref={ref}
            />
          )}
        />
        
        
        
      ))}

      <button type="submit">Submit</button>
    </StyledForm>
  )
}
