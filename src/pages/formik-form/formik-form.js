import React from 'react'

import {
  FormikBorderedInput,
  FormikUnderlinedInput
} from '../../components/formik/input-builder-HOC'
import { Formik, Form } from 'formik'
import * as yup from 'yup'

import {
  validationSchema as fruitSchema,
  initialValues,
  fruits
} from '../../helpers'
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
    <>
      <div></div>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
      >
        {({ values }) => (
          <StyledForm>
            {fruits.map((fruit, index) =>
              index % 2 === 0 ? (
                <FormikBorderedInput
                  key={fruit}
                  label={`Label for ${fruit}`}
                  name={fruit}
                  placeholder="Write some stuff"
                />
              ) : (
                <FormikUnderlinedInput
                  key={fruit}
                  label={`Label for ${fruit}`}
                  name={fruit}
                  placeholder="Write some stuff"
                />
              )
            )}

            <div>{JSON.stringify(values)}</div>

            <button type="submit">Submit</button>
          </StyledForm>
        )}
      </Formik>
    </>
  )
}
