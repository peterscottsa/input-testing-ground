import React from 'react'
import { FormikBorderedInputV3 } from './bordered-input'
import { Formik, Form } from 'formik'
import * as yup from 'yup'

import {
  validationSchema as fruitSchema,
  initialValues,
  fruits
} from '../helpers'
import styled from 'styled-components'

const StyledForm = styled(Form)`
  display: grid;
  grid-gap: 20px;
`

export function FormikForm() {
  const validationSchema = yup.object().shape({
    ...fruitSchema
  })

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      {({ values }) => (
        <StyledForm>
          {fruits.map((fruit) => (
            <FormikBorderedInputV3
              key={fruit}
              label={`Label for ${fruit}`}
              name={fruit}
              placeholder="Write some stuff"
            />
          ))}

          <div>{JSON.stringify(values)}</div>

          <button type="submit">Submit</button>
        </StyledForm>
      )}
    </Formik>
  )
}
