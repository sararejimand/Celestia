import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Celestia from './pages/Celestia'




function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Celestia />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
