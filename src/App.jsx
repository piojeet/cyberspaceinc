import React from 'react'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import TestPage from './pages/TestPage'
import ClientAndPartners from './pages/ClientAndPartners'

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/careers' element={<TestPage />} />
        <Route path='/clients-partners' element={<ClientAndPartners />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App