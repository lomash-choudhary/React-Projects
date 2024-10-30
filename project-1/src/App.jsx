import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navigation } from './Components/Navigation'
import { Hero } from './Components/HeroSection'

function App() {

  return <div>
    <div>
      <Navigation />
      <Hero />
    </div>
  </div>
}

export default App
