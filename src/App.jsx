import React, { useEffect } from 'react'
import Land from './pages/land'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CartPage from './pages/cartPage'
import Check from './pages/checkOut'
import Paid from './pages/paid'

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
          <Route path='/check' element={<Check />}/>
          <Route path='/paid' element={<Paid />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App