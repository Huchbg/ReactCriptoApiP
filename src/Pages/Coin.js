import { Loader, StyledLink } from "../Components/elements"
import { useParams } from "react-router-dom"
import { useFetch } from "CustomHooks/useFetch"
import { CoinBox } from "Components/CoinBox/CoinBox"
import { motion } from "framer-motion"

export const Coin = () => {
  const { id } = useParams()
  const { data, isLoading } = useFetch(
    `https://api.coingecko.com/api/v3/coins/${id}`,
    ["coinsData", "coin", id]
  )

  if (isLoading)
    return (
      <Loader>
        <span className="spin">Loading . . .</span>
      </Loader>
    )

  return (
    <motion.div
      style={{ width: "100%", height: "100vh" }}
      initial={{ height: 0 }}
      animate={{ height: "100vh" }}
      exit={{ y: -window.innerHeight, transition: { duration: 0.7 } }}
    >
      <StyledLink to="/ReactCriptoApiP">Back</StyledLink>
      <CoinBox
        name={data.name}
        symbol={data.symbol}
        price={data.market_data.current_price.usd}
        MarketCap={data.market_data.market_cap.usd}
        TotalVolume={data.market_data.total_volume.usd}
        High24={data.market_data.high_24h.usd}
        Low24={data.market_data.low_24h.usd}
        img={data.image.large}
      />
    </motion.div>
  )
}
