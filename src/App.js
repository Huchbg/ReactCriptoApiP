//import  styled  from "styled-components"
import { BrowserRouter as Router ,Routes,Route} from "react-router-dom";
import { Home } from "./Pages/Home";
import { Coin } from "./Pages/Coin";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

function App() {
  const client =new QueryClient()
  return (
    <QueryClientProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/coin/:id" element={<Coin />}/>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}



export default App;
