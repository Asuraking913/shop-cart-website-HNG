import React, { useEffect } from 'react'
import Land from './pages/land'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CartPage from './pages/cartPage'

function App() {

  useEffect(() => {
    document.title = "Shopping Cart Website"
  })

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Land />}/>
          <Route path='/cart' element={<CartPage />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App