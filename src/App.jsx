import React from 'react'
import './App.css'

import Header from './sections/Header'
import Projects from './sections/Projects'
import AboutMe from './sections/AboutMe'
import Footer from './sections/Footer'

function App() {

  return (
    <div className="App">
      <Header />
      <Projects />
      <AboutMe />
      <Footer />
    </div>
  )
}

export default App
