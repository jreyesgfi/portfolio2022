import React, { forwardRef, useRef } from 'react'
import CardElement from '../../components/CardElement/CardElement'
import { IDoCollectionData } from '../../data/IDoData'
import { Section } from '../../globalStyles';

import CardsCarousel from '../../components/CardsCarousel.js/CardsCarousel';


const WhatIDoSection = forwardRef((props, ref) => {
  
  return (
    <Section inverse height={'100vh'} ref={ref}>
      <CardsCarousel
        collectionData={IDoCollectionData}
        CardObjectStyle={CardElement}
      >
      </CardsCarousel>
    </Section>
  )
})

export default WhatIDoSection