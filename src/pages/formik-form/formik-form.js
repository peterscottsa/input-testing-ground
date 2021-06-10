import React from 'react'

import {
  FormikBorderedInput,
  FormikUnderlinedInput
} from '../../components/formik/input-builder-HOC'
import { Formik, Form } from 'formik'
import * as yup from 'yup'

import styled from 'styled-components'
import Highlight from 'react-highlight'

const StyledForm = styled(Form)`
  display: grid;
  grid-gap: 20px;
`

export function FormikForm() {
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
          const Input = withFormikInput(BaseInput)
          const Error = withFormikError(BaseError)
          const Label = withFormikLabel(BaseLabel)
          
          const FormikBorderedInput = (props) => (
            <BaseInputBuilder {...props}>
              <Label />
              <BorderedInputBlock>
                <Input />
              </BorderedInputBlock>
              <Error />
            </BaseInputBuilder>
          )
          
          const FormikUnderlinedInput = (props) => (
            <BaseInputBuilder {...props}>
              <Label />
              <UnderlinedInputBlock>
                <Input />
              </UnderlinedInputBlock>
              <Error />
            </BaseInputBuilder>
          )
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
            <FormikBorderedInput
              label={`Label for apples`}
              name="apples"
              placeholder="Write some stuff about apples"
            />
            <hr />
            <FormikUnderlinedInput
              label={`Label for oranges`}
              name="oranges"
              placeholder="Write some stuff about oranges"
            />
            <hr />
            <FormikBorderedInput
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
