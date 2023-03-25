//import  styled  from "styled-components"
import { Routes, Route, useLocation } from "react-router-dom"
import { Home } from "./Pages/Home"
import { Coin } from "./Pages/Coin"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { AnimatePresence } from "framer-motion"

function App() {
  const location = useLocation()

  const client = new QueryClient()
  return (
    <QueryClientProvider client={client}>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/coin/:id" element={<Coin />} />
        </Routes>
      </AnimatePresence>
    </QueryClientProvider>
  )
}

export default App
