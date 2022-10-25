import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { animate, motion, AnimatePresence, useMotionValue, useTransform, useAnimation } from "framer-motion";
import { Heading, Image, Text } from '../../globalStyles'
import { CardDescription, CardElementImage, CardElementImageHolder, CardElementImagesWrapper, CardElementWrapper, CardTextArea } from './CardElementStyles'
import {useInView} from 'react-intersection-observer';

const CardElement = forwardRef(({data, setVisited},ref) => {
    const [clicked, setClicked] = useState(false);

    // const cardVariants = {
    //     hover: {
    //         scale: 1.05,
    //         transition: { type: "spring", stiffness: 400, damping: 50 }
    //     },
    //     tap: {
    //         scale: 0.95,
    //         transition: { type: "spring", stiffness: 400, damping: 50 }
    //     }
    // }
    const textVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { delay: 0.5 } },
        exit: { opacity: 0 }
    }

    //animate the card
    const {ref:cardRef,inView,entry} = useInView({threshold:0.8});
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-800, 800], [20, -20]);
    const rotateY = useTransform(x, [-800, 800], [-20, 20]);
   

    


    // animation params
    const dragVariants = {
        initial: (index) =>({y: 20+10*index,opacity: 0}),
        animate: (index) =>({opacity:0.8, y:0,transition:{delay:0.2*index, duration:0.3+0.1*index}}),
        drag: { translateX:-10, scale: 1.2, transition:{duration:0.3, delay:0} }
    }
    const animation = useAnimation();
    useEffect(()=> {
        if(inView){
            animation.start('animate')
            setVisited();
            return;
        }
    },[inView,animation]);
    // look to the mouse
    const [initialAnimationEnded,setInitialAnimationEnded] = useState(false);
    const handleMouseMove = (e)=>{
        if (!entry?.target || !e?.clientX || initialAnimationEnded===false){
            return;
        }
        const rect = entry.target.getBoundingClientRect();
        const scale = 1/6;
        animate(x,-(e.clientX - rect.left - entry.target.offsetWidth/2)*scale);
        animate(y,-(e.clientY - rect.top)*scale);
    }
    const handleMouseHover = ()=>{
        if (initialAnimationEnded===false){
            return
        }
        return({ translateX:-10, scale: 1.2, transition:{duration:0.3, delay:0} })
    }
    return (
        <CardElementWrapper
            onClick={() => { setClicked(!clicked) }}
            as={motion.div}
            ref={node=>{
                cardRef(node);
                ref(node);
            }}
            // whileHover={"hover"}
            // whileTap={"tap"}
            // variants={cardVariants}
            onMouseMove={handleMouseMove}
            onMouseLeave={()=>{animate(x,0);animate(y,0);}}
            >
            <CardElementImagesWrapper
                as={motion.div}
                drag
                dragConstraints={{left:0,right:0,top:0,bottom:0}}
                dragElastic={0.1}
                whileHover={{ scale: 1.1 }}
            >
                    {data?.images?.map((image, index) => (
                        <CardElementImageHolder
                            as={motion.div}
                            key={index}
                            drag
                            dragConstraints={{left:0,right:0,top:0,bottom:0}}
                            dragElastic={0.1}
                            whileHover={handleMouseHover}
                            whileTap={{scale:1}}
                            style={{x,y,rotateX,rotateY,z:image[image.length-5]==='-'?200:600+index*50}}
                            initial='initial'
                            onAnimationComplete={()=>{setInitialAnimationEnded(true)}}
                            custom={index}
                            animate={animation}
                            variants={dragVariants}>
                            <CardElementImage src={image}/>
                        </CardElementImageHolder>
                    ))}
            </CardElementImagesWrapper>
            <CardTextArea>
                <AnimatePresence>
                    {!clicked &&
                        <Heading
                            key={0}
                            as={motion.div}
                            initial="initial"
                            animate="animate"
                            variants={textVariants}
                            exit="exit"
                            inverse="true"
                            fontSize={'clamp(2.1rem, 3vw, 2.2rem)'}>
                            {data?.title}
                        </Heading>
                        ||
                        <CardDescription
                            key={1}
                            as={motion.div}
                            initial="initial"
                            animate="animate"
                            variants={textVariants}
                            exit="exit">
                            {data?.descriptionEs}
                        </CardDescription>
                    }
                </AnimatePresence>
            </CardTextArea>
        </CardElementWrapper>
    )
})

export default CardElement