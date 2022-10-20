import React, { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import ScrollProgress from '../components/ScrollProgress/ScrollProgress'
import { Page } from '../globalStyles'
import ScrollListener from '../listeners/ScrollListener'
import HeroSection from '../sections/Hero/HeroSection'
import IntroductionSection from '../sections/Introduction/IntroductionSection'

function Home() {
  const scrollListenerRef = useRef();
  const pageRef = useRef();


  const [stageState,setStageState] = useState(0);
  
  const {ref: heroRef, inView:heroInView} = useInView({ threshold: 0.4});
  const {ref: introductionRef, inView:introductionInView} = useInView({ threshold: 0.4});
  const {ref: whatIDoRef, inView:whatIDoInView} = useInView({ threshold: 0.4});
  const {ref: twoMindsRef, inView:twoMindsInView} = useInView({ threshold: 0.4});
  const {ref: projectsRef, inView:projectsInView} = useInView({ threshold: 0.4});
  const {ref: contactRef, inView:contactInView} = useInView({ threshold: 0.4});
  const refsArray = [heroInView,introductionInView, whatIDoInView, twoMindsInView, projectsInView, contactInView];

  useEffect(()=>{
    refsArray.forEach((element,index)=>{
      if (element===true){
        setStageState(index);
      }
    })
  },[...refsArray])

  const handleScroll = ()=>{
    scrollListenerRef.current?.updateValues();
  }


  return (
    <Page onScroll={handleScroll} ref={pageRef}>
        <ScrollListener ref={scrollListenerRef} pageRef={pageRef}/>
        <ScrollProgress 
          stage={stageState}
          addCallback={scrollListenerRef.current?.addCallback}/>
        <HeroSection ref={heroRef}/>
        <IntroductionSection ref={introductionRef}/>
        <IntroductionSection/>
        <IntroductionSection/>
        <IntroductionSection/>
    </Page>
  )
}

export default Home