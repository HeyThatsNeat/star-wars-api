import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import StarShips from './pages/StarShips/StarShips'
import StarShipDetails from './pages/StarShipDetails/StarShipDetails'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<StarShips />} />
        <Route path='/:starShipId' element={<StarShipDetails />} />
      </Routes>
    </>
  )
}

export default App
