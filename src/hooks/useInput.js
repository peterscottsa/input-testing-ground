import React, { useContext } from 'react'
import { useId } from '@reach/auto-id'
import { useField } from 'formik'

export const InputContext = React.createContext()

export const useFormikInput = () => {
  const transmittedProps = useContext(InputContext)
  const [field, meta, helpers] = useField(transmittedProps.name)
  const id = useId(transmittedProps.id || transmittedProps.name)

  return {
    formikProps: { field, meta, helpers },
    transmittedProps,
    id
  }
}

export const useInput = () => {
  const transmittedProps = useContext(InputContext)
  const id = useId(transmittedProps?.id || transmittedProps?.name || undefined)
  
  return {
    transmittedProps,
    id
  }
}
