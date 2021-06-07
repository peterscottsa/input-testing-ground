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

export function useMemoCompare(next, compare) {
  // Ref for storing previous value
  const previousRef = useRef()
  const previous = previousRef.current
  // Pass previous and next value to compare function
  // to determine whether to consider them equal.

  // If not equal update previousRef to next value.
  // We only update if not equal so that this hook continues to return
  // the same old value if compare keeps returning true.

  useEffect(() => {
    if (!isEqual(previous, next)) {
      previousRef.current = next
    }
  })

  console.log(isEqual(previous, next))
  // Finally, if equal then return the previous value
  return isEqual(previous, next) ? previous : next
}
