import { motion, useDragControls } from 'framer-motion'
import React, { forwardRef, useEffect, useRef, useState } from 'react'
import { CardsCarouselElement} from './CardsCarouselStyles'

const CardsCarousel = forwardRef(({ collectionData, CardObjectStyle },ref) => {
  const childrenRefs = useRef({});
  useEffect(() => {
    for (const i of Array(collectionData.length)){
      childrenRefs.current[i] = React.createRef(null);
    }
  },[]);

  // handle drag
  const carouselRef = useRef();
  const [yPosition, setYPosition] = useState(0);
  const handleDrag = (event,info) =>{

  }
  const maxDrag = (element)=>{
    return (- (element?.scrollWidth - element?.offsetWidth +(element?.offsetWidth/4)))
  }
  

  return (

      <CardsCarouselElement 
        as={motion.div} drag={'x'}
        onDrag={handleDrag}
        dragConstraints={{ left: maxDrag(carouselRef?.current), right: 0 }}
        ref={carouselRef}
        >
        {collectionData.map(
          (elementData, index) => (
            <CardObjectStyle
              key={index}
              data={elementData}
              ref={childrenRefs.current?.[index]}
            />
          )
        )}
      </CardsCarouselElement>

  )
});

export default CardsCarousel