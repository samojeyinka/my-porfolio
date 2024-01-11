import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import Articles from './pages/Articles'
import Footer from './components/Footer'
import Home from './pages/Home'

function App() {
  const { theme, toggleTheme } = useTheme();
  return (
  
    <div className={` app ${theme}`}>
      <div className="container">
        <Home/>
        </div>
    </div>


  )
}

export default App
