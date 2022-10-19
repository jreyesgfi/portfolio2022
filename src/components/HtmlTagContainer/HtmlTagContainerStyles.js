import styled from "styled-components";
import { globalColors, Row, Text } from "../../globalStyles";

export const HtmlDecorationContainer = styled.div`
    display:flex;
    flex-direction:${({direction})=>(direction?direction:'column')};
    flex-wrap:wrap;
    margin:0 auto 0 0;
    align-items: center;
    gap:${({direction})=>(direction==='row'?'2rem':'0.5rem')};
    max-width: ${({direction})=>(direction==='row'?'90vw':'50vw')};
    width:fit-content;
    
    >*{
        display:inline-block;
        width:fit-content;
        margin: 0 auto 0 0;
    }
`;

export const HtmlTagDecoration = styled(Text)`
    font-family: curvy;
    font-size:${({size})=>(size?size:'clamp(2rem, 3vw, 3.5rem)')};
    display:block;
    color:${globalColors.grey.primary}
`;