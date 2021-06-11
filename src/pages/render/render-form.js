import React, { useState } from 'react'
import { BorderedRenderInput } from './bordered-input'

import { initialValues, initialErrors, fruits } from '../../helpers'
import styled from 'styled-components'

const StyledForm = styled.form`
  display: grid;
  grid-gap: 20px;
`

export function RenderForm() {
  const [values, setValue] = useState(initialValues)
  const [errors, setErrors] = useState(initialErrors)

  return (
    <StyledForm
      onSubmit={(e) => {
        e.preventDefault()

        console.log(values)
      }}
      noValidate
    >
      {fruits.map((fruit) => (
        <BorderedRenderInput
          key={fruit}
          label={`Label for ${fruit}`}
          name={fruit}
          required
          minLength={5}
          placeholder="Write some stuff"
          value={values[fruit]}
          error={errors[fruit]}
          onChange={(e) => {
            setErrors((prevState) => ({
              ...prevState,
              [fruit]: e.target.validationMessage
            }))
            setValue({ ...values, [fruit]: e.target.value })
          }}
        />
      ))}

      <button type="submit">Submit</button>
    </StyledForm>
  )
}
