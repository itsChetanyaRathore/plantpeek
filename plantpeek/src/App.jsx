import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import PlantSlider from './components/PlantSlider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      {/* <PlantSlider /> */}
      <HeroSection />
      <Footer />
    </>
  )
}

export default App
