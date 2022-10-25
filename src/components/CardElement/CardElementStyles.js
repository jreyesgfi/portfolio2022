import styled from "styled-components";
import { Column, globalColors, Heading, mediumSize, Text } from "../../globalStyles";


export const CardTextArea = styled.div`
    position:relative;
    height:50%;
    width:82%;
    margin:auto;
    >*{
        position:absolute;
        inset:0 0 auto;
        margin:1rem auto;
        max-width:100%;
        width:fit-content;
        height:fit-content;
        text-align:center;
    }
    @media screen and (max-width: ${mediumSize}) {
        width:70%;
        >*{
       inset:0;
    }
	}
`;

export const CardDescription = styled.p`
    color:${({inverse})=>inverse?globalColors.dark.primary:globalColors.light.primary};
    user-select: none;
    font-size:clamp(12pt,1.5vw,16pt);
    color: ${globalColors.dark.primary};
`;
export const CardElementImageHolder = styled.div`
    /* pointer-events: none; */
    position: absolute;
    margin: auto;
    inset: 0;
	width:100%;
	height:100%;
    /* transition: all 0.4s ease-out; */
    
`;

export const CardElementImagesWrapper = styled.div`
    position:relative;
    margin:-25% auto 1rem auto;
    width:50%;
	height:50%;
    perspective:1800;
    /* &:hover ${CardElementImageHolder}{
      transition: all 0s;
    } */
`;



export const CardElementImage = styled.img`
    object-fit:cover;
    position: absolute;
    margin: auto;
    inset: 0;
    max-width:100%;
    max-height:100%;
    pointer-events: none;
    border-radius: 1rem;
    /* box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23); */
`

export const CardElementWrapper = styled(Column)`
    height:45vh;
    padding-top:2rem;
    flex:clamp(250px,50vw,600px) 0 0;
    background-color:'transparent';
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    border-bottom:2px solid ${globalColors.dark.primary};
    border-radius: 1rem;
    scroll-snap-align: center;
    
    @media screen and (max-width: ${mediumSize}) {
        height:35vh;
    }
        /* box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22); */
`;  
