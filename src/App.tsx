import '../public/scss/style.scss'
import type { ReactElement } from 'react'

import '../public/fonts/stylesheet.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'

import SearchCruisePage from './pages/SearchCruise'

function App(): ReactElement {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="/tim-du-thuyen" element={<SearchCruisePage />} />

        </Routes>
        </BrowserRouter>
  )
}

export default App
