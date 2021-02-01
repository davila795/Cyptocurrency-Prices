import styled from '@emotion/styled'

const Container = styled.div`
  color:#fff;
  font-family:Arial, Helvetica, sans-serif
`

const Price = styled.p`
  font-size:30px;
  span {
    font-weight:bold
  }
`

const Info = styled.p`
  font-size: 18px;
  span {
    font-weight:bold
  }
`

const Quote = ({ apiResult }) => {
  console.log(apiResult)
  if (Object.keys(apiResult).length === 0) return null

  return (
    <Container>
      <Price>Price: <span>{apiResult.PRICE}</span></Price>
      <Info>Max. Daily Price: <span>{apiResult.HIGHDAY}</span></Info>
      <Info>Min. Daily Price: <span>{apiResult.LOWDAY}</span></Info>
      <Info>Last 24h Variation: <span>{apiResult.CHANGE24HOUR}</span></Info>
      <Info>Last Hour Variation: <span>{apiResult.CHANGEHOUR}</span></Info>
      <Info>Updated: <span>{apiResult.LASTUPDATE}</span></Info>
    </Container>
  );
}

export default Quote;
