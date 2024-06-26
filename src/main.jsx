import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Components/All/Home.jsx'
import StarNotes from './Components/Important/StarNotes.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<App/>}>
    <Route path="/Home" element={<Home/>}/>
    <Route path='/Important' element={<StarNotes/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
