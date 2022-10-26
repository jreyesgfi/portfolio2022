import { useAnimation } from 'framer-motion';
import React, { forwardRef, useEffect, useState } from 'react'
import { twoMindsTitleEs } from '../../data/twoMindsData';
import { CenterWrapper, Heading, Section } from '../../globalStyles'
import { TwoMindsChangingShape, TwoMindsHeadingWrapper } from './TwoMindsSectionStyles';

const TwoMindsSection = forwardRef((props, ref) => {

    

    // animation config
    const modeDict = {0:'analyst',1:'creative', 2:'initial'}
    const changeShapeVariants = {
        initial: {
            opacity:0
        },
        analyst:{
            opacity:1,
            borderRadius:'0%',
            rotate:0,
            transition:{
                type: "spring", stiffness: 120
            }
        },
        creative:{
            scale: [1,1.15, 1],
            rotate: [0,90, 270],
            borderRadius: ["0","0%", "50%"],
            transition:{
                duration:0.6
            }
        }
    }

    // animation triggers
    const [modeState, setModeState] = useState(2);
    const controls = useAnimation();
    useEffect(() => {
        controls.start(modeDict[modeState])
    },[modeState]);
    const inView = props?.inView ?? false;
    
    // float effect

    return (
        <Section inverse height={'100vh'} ref={ref}>
            <TwoMindsHeadingWrapper>
                <Heading inverse>{twoMindsTitleEs(modeState)}</Heading>
            </TwoMindsHeadingWrapper>
            <CenterWrapper>
                <TwoMindsChangingShape
                    initial={'initial'}
                    animate={controls}
                    variants={changeShapeVariants}
                    onClick={()=>{setModeState(modeState===0?1:0)}}
                    >
                </TwoMindsChangingShape>
                {modeDict[modeState]}
            </CenterWrapper>
        </Section>
    )
});

export default TwoMindsSection