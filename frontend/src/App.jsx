import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Routes>
      {/* <Route path='/' element={<Home>}></Route> */}
      <Route path='/sobre' element={<Sobre/>}></Route>
    </Routes>
    </>
  )
}

export default App
