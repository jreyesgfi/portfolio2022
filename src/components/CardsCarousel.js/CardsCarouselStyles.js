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
    inset:0;
    margin:auto;
    width:100vw;
    height:fit-content;
    gap:2rem;
    cursor: grab;
    overflow-x:visible;
    scroll-snap-type: x mandatory;
    padding:0 25vw;
    /* hide scrollbar but allow scrolling */
    >*{
        
    }

`;