import React, { useContext } from 'react'
import styled from 'styled-components'
import { useField } from 'formik'

const InputContext = React.createContext()

const Wrapper = styled.div``

export const BaseInput = styled.input`
  appearance: none;
  border: none;
`

const InternalComponent = ({ formikProps }) => {
  return (
    <InputContext.Provider value={formikProps}>
      <Wrapper></Wrapper>
    </InputContext.Provider>
  )
}

export const RenderFormikInput = ({ render, name, ...props }) => {
  const formikProps = useField(name)

  return render ? render(formikProps) : <InternalComponent name={name} />
}
