import './App.module.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useContext, useState } from 'react'
import { ThemeContext } from './context/ThemeContext'
import { MainLayout } from './layouts/MainLayout'
import { Today } from './pages/Today'
import { ByDate } from './pages/ByDate'
import { About } from './pages/About'
import { NoPage } from './pages/NoPage'

function App() {

  const { isDarkMode, handleChangeDarkMode } = useContext(ThemeContext)
  console.log("isDarkMode", isDarkMode);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<MainLayout />}>
            <Route index element={<Today theme={isDarkMode} action={handleChangeDarkMode}/>} />
            <Route path={'/byDate'} element={<ByDate theme={isDarkMode} action={handleChangeDarkMode} />} />
            <Route path={'/about'} element={<About theme={isDarkMode} action={handleChangeDarkMode}/>} />
            <Route path={'/*'} element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
