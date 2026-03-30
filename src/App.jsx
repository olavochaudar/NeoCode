import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projetos from './components/Projetos'
import Contato from './components/Contato'
import Ferramentas from './components/Ferramentas'

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Projetos />
      <Ferramentas />
      <Contato />
    </div>
  )
}

export default App