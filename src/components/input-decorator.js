import React from 'react'
import { useFormikInput } from '../hooks/useInput'
import { ErrorMessage } from 'formik'

export const withFormikInput = (BaseComponent) =>
  React.forwardRef((props, ref) => {
    const { transmittedProps, formikProps, id } = useFormikInput()
    console.log(id)
    return (
      <BaseComponent
        ref={ref}
        id={id}
        {...formikProps.field}
        {...transmittedProps}
      />
    )
  })

export const withFormikLabel = (BaseComponent) =>
  React.forwardRef(({ className, render, children, ...props }, ref) => {
    const { transmittedProps, formikProps, id } = useFormikInput()

    if (render) {
      return render(formikProps.field, formikProps.meta)
    }

    return (
      <BaseComponent htmlFor={id} className={className} {...props}>
        {children || transmittedProps.label}
      </BaseComponent>
    )
  })

export const withFormikError = (BaseComponent) =>
  React.forwardRef(({ render, ...props }, ref) => {
    const { transmittedProps, formikProps } = useFormikInput()

    if (render) {
      return render(formikProps.field, formikProps.meta)
    }

    return (
      <ErrorMessage name={transmittedProps.name} component={BaseComponent} />
    )
  })
