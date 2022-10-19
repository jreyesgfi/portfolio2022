import React from 'react'
import { HomeSectionsData } from '../../data/HomeProgressData'
import { ProgressCircleIcon, ProgressBarBackground, ProgressBarContainer, ProgressCircle, ProgressCircleContainer, ProgressCircleNumber, ScrollProgressContainer } from './ScrollProgressStyles'

function ScrollProgress({stage}) {
    console.log(stage)
  return (
    <ScrollProgressContainer draft={stage===0?1:0}>
        <ProgressCircleContainer>
            {Object.keys(HomeSectionsData).map((name,index)=>{
                if (index === 0) {
                    return null
                }
                return(
                    <ProgressCircle
                    key={index}
                    visited={(stage>=index)?1:0}>
                        <ProgressCircleIcon src={'assets/icons/checkYellow.png'}/>
                        <ProgressCircleNumber inverse>
                            {index}
                        </ProgressCircleNumber>
                    </ProgressCircle>
                )}
            )}
        </ProgressCircleContainer>
        <ProgressBarContainer>
            <ProgressBarBackground>
            </ProgressBarBackground>
        </ProgressBarContainer>
    </ScrollProgressContainer>
  )
}

export default ScrollProgress