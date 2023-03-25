import {
  StyledRow,
  StyledImage,
  StyledTitle,
  StyledSpan,
  StyledPrice,
  StyledPriceBig,
  StyledLink,
} from "./elements"

export const Row = (props) => {
  const path = `/coin/${props.id}`

  let green = "green"
  if (props.percent < 0) green = "red"

  return (
    <StyledRow>
      <StyledImage src={props.img} />
      <StyledTitle>{props.name}</StyledTitle>
      <StyledSpan>{props.symbol}</StyledSpan>
      <StyledPrice>$ {props.price.toLocaleString("en-US")}</StyledPrice>
      <StyledSpan color={green}>{props.percent.toFixed(2)}%</StyledSpan>
      <StyledPriceBig>
        $ {props.Totprice.toLocaleString("en-US")}
      </StyledPriceBig>
      <StyledLink to={path}>More Info</StyledLink>
    </StyledRow>
  )
}
