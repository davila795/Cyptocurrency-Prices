import React, { useState } from 'react';
import styled from '@emotion/styled'

const Label = styled.label`
  font-family: 'Bebas Neue', cursive;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.8rem;
  margin-top: 1rem;
  display: block
`

const Select = styled.select`
  width: 100%;
  display: block;
  padding: .5rem;
  -webkit-appearance: none;
  border-radius: 10px;
  border: none;
  font-size: 1.2rem
`

const useCurrency = (label, initialState, options) => {

  const [state, setState] = useState(initialState)

  const SelectCurrency = () => (
    <>
      <Label>{label}</Label>
      <Select
        onChange={e => setState(e.target.value)}
        value={state}
      >
        <option value=''>-- Select --</option>
        {options.map(option => (
          <option key={option.code} value={option.code}>{option.name}</option>
        ))}
      </Select>
    </>
  )

  return [state, SelectCurrency, setState];
}

export default useCurrency;
