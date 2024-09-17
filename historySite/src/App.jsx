import './App.module.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MainLayout } from './layouts/MainLayout'
import { Today } from './pages/today'
import { ByDate } from './pages/byDate'
import { Since } from './pages/since'
import { NoPage } from './pages/NoPage'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<MainLayout />}>
            <Route index element={<Today/>}/>
            <Route path={'/byDate'} element={<ByDate />} />
            <Route path={'/since'} element={<Since />} />
            <Route path={'/*'} element={<NoPage />} />  
          </Route>
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
