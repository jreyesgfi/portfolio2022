import { useAnimation, useMotionValue, useTime, useTransform } from 'framer-motion';
import React, { forwardRef, useEffect, useRef, useState } from 'react'
import SwitchTwoMinds from '../../components/SwitchTwoMinds/SwitchTwoMinds';
import { twoMindsTitleEs } from '../../data/twoMindsData';
import { CenterWrapper, globalColors, Heading, Section } from '../../globalStyles'
import { TwoMindsChangingShape, TwoMindsSwitchWrapper } from './TwoMindsSectionStyles';

const TwoMindsSection = forwardRef((props, ref) => {

    // animation config
    const changeShapeVariants = {
        initial: {
            opacity:1,
            backgroundColor:globalColors.dark.primary,
            // transition:{
            //     duration:1.8,
            //     type: "spring",
            //     stiffness: 100,
            //     repeat:Infinity,
            //     repeatType: "reverse",
            //     repeatDelay:0.15
            // }
        },
        creativeZen:{
            scaleX:[1, 1.02, 1.02,],
            scaleY:[]
        },
        analyst:{
            scaleX:1,
            opacity:1,
            borderRadius:'0%',
            backgroundColor:globalColors.color.primary,
            rotate:0,
            transition:{
                type: "spring", stiffness: 100
            }
        },
        creative:{
            scale: [1,1.2, 1.15],
            rotate: [0,45, 180],
            borderRadius: ["0","0", "50%"],
            backgroundColor:globalColors.color.primary,
            transition:{
                duration:0.8
            }
        }
    }

    // animation triggers
    const [modeState, setModeState] = useState(0);
    const modeDict = {'-1':'analyst',1:'creative', 0:'initial'}
    const headingDict = {'-1':'Analista',0:'Dos formas de pensar', 1:'Creativo'}
    const controls = useAnimation();
    useEffect(() => {
        controls.start(modeDict[modeState])
            .then(() => {
                
            });

    },[modeState]);
    const inView = props?.inView ?? false;
    
    // zen effect
    const time = useTime();
    const y = useTransform(
        time,value=>modeState!==0?
        (Math.cos(value/1500)*20+10):0
    )
    const scaleX = useTransform(
        time,value=>modeState===1?
            (1-Math.cos(value/1000)/20):1
    )
    const scaleY = useTransform(
        time,value=>modeState===1?
            (1-Math.sin(value/1000)/20):1
    )

    return (
        <Section inverse height={'100vh'} ref={ref}>
            <TwoMindsSwitchWrapper>
                <Heading inverse>{headingDict[modeState]}</Heading>
                <SwitchTwoMinds setParentState={(newState)=>setModeState(newState)}/>
            </TwoMindsSwitchWrapper>
            <CenterWrapper>
                <TwoMindsChangingShape
                    initial={'initial'}
                    animate={controls}
                    variants={changeShapeVariants}
                    onClick={()=>{setModeState(modeState===0?1:0)}}
                    style={{y,scaleX, scaleY}}
                    >
                </TwoMindsChangingShape>
            </CenterWrapper>
        </Section>
    )
});

export default TwoMindsSection