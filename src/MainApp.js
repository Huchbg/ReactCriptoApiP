//import  styled  from "styled-components"
import { Routes, Route, useLocation } from "react-router-dom"
import { Home } from "./Pages/Home"
import { Coin } from "./Pages/Coin"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { AnimatePresence } from "framer-motion"

export function MainApp() {
  const location = useLocation()

  const client = new QueryClient()
  return (
    <QueryClientProvider client={client}>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/ReactCriptoApiP" element={<Home />} />
          <Route path="/coin/:id" element={<Coin />} />
          <Route path="*" component={<div>NotFound</div>} />
        </Routes>
      </AnimatePresence>
    </QueryClientProvider>
  )
}
