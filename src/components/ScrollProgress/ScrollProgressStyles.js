import styled from "styled-components";
import { globalColors, mediumSize, Row, Text } from "../../globalStyles";

const draftStyle = {
    ScrollProgressContainer: {
        border: `2px solid ${globalColors.grey.primary}`,
    },
    ProgressCircle:{
        'background-color': 'transparent',
    },
    ProgressCircleNumber:{
        color: 'transparent',
    }
}
const visitedStyle = {
    ProgressCircle:{
        'background-color': 'transparent',
        'border-color': 'transparent',
    },
    ProgressCircleNumber:{
        'color': 'transparent',
    },
    ProgressCircleIcon:{
        opacity: 1,
    }
}



export const ProgressBarContainer = styled.div`
    position: absolute;
    inset:0;
    margin:auto;
    width: calc(100% - 2.5rem);
    height:5px;
    background-color: ${globalColors.grey.primary};
`;

export const ProgressCircleContainer = styled(Row)`
    position: relative;
    width: 100%;
    height: 100%;
    justify-content: space-between;
`;

export const ProgressCircleNumber = styled(Text)`
    position: absolute;
    inset:0;
    margin:auto;
    width: fit-content;
    height: fit-content;
    font-size: 20pt;
    transition: color 1s ease-out;
`;
export const ProgressCircleIcon = styled.img`
    object-fit: cover;
    opacity: 0;
    width: 100%;
    height: 100%;
    border-radius:100%;
    background-color: ${globalColors.light.primary};
    transition: opacity 0.6s ease-in-out;
`;

export const ProgressCircle = styled.div`
    position: relative;
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 100%;
    border:5px solid ${globalColors.grey.primary};
    background-color: ${globalColors.light.primary};
    z-index:100;
    transition: background-color 500ms ease-out;
    ${({visited})=>(visited===1?visitedStyle.ProgressCircle:'')};
    ${ProgressCircleNumber}{
        ${({visited})=>(visited===1?visitedStyle.ProgressCircleNumber:'')};
    }
    ${ProgressCircleIcon}{
        ${({visited})=>(visited===1?visitedStyle.ProgressCircleIcon:'')};
    }
    @media screen and (max-width: ${mediumSize}) {
		width: 2.7rem;
        height: 2.7rem;
        border-width:2pt;
    }
`;

export const ProgressBarColor= styled.div`
    height:100%;
    width:${({progress})=>((progress??0).toString()+'%')};;
    border-radius:5px;
    background-color: ${globalColors.color.primary};
    position: absolute;
    inset:auto auto auto 0;
`;

export const ScrollProgressContainer = styled.div`
    position:  fixed;
    inset: auto 7vw 6vh auto;
    margin:auto;
    border: 2px solid #ffffff00;
    transition: border 0.6s ease-out;
    width: 62vw;
    max-width: 500px;
    height: 3.2rem;
    z-index:200;
    ${({draft})=>(draft===1?draftStyle.ScrollProgressContainer:'')};
    @media screen and (max-width: ${mediumSize}) {
		inset: auto 0 3vh 0;
        height: 2.9rem;
    }
    ${ProgressCircle}{
        ${({draft})=>(draft===1?draftStyle.ProgressCircle:'')};
    }
    ${ProgressCircleNumber}{
        ${({draft})=>(draft===1?draftStyle.ProgressCircleNumber:'')};
    }

`;