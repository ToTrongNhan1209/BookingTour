import '../public/scss/style.scss'
import type { ReactElement } from 'react'

import '../public/fonts/stylesheet.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Hotel from './pages/Hotel'
import SearchCruisePage from './pages/SearchCruise'
import SearchHotelPage from './pages/SearchHotel'
function App(): ReactElement {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/khach-san" element={<Hotel />} />
          <Route path="/tim-du-thuyen" element={<SearchCruisePage />} />
          <Route path="/tim-khach-san" element={<SearchHotelPage />} />
        </Routes>
        </BrowserRouter>
  )
}

export default App
