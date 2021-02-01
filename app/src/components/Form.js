import styled from '@emotion/styled'
import useCurrency from '../hooks/useCurrency'
import useCrypto from '../hooks/useCrypto'

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

const Form = () => {

  const Currencies = [
    { code: 'MXN', name: 'Mexican Peso' },
    { code: 'USD', name: 'American Dollar' },
    { code: 'EUR', name: 'Euros' },
    { code: 'GBP', name: 'Pounds' },
  ]

  const [currency, SelectCurrency] = useCurrency('Select Currency', '', Currencies)

  const [cryptoCurrency, SelectCrypto] = useCrypto('Select Crypto Currency', '')


  return (
    <form>
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
