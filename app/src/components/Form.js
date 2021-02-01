import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled'
import useCurrency from '../hooks/useCurrency'
import useCrypto from '../hooks/useCrypto'
import axios from 'axios';
import Error from './Error';


const Button = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition:background-color .3s ease;

  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`

const Form = ({ setCurrency, setCryptoCurrency }) => {

  const Currencies = [
    { code: 'MXN', name: 'Mexican Peso' },
    { code: 'USD', name: 'American Dollar' },
    { code: 'EUR', name: 'Euros' },
    { code: 'GBP', name: 'Pounds' },
  ]

  const [cryptoCurrencies, setCryptoCurrencies] = useState([])

  const [currency, SelectCurrency] = useCurrency('Select Currency', '', Currencies)

  const [cryptoCurrency, SelectCrypto] = useCrypto('Select Crypto Currency', '', cryptoCurrencies)

  const [error, setError] = useState(false)


  useEffect(() => {

    const fetchApi = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
      const response = await axios.get(url)
      setCryptoCurrencies(response.data.Data)
    }
    fetchApi()
  }, [])

  const handleSubmit = (e) => {

    e.preventDefault()

    if (currency === '' || cryptoCurrency === '') {
      setError(true)
      return
    }
    setError(false)
    setCurrency(currency)
    setCryptoCurrency(cryptoCurrency)
  }

  return (

    <form
      onSubmit={handleSubmit}
    >
      {error && <Error message='Incompleted Form' />}
      <SelectCurrency />
      <SelectCrypto />
      <Button
        type='submit'
        value='Check'
      />
    </form>
  );
}

export default Form;
