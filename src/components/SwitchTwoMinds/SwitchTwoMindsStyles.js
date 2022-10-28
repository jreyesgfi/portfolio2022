import { motion } from "framer-motion";
import styled from "styled-components";
import { globalColors } from "../../globalStyles";


export const SwitchHolder = styled.div`
    position: relative;
    height: 5vh;
    width: clamp(100px, 20vw, 180px);
    padding:0.3vh;
    border-radius: 2.5vh;
    background-color: ${globalColors.grey.primary}
`;
export const SwitchPivot = styled(motion.div)`
    position: absolute;
    inset:0;
    margin:auto;
    height:4.2vh;
    width:4.2vh;
    border-radius:50%;
    background-color: ${globalColors.dark.primary};
`;