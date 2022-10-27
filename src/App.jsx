import React from 'react'
import './App.css'

import Header from './sections/Header'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function App() {

  return (
    <div className="App">
      <Header />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
