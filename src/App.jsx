import React from 'react'
import Navbar from './components/Navbar'
import Homepage from './Pages/Homepage'
import Startuppage from './Pages/Startuppage'
import Welcomepage from './Pages/Welcomepage'
import WelcomeBottompage from './Pages/WelcomeBottompage'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar/>
      <Homepage/>
      <Startuppage/>
      <Welcomepage/>
      <WelcomeBottompage/>

      <Footer/>
    </div>
  )
}

export default App
