import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { BuscadorPeliculas } from './BuscadorPeliculas'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <BuscadorPeliculas />
    </StrictMode>
  </BrowserRouter>,
)
