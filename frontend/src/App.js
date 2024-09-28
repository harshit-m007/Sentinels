import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "./components/Landingpage"
import Retouching from "./components/Retouching"
import Splicing from "./components/Splicing"
import Copymove from "./components/Copymove"

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/retouching" element={<Retouching />} />
          <Route path="/splicing" element={<Splicing />} />
          <Route path="/copy-move" element={<Copymove />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
