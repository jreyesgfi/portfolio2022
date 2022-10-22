import styled from "styled-components";
import { Row } from "../../globalStyles";


export const TarjetCarouselHolder = styled.div`
    position: absolute;
    inset:0;
    margin:auto;
    width:100vw;
    height:fit-content;
`;
export const IDoCarousel = styled(Row)`
    
    gap:2rem;
    overflow-x:scroll;
    /* hide scrollbar but allow scrolling */
`;