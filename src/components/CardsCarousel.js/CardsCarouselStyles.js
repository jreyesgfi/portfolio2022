import styled from "styled-components";
import { Row } from "../../globalStyles";


// export const CardsCarouselHolder = styled.div`
//     position: absolute;
//     inset:0;
//     margin:auto;
//     width:100vw;
//     height:fit-content;
//     overflow: visible;
// `;
export const CardsCarouselElement = styled(Row)`
    position: absolute;
    inset:10vh auto 0 0;
    margin:auto;
    width:100vw;
    height:fit-content;
    gap:10vw;
    cursor: grab;
    overflow-x:visible;
    padding:0 20vw;
    
    /* hide scrollbar but allow scrolling */
    >*{
        transition: all 0.5s linear;
        transform: ${({scrollxpos})=>(scrollxpos?`translateX(${scrollxpos}px)`:'')}
    }

`;