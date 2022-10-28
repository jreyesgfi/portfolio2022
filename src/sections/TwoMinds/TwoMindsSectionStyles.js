import styled from "styled-components";
import {motion} from "framer-motion";
import { globalColors } from "../../globalStyles";

export const TwoMindsSwitchWrapper = styled.div`
    margin-top: 5vh;
`;

export const TwoMindsChangingShape = styled(motion.div)`
    /* border-radius: ${({borderRadius})=>`${borderRadius}%`}; */
    height: clamp(200px, 46vw, 500px);
    width: clamp(200px, 46vw, 500px);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;