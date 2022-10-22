import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useAnimation } from "framer-motion";
import { Heading, Image, Text } from '../../globalStyles'
import { HolderToAnimate, IDoDescription, IDoElementImage, IDoElementImageHolder, IDoElementImagesWrapper, IDoElementWrapper, IDoTextArea } from './IDoElementStyles'
import {useInView} from 'react-intersection-observer';

const IDoElement = ({ data }) => {
    const [clicked, setClicked] = useState(false);

    const cardVariants = {
        hover: {
            scale: 1.1,
            transition: { type: "spring", stiffness: 400, damping: 50 }
        },
        tap: {
            scale: 0.95,
            transition: { type: "spring", stiffness: 400, damping: 50 }
        }
    }
    const animationVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { delay: 0.5 } },
        exit: { opacity: 0 }
    }

    //animate the card
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [30, -30]);
    const rotateY = useTransform(x, [-100, 100], [-30, 30]);
    const {ref:cardRef,inView} = useInView({threshold:0.7});
    // animation params
    const initial =(index)=> ({y: 20+2*index,opacity: 0});
    const transition =(index)=> ({delay:0.2*index, duration:0.5+0.1*index});
    const animation = useAnimation();
    useEffect(()=> {
        console.log(inView)
        console.log(cardRef)
        if(inView){
            animation.start({
                opacity:1,
                y:0
            })
        }
    },[inView,animation]);


    return (
        <IDoElementWrapper
            onClick={() => { setClicked(!clicked) }}
            as={motion.div}
            ref={node=>{cardRef(node);}}
            whileHover={"hover"}
            whileTap={"tap"}
            variants={cardVariants}>
            <IDoElementImagesWrapper
                as={motion.div}
                drag
                dragConstraints={{left:0,right:0,top:0,bottom:0}}
                dragElastic={0.1}
                whileDrag={{ scale: 1.2 }}
            >
                    {data?.images?.map((image, index) => (
                        <IDoElementImageHolder
                            as={motion.div}
                            key={index}
                            drag
                            dragConstraints={{left:0,right:0,top:0,bottom:0}}
                            dragElastic={0.1}
                            whileDrag={{ translateX:-10, scale: 1.2 }}
                            style={{x,y,rotateX,rotateY,z:index===0?500:800}}
                            initial={initial(index)}
                            animate={animation}
                            transition={transition(index)}>
                            <IDoElementImage src={image}/>
                        </IDoElementImageHolder>
                    ))}
            </IDoElementImagesWrapper>
            <IDoTextArea>
                <AnimatePresence>
                    {!clicked &&
                        <Heading
                            key={0}
                            as={motion.div}
                            initial="initial"
                            animate="animate"
                            variants={animationVariants}
                            exit="exit"
                            fontSize={'clamp(2rem, 3vw, 2.2rem)'}>
                            {data?.title}
                        </Heading>
                        ||
                        <IDoDescription
                            key={1}
                            as={motion.div}
                            initial="initial"
                            animate="animate"
                            variants={animationVariants}
                            exit="exit">
                            {data?.descriptionEs}
                        </IDoDescription>
                    }
                </AnimatePresence>
            </IDoTextArea>
        </IDoElementWrapper>
    )
}

export default IDoElement