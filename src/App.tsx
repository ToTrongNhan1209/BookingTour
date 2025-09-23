import '../public/scss/style.scss'
import type { ReactElement } from 'react'

import '../public/fonts/stylesheet.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Hotel from './pages/Hotel'
import SearchCruisePage from './pages/SearchCruise'
import SearchHotelPage from './pages/SearchHotel'
import Blog from './pages/Blog'
import BlogDetail from './pages/BlogDetail'
import Privacy from './pages/Privacy'
import Policy from './pages/Policy'
import Instructions from './pages/Instructionsforuse'
import FormofPayment from './pages/FormofPayment'
import CruiseDetail from './pages/CruiseDetail'
function App(): ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/khach-san" element={<Hotel />} />
        <Route path="/tim-du-thuyen" element={<SearchCruisePage />} />
        <Route path="/chi-tiet-du-thuyen/:slug" element={<CruiseDetail />} />
        <Route path="/tim-khach-san" element={<SearchHotelPage />} />
        <Route path="/tin-tuc" element={<Blog />} />
        <Route path="/chi-tiet-tin-tuc/:slug" element={<BlogDetail />} />
        <Route path="/dieu-khoan-su-dung" element={<Privacy />} />
        <Route path="/chinh-sach-rieng-tu" element={<Policy />} />
        <Route path="/huong-dan-su-dung" element={<Instructions />} />
        <Route path="/hinh-thuc-thanh-toan" element={<FormofPayment />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
