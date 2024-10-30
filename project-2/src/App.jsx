import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navigation } from './Components/Navigation/Navigation'
import { ContactHeader } from './Components/ContactHeader/ContactHeader'
import { ContactForm } from './Components/ContactForm/ContactForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navigation />
      <main className='mainContainer'>
      <ContactHeader />
      <ContactForm />
      </main>
     
    </div>
  )
}

export default App
