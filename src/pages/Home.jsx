import React from 'react'
import Hero from '../components/Home/Hero'
import About from '../components/Home/About'
import Skills from '../components/Home/Skills'
import GitHubStats from '../components/Home/GitHubStats'

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <GitHubStats />
    </div>
  )
}

export default Home