import { animate, motion, useDragControls, useMotionValue, useSpring } from 'framer-motion'
import React, { forwardRef, useEffect, useRef, useState } from 'react'
import CardElement from '../CardElement/CardElement';
import { CardsCarouselElement} from './CardsCarouselStyles'

const CardsCarousel = forwardRef(({ collectionData, CardObjectStyle },ref) => {
  const childrenRefs = useRef({});

  // handle drag
  const carouselRef = useRef();

  const maxDrag = (element)=>{
    return (- (element?.scrollWidth - element?.offsetWidth +(element?.offsetWidth/10)))
  }

  // snap positions
  const [lastSnapPosition, setLastSnapPosition] = useState(0);
  const scrollXPos = useMotionValue(0);
  const lastReleasePos = useRef(0);

  // useEffect(() =>{
  //   console.log('hi')
  //   scrollXPos.onChange(setMotionValue)}, []);

  // // useEffect(()=>scrollXPos.onChange(carouselRef.current.style.cssText = `transform: translateX(${scrollXPos.current}px)`))
  // const handleDragEnd = (e,info)=>{
  //   console.log('end',info.offset.x)

  //   //save the last cursor position
  //   animate(scrollXPos,lastReleasePos.current+info.offset.x,{transition:{duration:2}})
  //   carouselRef.current.style.cssText = `transform: translateX(${scrollXPos.current}px)`;
  //   lastReleasePos.current += info.offset.x;
  // //   await new Promise(r => setTimeout(r, 2000));
  // //   const childToSnap = childrenRefs.current[lastSnapPosition];
  // //   const distanceToLeft = childToSnap.getBoundingClientRect().x
  // //   const halfWindowWidth = window.innerWidth/2
  // //   const halfElementWidth = childToSnap.offsetWidth/2;
  // //   const distanceToAdjust = distanceToLeft + halfElementWidth - halfWindowWidth;
  // //   // setScrollXPos(-distanceToAdjust)
  // }
  // const handleDrag = async (e,info)=>{
  
  //   console.log('velocity',info.velocity.x)
  //   animate(scrollXPos,lastReleasePos.current+info.offset.x)
  //   carouselRef.current.style.cssText = `transform: translateX(${scrollXPos.current}px)`;
  //   //   // console.log(info)
  //   // scrollXPos.set(400)
  // //   console.log(scrollXPos.current,motionValue)
  // }
  // // useEffect(()=>{
  // //   setMotionValue(motionValue+1);
  // // },[scrollXPos.current])
  // console.log(scrollXPos.current)

  return (

      <CardsCarouselElement 
        as={motion.div}
        drag={'x'}
        // onDragEnd={handleDragEnd}
        // onDrag={handleDrag}
        // onMouseMove={(e)=>{console.log(lastSnapPosition, e.clientX,scrollXPos)}}
        dragConstraints={{ left: maxDrag(carouselRef?.current), right: 0 }}
        ref={carouselRef}
        >
        {collectionData.map(
          (elementData, index) => (
            <CardElement
              key={index}
              data={elementData}
              ref={elem => {
                childrenRefs.current[index]= elem
              }}
              setVisited={()=>{setLastSnapPosition(index)}}
            />
          )
        )}
      </CardsCarouselElement>

  )
});

export default CardsCarousel