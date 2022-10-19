import styled from "styled-components";
import { globalColors, mediumSize, Row, Text } from "../../globalStyles";

const row = {
    gap:'2rem',
    'max-width':'90vw',
    'flex-direction':'row'
}

const column = {
    gap:'0rem',
    'max-width':'min(80vw, 500px)',
    'flex-direction':'column'
}

const columnOrRow = (direction)=>{
    if (direction === 'row'){
        return row
    }
    return column
}

export const HtmlDecorationContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
    margin:0 auto 0 0;
    align-items: center;
    width:fit-content;
    ${columnOrRow('row')}
    
    >*{
        display:inline-block;
        width:fit-content;
        margin: 0 auto 0 0;
    }

    @media screen and (max-width: ${mediumSize}){
        ${columnOrRow('column')}
    }
`;

export const HtmlTagDecoration = styled(Text)`
    font-family: curvy;
    font-size:${({size})=>(size?size:'clamp(2rem, 3vw, 3.5rem)')};
    display:block;
    color:${globalColors.grey.primary}
`;