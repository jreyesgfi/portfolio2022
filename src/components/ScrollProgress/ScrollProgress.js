import React, { useEffect, useRef, useState } from 'react'
import { homeSectionsData } from '../../data/homeProgressData'
import { ProgressCircleIcon, ProgressBarContainer, ProgressCircle, ProgressCircleContainer, ProgressCircleNumber, ScrollProgressContainer, ProgressBarColor } from './ScrollProgressStyles'

function ScrollProgress({ stage, addCallback }) {
    // defining in just one place the sections data
    const sectionsData = homeSectionsData;

    // scroll progress value
    const [progressState, setProgressState] = useState();

    // adjust scroll to excludes first section
    const adjustScroll = (scroll) => {
        const nSectionChanges = Object.keys(sectionsData).length-1;
        const firstSectionPercent = 100/nSectionChanges;
        const scrollAdjusted = (scroll-firstSectionPercent)*(nSectionChanges)/(nSectionChanges-1);
        return (scrollAdjusted>0?scrollAdjusted:0);
    }

    // scroll listener
    const scrollListenerAdded = useRef(0);
    useEffect(() => {
        if (scrollListenerAdded.current === 0
            && addCallback) {
            const functionCallback = (progress) => {
                const adjustedScroll = adjustScroll(progress);
                setProgressState(adjustedScroll)
            }
            addCallback?.([functionCallback,'progressPercentage']);
            scrollListenerAdded.current = 1; 
        }
        
    }, [addCallback]);


    return (
        <ScrollProgressContainer draft={stage === 0 ? 1 : 0}>
            <ProgressCircleContainer>
                {Object.keys(sectionsData).map((name, index) => {
                    if (index === 0) {
                        return null
                    }
                    return (
                        <ProgressCircle
                            key={index}
                            visited={(stage >= index) ? 1 : 0}>
                            <ProgressCircleIcon src={'assets/icons/checkYellow.png'} />
                            <ProgressCircleNumber inverse>
                                {index}
                            </ProgressCircleNumber>
                        </ProgressCircle>
                    )
                }
                )}
            </ProgressCircleContainer>
            <ProgressBarContainer>
                <ProgressBarColor progress={progressState}>
                </ProgressBarColor>
            </ProgressBarContainer>
        </ScrollProgressContainer>
    )
}

export default ScrollProgress