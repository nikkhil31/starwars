import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Details, Main } from '../pages'

const Navigation = () => {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path=':id' element={<Details />} />
    </Routes>
  )
}

export default Navigation
