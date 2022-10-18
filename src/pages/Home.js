import React from 'react'
import { Page } from '../globalStyles'
import HeroSection from '../sections/Hero/HeroSection'
import IntroductionSection from '../sections/Introduction/IntroductionSection'

function Home() {
  return (
    <Page>
        <HeroSection/>
        <IntroductionSection/>
        <IntroductionSection/>
        <IntroductionSection/>
        <IntroductionSection/>
    </Page>
  )
}

export default Home