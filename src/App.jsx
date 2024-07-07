import React from 'react'
import Land from './pages/land'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Land />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App