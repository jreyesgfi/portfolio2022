import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Heading, Image, Text } from '../../globalStyles'
import { HolderToAnimate, IDoDescription, IDoElementImage, IDoElementWrapper, IDoTextArea } from './IDoElementStyles'

const IDoElement = ({ data }) => {
    const [clicked, setClicked] = useState(false);

    const cardVariants ={
        hover:{
            scale: 1.1,
            transition: { type: "spring", stiffness: 400, damping: 50 }
        },
        tap:{
            scale: 0.95,
            transition: { type: "spring", stiffness: 400, damping: 50 }
        }
    }
    const animationVariants = {
        initial:{opacity:0},
        animate:{opacity:1, transition:{delay:0.5}},
        exit:{opacity:0}
    }
    return (
        <IDoElementWrapper
            onClick={()=>{setClicked(!clicked)}}
            as={motion.div}
            whileHover={"hover"}
            whileTap={"tap"}
            variants={cardVariants}>
            <IDoElementImage src={data?.image} />
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