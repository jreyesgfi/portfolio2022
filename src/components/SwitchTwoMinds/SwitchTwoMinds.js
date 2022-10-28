import { animate, useMotionValue, useTransform } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react'
import { globalColors } from '../../globalStyles';
import { SwitchHolder, SwitchPivot } from './SwitchTwoMindsStyles'

const SwitchTwoMinds = ({setParentState}) => {
    const holderRef = useRef();
    
    // animation params
    const x = useMotionValue(0);
    const xInput = [-100, 0, 100];
    const color = useTransform(x, xInput, [
        globalColors.color.primary,
        globalColors.dark.primary,
        globalColors.red.primary
    ]);

    // proximity behaviour
    const [sideState, setSideState] = useState(0);
    const proximity = ()=>{
        var state = 0;
        var finalX = 0;
        if (x.current<-30){
            state = -1;
            finalX = -50;
        }
        else if (x.current>30){
            state = 1;
            finalX = 50;
        }
        if (state!==sideState){
            setSideState(state);
        }
        animate(x,finalX);
    }

    // pass the changes
    useEffect(()=>{
        setParentState?.(sideState);
    },[sideState])
    
    const toggleConstraints = {
        '-1':holderRef,
        '0':{left:0,right:0},
        '1':holderRef
    }
    const toggleElastic = {
        '-1':0,
        0:0.3,
        1:0
    }

    // decide position
    return (
        <SwitchHolder ref={holderRef}>
            The state is {sideState}
            <SwitchPivot
                drag="x"
                dragConstraints={toggleConstraints[sideState]}
                dragElastic={toggleElastic[sideState]}
                onDragEnd={()=>proximity()}
                style={{x, backgroundColor:color}}
            />
        </SwitchHolder>
    )
}

export default SwitchTwoMinds