import React, { useRef, useEffect } from 'react'
import isEqual from 'lodash.isequal'
import { useField } from 'formik'

export function useClonedFormikInputChildren(props, children) {
  const [field] = useField(props.name)

  const clonedChildren = React.Children.map(children, (child) => {
    switch (child.type.displayName) {
      case 'Input':
        return React.cloneElement(child, {
          ...field,
          ...props,
          className: undefined
        })

      case 'InputBlock':
      case 'Content':
      case 'Error':
      case 'Label':
        return React.cloneElement(child, { ...props, className: undefined })

      default:
        console.warn(
          'This component only accepts Label, BaseInput, Content, FormikBlock and Error as children. Have you set your displayName correctly?'
        )
        return null
    }
  })

  return clonedChildren
}
