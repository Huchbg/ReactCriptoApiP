import { MainApp } from "MainApp"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { BrowserRouter as Router } from "react-router-dom"
function App() {
  const client = new QueryClient()

  return (
    <QueryClientProvider client={client}>
      <Router>
        <MainApp />
      </Router>
    </QueryClientProvider>
  )
}

export default App
