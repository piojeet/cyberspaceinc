import React from 'react'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import TestPage from './pages/TestPage'

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/test' element={<TestPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App