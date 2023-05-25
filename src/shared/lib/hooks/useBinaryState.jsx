import React from 'react'

export const useBinaryState = (defaultValue) => {
  const [value, setValue] = React.useState(!!defaultValue)

  const setTrue = React.useCallback(() => setValue(true), [])
  const setFalse = React.useCallback(() => setValue(false), [])
  const toggle = React.useCallback(() => setValue(x => !x), [])

  return [ value, setTrue, setFalse, toggle ]
}