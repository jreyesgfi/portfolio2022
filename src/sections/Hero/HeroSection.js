import React, { forwardRef } from 'react'
import HtmlTagContainer from '../../components/HtmlTagContainer/HtmlTagContainer'
import { heroTextEs, heroTitleEs } from '../../data/heroData'
import {MainHeading, Section, Text } from '../../globalStyles'
import {HeroTextContainer } from './HeroSectionStyles'

const HeroSection = forwardRef((props,ref)=> {
  return (
    <Section height={'100vh'} ref={ref}>
      <HeroTextContainer inset={'0'}>
        <HtmlTagContainer tag={'h1'} direction={'row'}>
          <MainHeading>
            {heroTitleEs}
          </MainHeading>
        </HtmlTagContainer>
        <HtmlTagContainer tag={'p'}>
          <Text fontSize={'16pt'}>
            {heroTextEs}
          </Text>
        </HtmlTagContainer>
      </HeroTextContainer>
    </Section>
  )
})

export default HeroSection