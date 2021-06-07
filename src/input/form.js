import React, { useState } from 'react'
import { BorderedInputV3 } from './input-builder-v3'

import {
  initialValues,
  initialErrors,
  initialTouched,
  fruits
} from '../helpers'
import styled from 'styled-components'

const StyledForm = styled.form`
  display: grid;
  grid-gap: 20px;
`

export function NativeForm() {
  const [values, setValue] = useState(initialValues)
  const [errors, setErrors] = useState(initialErrors)
  const [touched, setTouched] = useState(initialTouched)

  return (
    <StyledForm
      onSubmit={(e) => {
        e.preventDefault()

        console.log(values)
      }}
      noValidate
    >
      {fruits.map((fruit) => (
        <BorderedInputV3
          key={fruit}
          label={`Label for ${fruit}`}
          name={fruit}
          required
          minLength={5}
          placeholder="Write some stuff"
          value={values[fruit]}
          error={errors[fruit]}
          // touched={touched[fruit]}
          onFocus={() =>
            setTouched((prevState) => ({ ...prevState, [fruit]: true }))
          }
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
