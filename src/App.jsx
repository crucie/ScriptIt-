import { useState } from 'react'
import './App.css'
// import NavLeft from './Components/NavBar/NavLeft'
import NoteList from './Components/NotesList/NoteList'
import NavBar from './Components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'

function App() {
  
  return (
    <>
    <div className='flex flex-row'>
    <NavBar/>
    <Outlet/>
    </div>
    </>
  )
}

export default App
