import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled'
import Form from './components/Form'
import image from './cryptomonedas.png'
import axios from 'axios';
import Quote from './components/Quote';

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width:992px) {
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2 rem;
  }
`

const Image = styled.img`
  max-width: 100%;
  margin-top: 5rem
`

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #fff;
  text-align:left;
  font-weight:700px;
  font-size: 50px;
  margin-top: 80px;
  margin-bottom: 50px;

  &&::after{
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
  }
`

const App = () => {

  const [currency, setCurrency] = useState('')
  const [cryptoCurrency, setCryptoCurrency] = useState('')
  const [apiResult, setApiResult] = useState({})

  useEffect(() => {

    if (currency === '') return //  check if it's first time of loading to not to execute function

    const consultApi = async () => {
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCurrency}&tsyms=${currency}`
      const response = await axios.get(url)
      setApiResult(response.data.DISPLAY[cryptoCurrency][currency])
    }
    consultApi()
  }, [currency, cryptoCurrency])

  return (
    <Container>
      <div>
        <Image
          src={image}
          alt='crypto-image'
        />
      </div>

      <div>
        <Heading>Crypto Prices</Heading>
        <Form
          setCurrency={setCurrency}
          setCryptoCurrency={setCryptoCurrency}
        />
        <Quote apiResult={apiResult} />
      </div>
    </Container>
  );
}

export default App;
