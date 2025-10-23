import React from 'react'
import HomeHero from '../components/HomeHero'
import Features from '../components/Features'
import HomeServices from '../components/HomeServices'
import HomeAction from '../components/HomeAction'
import FAQ from '../components/FAQ'

function Home() {
  return (
    <div>
      <HomeHero />
      <Features />
      <HomeServices />
      <HomeAction />
      <FAQ />
    </div>
  )
}

export default Home