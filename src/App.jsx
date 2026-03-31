import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projetos from './components/Projetos'
import Contato from './components/Contato'
import Ferramentas from './components/Ferramentas'
import LogoInicio from './components/LogoInicio'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <LogoInicio />
      <Hero />
      <Projetos />
      <Ferramentas />
      <Contato />
      <Footer />
    </div>
  )
}

export default App