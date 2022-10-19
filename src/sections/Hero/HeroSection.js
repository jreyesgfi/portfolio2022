import React from 'react'
import HtmlTagContainer from '../../components/HtmlTagContainer/HtmlTagContainer'
import { heroTextEs, heroTitleEs } from '../../data/HeroData'
import {MainHeading, Section, Text } from '../../globalStyles'
import {HeroTextContainer } from './HeroSectionStyles'

function HeroSection() {
  return (
    <Section height={'100vh'}>
      <HeroTextContainer inset={'0'}>
        <HtmlTagContainer tag={'h1'} direction={'row'}>
          <MainHeading>
            {heroTitleEs}
          </MainHeading>
        </HtmlTagContainer>
        <HtmlTagContainer tag={'p'}>
          <Text fontSize={'20pt'}>
            {heroTextEs}
          </Text>
        </HtmlTagContainer>
      </HeroTextContainer>
    </Section>
  )
}

export default HeroSection