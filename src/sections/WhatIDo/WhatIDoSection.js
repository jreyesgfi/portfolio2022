import React, { forwardRef, useRef } from 'react'
import IDoElement from '../../components/IDoElement/IDoElement'
import { IDoCollectionData } from '../../data/IDoData'
import { Section } from '../../globalStyles';

import CardsCarousel from '../../components/CardsCarousel.js/CardsCarousel';


const WhatIDoSection = forwardRef((props, ref) => {
  
  return (
    <Section inverse height={'100vh'} ref={ref}>
      <CardsCarousel
        collectionData={IDoCollectionData}
        CardObjectStyle={IDoElement}
      >
      </CardsCarousel>
    </Section>
  )
})

export default WhatIDoSection