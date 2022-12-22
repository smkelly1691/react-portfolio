import React from 'react'
import About from './components/About/About'
import Contacts from './components/Contacts/Contacts'
import Experience from './components/Experience/Experience'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Services from './components/Services/Services'
import Testimonials from './components/Testimonials/Testimonials'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Testimonials />
      <Contacts />
      <Footer />
    </>
  )
}

export default App
