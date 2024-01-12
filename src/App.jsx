import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import Articles from './pages/Articles'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
    </Route>
  )
)

function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
    <div className={` app ${theme}`}>
      <div className="container">
       
      <RouterProvider router={router}/>
        </div>
    </div>
    </>


  )
}

export default App
