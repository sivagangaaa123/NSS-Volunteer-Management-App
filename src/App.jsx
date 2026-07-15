import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddVolunteer from './components/AddVolunteer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ViewAllVolunteers from './components/ViewAllVolunteers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<AddVolunteer/>} />
      <Route path='/view' element={<ViewAllVolunteers/>} /> 
     </Routes>
     </BrowserRouter>
     </>
  )
}

export default App
