import React from 'react'

import {
  FormikBorderedRenderInput,
  FormikUnderlinedRenderInput
} from './bordered-input'
import { Formik, Form } from 'formik'
import * as yup from 'yup'

import styled from 'styled-components'
import Highlight from 'react-highlight'

const StyledForm = styled(Form)`
  display: grid;
  grid-gap: 20px;
`

export function FormikRenderForm() {
  const validationSchema = yup.object().shape({
    apples: yup.string().required(),
    oranges: yup.string().required(),
    cherries: yup.string().required()
  })

  return (
    <>
      <h1>Formik form</h1>

      <Highlight className="jsx">
        {`
          const FormikBorderedRenderInput = (props) => {
            const [field] = useField(props.name)
            return (
              <InputBuilder
                label={props.label}
                {...field}
                
                errorComponent={() => (
                  <ErrorMessage name={props.name} component={BaseError} />
                )}
              />
            )
          }
          
          const FormikUnderlinedRenderInput = (props) => {
            const [field] = useField(props.name)
            return (
              <InputBuilder
                label={props.label}
                inputComponent={() => (
                  <UnderlinedInputBlock>
                    <BaseInput {...field} {...props} />
                  </UnderlinedInputBlock>
                )}
                errorComponent={() => (
                  <ErrorMessage name={props.name} component={BaseError} />
                )}
              />
            )
          }
        `}
      </Highlight>

      <Formik
        validationSchema={validationSchema}
        initialValues={{
          apples: '',
          oranges: '',
          cherries: ''
        }}
        onSubmit={(values) => console.log(values)}
      >
        {({ values }) => (
          <StyledForm>
            <FormikBorderedRenderInput
              label={`Label for apples`}
              name="apples"
              placeholder="Write some stuff about apples"
            />
            <hr />
            <FormikUnderlinedRenderInput
              label={`Label for oranges`}
              name="oranges"
              placeholder="Write some stuff about oranges"
            />
            <hr />
            <FormikBorderedRenderInput
              label={`Label for cherries`}
              name="cherries"
              placeholder="Write some stuff about cherries"
            />

            <div>{JSON.stringify(values)}</div>

            <button type="submit">Submit</button>
          </StyledForm>
        )}
      </Formik>
    </>
  )
}
