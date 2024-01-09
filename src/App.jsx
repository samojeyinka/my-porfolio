import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useThemeHook } from './contexts/ThemeProvider'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0);
  const [theme] = useThemeHook();

  return (
    <main className={theme ? 'bg-light' : 'bg-dark'}>
        <Header/>
      <div clas>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

    </main>
  )
}

export default App
