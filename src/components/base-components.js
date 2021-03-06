import styled from 'styled-components'

export const BaseInput = styled.input`
  appearance: none;
  border: none;
  padding: 8px;
  width: 100%;
  outline: none;
`

export const BaseLabel = styled.label`
  color: lightgray;
  font-size: 12px;
  margin-bottom: 10px;
`

export const BaseError = styled.div`
  color: white;
  font-size: 12px;
  padding: 4px;
  background: lightcoral;
`

export const BorderedInputBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid lightgray;

  :focus-within {
    border: 2px solid blue;
  }
`

export const UnderlinedInputBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid lightgray;

  :focus-within {
    border-bottom: 2px solid blue;
  }
`
