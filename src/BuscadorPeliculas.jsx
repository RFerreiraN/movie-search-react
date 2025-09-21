import React from 'react'
import { NavBar } from './Components/NavBar'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Buscador } from './Routes/Buscador'
import { Historial } from './Routes/Historial'
import { About } from './Routes/About'

export const BuscadorPeliculas = () => {
  return (
    <>
        <NavBar/>
        <Routes>
          <Route path='/' element={ <Buscador/> }/>
          <Route path='/buscador' element={ <Buscador/> }/>
          <Route path='/about' element={ <About/> }/>
          <Route path='/historial' element={ <Historial/> }/>
          <Route path='/*' element={ <Navigate to = '/'/> }/>
        </Routes>
    </>
  )
}
