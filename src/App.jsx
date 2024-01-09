import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { ThemeProvider, useTheme } from './contexts/ThemeContext';

function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <main className={`App ${theme}`}>
             <header>
        <h1>React Dark Mode</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </header>
      <main>
        <p>This is a sample React app with light and dark mode.</p>
      </main>

    </main>
  )
}

export default App
