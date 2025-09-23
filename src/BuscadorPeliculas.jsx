import React from 'react'
import { NavBar } from './Components/NavBar'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Buscador } from './Routes/Buscador'
import { Favoritas } from './Routes/Favoritas'
import { About } from './Routes/About'
import { Logo } from './Components/Logo'
import { Detalles } from './Routes/Detalles'

export const BuscadorPeliculas = () => {
  return (
    <>
        <NavBar/>
        <Logo/>
        <Routes>
          <Route path='/' element={ <Buscador/> }/>
          <Route path='/buscador' element={ <Buscador/> }/>
          <Route path='/about' element={ <About/> }/>
          <Route path='/favoritas' element={ <Favoritas/> }/>
          <Route path='/detalles/:id' element={ <Detalles/> }/>
          <Route path='/*' element={ <Navigate to = '/'/> }/>
        </Routes>
    </>
  )
}
